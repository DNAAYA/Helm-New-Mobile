import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Division } from '../models/division';
import { DuplicateDivision } from '../models/duplicate-division';
import { DatabaseService } from '../services/database.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@ionic/storage';
import { Question } from '../models/question';
import { DuplicatedQuestion } from '../models/duplicatedQuestion';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.page.html',
  styleUrls: ['./divisions.page.scss'],
})
export class DivisionsPage implements OnInit {
  divisionList = [];
  duplicatedDivs = [];
  type;
  auditKey: any;
  subID: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    private storage: Storage,
    //  private localD   B: LocalStorageService
    private alertController: AlertController,
    private navCtrl: NavController,

  ) { }

async  ngOnInit() {
    this.subID = this.activatedRoute.snapshot.params['subID'];
    this.type = this.activatedRoute.snapshot.params['type'];
    this.auditKey = this.activatedRoute.snapshot.params['auditKey'];

    console.log('Sub priority ID', this.subID);
    console.log(' router type', this.type);

    if(this.type === 'main') {
      // get sub priorities 
      await  this.storage.get(`divisions-${this.auditKey}`).then((divs: Division[]) => {
        this.divisionList = divs.filter(d => d.sub_ID == this.subID);
        console.log('Main content Division ..', this.divisionList)
      }) 
    } else if(this.type === 'duplicated'){
      await  this.storage.get(`duplicatedDivisions-${this.auditKey}`).then((divs: DuplicateDivision[]) => {
        console.log('duplicated content ..', divs)
        this.duplicatedDivs = divs.filter(d => d.parent_SubID == this.subID);
        console.log('duplicated content ..', this.duplicatedDivs)
      }) 
      
    }
  }

  async presentAlert(div: Division) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enter Division Title',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Division Title'
        }
      ],
     // message: 'This is an alert message.',
      buttons: [
        {
          text: 'Save',
          cssClass: 'secondary',
          id: 'save-button',
          handler: (object) => {
            console.log('handler object', object.title)
            this.duplicateDivision(div, object.title);
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  duplicateDivision(div: Division, title) {
    //console.log('')
    let duplicateDiv: DuplicateDivision  = {
      duplicated_ID: (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,""),
      title: `# ${title}`,
      parent_DivID: div.divison_ID,
      parent_SubID: div.sub_ID
    }
    this.storage.get(`duplicatedDivisions-${this.auditKey}`).then((divs: DuplicateDivision[]) => {
      divs.push(duplicateDiv)
      console.log('duplicated divs ..', divs)
      this.storage.set(`duplicatedDivisions-${this.auditKey}`, divs).then(()=> {
        this.getDuplicatedDivByDivID(div.divison_ID)
      })
      this.getDivQuestions(duplicateDiv)
    }) 
    //console.log('Confirm save: subtitle', object);
    //this.dbService.duplicateDivision(this.auditKey,duplicateDiv);
  }

  getDivQuestions(dDiv) {
    this.storage.get(`questions-${this.auditKey}`).then( questions => {
      console.log(dDiv)
      var dQuestions = []
      var divQuestions = questions.filter((e: Question) => e.division_ID == dDiv.parent_DivID)
      for (let q of divQuestions) {
        let duplicatedQuestion = new DuplicatedQuestion(q);
        duplicatedQuestion.parentDiv_ID = dDiv.duplicated_ID;
        duplicatedQuestion.parentSub_ID = dDiv.parent_SubID;
        duplicatedQuestion.duplicated_ID = (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
        dQuestions.push(duplicatedQuestion)
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
  /* async getDuplicatedDiv(subID) {
    console.log( subID)
    await this.dbService.getDuplicatedDivBySubID(this.auditKey, subID).then(res => {
        this.duplicatedDivs = res;
        console.log('duplicated Divisions', this.duplicatedDivs)
    })
  } */

  async getDuplicatedDivByDivID(divID) {
    await this.storage.get(`duplicatedDivisions-${this.auditKey}`).then((divs: DuplicateDivision[]) => {
      console.log('duplicated content ..', divs)
      this.duplicatedDivs = divs.filter(d => d.parent_DivID == divID && d.parent_SubID === this.subID);
      console.log('duplicated divs ..', this.duplicatedDivs)
    }) 
  }

  deleteDuplicatedDiv(dDiv) {
    console.log(dDiv)
    this.storage.get(`duplicatedDivisions-${this.auditKey}`).then( dDivs => {
      console.log(dDivs)
      var deletedDiv = dDivs.find( e => {
        console.log(e.parent_DivID,dDiv.parent_DivID)
        return e.parent_DivID === dDiv.parent_DivID && e.parent_SubID === this.subID
      })
      var i = dDivs.indexOf(deletedDiv)
      var x = this.duplicatedDivs.indexOf(dDiv)
      console.log(i,deletedDiv)
      if (i > -1) dDivs.splice(i,1)
      if (i > -1) this.duplicatedDivs.splice(x,1)
      console.log(dDivs)
      this.storage.set(`duplicatedDivisions-${this.auditKey}`, dDivs)
    })
    this.storage.get(`duplicatedQuestions-${this.auditKey}`).then( dQs => {
      console.log(dQs)
      var x = dQs.length
      for (var j = 0; j<x ; j++) {
        var deletedQuestion = dQs.find( e => {
          console.log(e.parentDiv_ID,dDiv.duplicated_ID)
          return e.parentDiv_ID === dDiv.duplicated_ID}
        )
        var i = dQs.indexOf(deletedQuestion)
        console.log(i,deletedQuestion)
        if (i > -1) dQs.splice(i,1)
      }
      console.log(dQs)
      this.storage.set(`duplicatedQuestions-${this.auditKey}`, dQs)
    })
    //this.dbService.deleteDuplicatedDivision(this.auditKey, id);
  }

}
