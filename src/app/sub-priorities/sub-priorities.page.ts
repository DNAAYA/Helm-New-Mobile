import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DuplicatedSub } from '../models/duplicatedSub';
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
      duplicated_ID: '',
      parent_SubID: subID,
      subTitle: `# ${title}`
    }
  //  console.log('Confirm save: subtitle', object);
    this.dbService.duplicateSubPriority(this.auditKey,duplicateSub);
  }
  
  deleteDuplicate(id){
    this.dbService.deleteDuplicateSubPriority(this.auditKey,id);
  }
  save() {

  }
}
