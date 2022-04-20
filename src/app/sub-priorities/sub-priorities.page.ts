import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DuplicateDivision } from '../models/duplicate-division';
import { DuplicatedQuestion } from '../models/duplicatedQuestion';
import { DuplicatedSub } from '../models/duplicatedSub';
import { Question } from '../models/question';
import { Subpriority } from '../models/Subpriority';
import { DatabaseService } from '../services/database.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-sub-priorities',
  templateUrl: './sub-priorities.page.html',
  styleUrls: ['./sub-priorities.page.scss'],
})
export class SubPrioritiesPage implements OnInit {
subPrioritiesList = [];
duplicatedSub = [];
  auditKey: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    private alertController: AlertController,
    private network: Network,
    private storage: Storage,
    // private localDB: LocalStorageService
  ) { }

  ngOnInit() {
    let prID = this.activatedRoute.snapshot.params['id'];
    this.auditKey = this.activatedRoute.snapshot.params['auditKey'];

    this.storage.get(`subPriorities-${this.auditKey}`).then((subs: Subpriority[]) => {
      this.subPrioritiesList = subs.filter((e: Subpriority) => e.priority_ID == prID)
      console.log('local sub priorities', this.subPrioritiesList)
    })
  }


  async getDuplicatedSup(subid) {
    console.log('sub id')
    this.storage.get(`subPrioritiesDuplicates-${this.auditKey}`).then((subs: DuplicatedSub[]) => {
      if (subs) this.duplicatedSub = subs.filter((e: DuplicatedSub) => e.parent_SubID == subid);
      console.log('duplicated sup',subs )
    })
  }


  async presentAlert(sub: Subpriority) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enter Sub Title',
      inputs: [
        {
          name: 'subTitle',
          type: 'text',
          placeholder: 'Sub Title'
        }
      ],
     // message: 'This is an alert message.',
      buttons: [
        {
          text: 'Save',
          cssClass: 'secondary',
          id: 'save-button',
          handler: (object) => {
            console.log('handler object', object.subTitle)
            this.duplicateSupPriority(sub.sub_ID, object.subTitle);
          }
        }
      ]
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
   // console.log('onDidDismiss resolved with role', role);
  }

  duplicateSupPriority(subID, title) {
    let duplicateSub: DuplicatedSub = {
      duplicated_ID: (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,""),
      parent_SubID: subID,
      subTitle: `# ${title}`
    }
    //  console.log('Confirm save: subtitle', object);
    this.storage.get(`subPrioritiesDuplicates-${this.auditKey}`).then( (dSubs: any[]) => {
      if (dSubs) {
        dSubs.push(duplicateSub)
      }
      else {
        dSubs = [duplicateSub]
      }
      console.log(dSubs)
      this.storage.set(`subPrioritiesDuplicates-${this.auditKey}`, dSubs)
      this.duplicateDivisions(duplicateSub.parent_SubID,duplicateSub.duplicated_ID)
    })
    //this.dbService.duplicateSubPriority(this.auditKey,duplicateSub);
  }

  getSubDivisions(subID) {
    return this.storage.get(`divisions-${this.auditKey}`)
    .then( divs => {
      var divList = divs.filter(d => d.sub_ID == subID);
      console.log(divList)
      return divList
    })
  }
  duplicateDivisions(parent_SubID,duplicated_ID) {
    this.getSubDivisions(parent_SubID).then( subDivs => {
      this.storage.get(`duplicatedDivisions-${this.auditKey}`).then( dDivs => {
        for (let div of subDivs) {
          div = {
            duplicated_ID: (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,""),
            parent_DivID: div.divison_ID,
            parent_SubID: duplicated_ID,
            title: `# ${div.division_name}`
          }
          dDivs.push(div)
        }
        console.log(dDivs)
        this.storage.set(`duplicatedDivisions-${this.auditKey}`, dDivs)
        this.getDuplicatedSup(parent_SubID)
        this.getDivQuestions(dDivs)
      })
    })
  }
  getDivQuestions(dDivs) {
    this.storage.get(`questions-${this.auditKey}`).then( questions => {
      var dQuestions = []
      for (let subDiv of dDivs) {
        var divQuestions = questions.filter((e: Question) => e.division_ID == subDiv.parent_DivID)
        for (let q of divQuestions) {
          console.log(subDiv)
          let duplicatedQuestion = new DuplicatedQuestion(q);
          duplicatedQuestion.parentDiv_ID = subDiv.duplicated_ID;
          duplicatedQuestion.parentSub_ID = subDiv.parent_SubID;
          duplicatedQuestion.duplicated_ID = (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
          dQuestions.push(duplicatedQuestion)
        }
      }
      console.log(dQuestions)
      this.duplicateQuestions(dQuestions)
    })
  }
  duplicateQuestions(dQuestions){
    this.storage.get(`duplicatedQuestions-${this.auditKey}`).then( dQs => {
      dQs.push(...dQuestions)
      console.log(dQs)
      this.storage.set(`duplicatedQuestions-${this.auditKey}`, dQs)
    })
  }
  deleteDuplicate(dSub){
    console.log(dSub)
    this.storage.get(`subPrioritiesDuplicates-${this.auditKey}`).then( dSubs => {
      console.log(dSubs)
      var deletedSub = dSubs.find( e => e.duplicated_ID === dSub.duplicated_ID)
      var i = dSubs.indexOf(deletedSub)
      var x = this.duplicatedSub.indexOf(dSub)
      if (i > -1) dSubs.splice(i,1)
      if (i > -1) this.duplicatedSub.splice(x,1)
      console.log(i,dSub,dSubs)
      this.storage.set(`subPrioritiesDuplicates-${this.auditKey}`, dSubs)
    })
    this.storage.get(`duplicatedDivisions-${this.auditKey}`).then( dDivs => {
      console.log(dDivs)
      var x = dDivs.length
      for (var j = 0; j<x ; j++) {
        var deletedDiv = dDivs.find( e => e.parent_SubID === dSub.duplicated_ID)
        var i = dDivs.indexOf(deletedDiv)
        console.log(i,deletedDiv)
        if (i > -1) dDivs.splice(i,1)
      }
      console.log(dDivs)
      this.storage.set(`duplicatedDivisions-${this.auditKey}`, dDivs)
    })
    this.storage.get(`duplicatedQuestions-${this.auditKey}`).then( dQs => {
      console.log(dQs)
      var x = dQs.length
      for (var j = 0; j<x ; j++) {
        var deletedQuestion = dQs.find( e => {
          console.log(e.parentSub_ID,dSub.duplicated_ID)
          return e.parentSub_ID === dSub.duplicated_ID}
        )
        var i = dQs.indexOf(deletedQuestion)
        console.log(i,deletedQuestion)
        if (i > -1) dQs.splice(i,1)
      }
      console.log(dQs)
      this.storage.set(`duplicatedQuestions-${this.auditKey}`, dQs)
    })
    //this.dbService.deleteDuplicateSubPriority(this.auditKey,id);
  }
  save() {

  }
}
