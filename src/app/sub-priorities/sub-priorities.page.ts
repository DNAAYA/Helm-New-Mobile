import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DuplicatedSub } from '../models/duplicatedSub';
import { Subpriority } from '../models/Subpriority';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-sub-priorities',
  templateUrl: './sub-priorities.page.html',
  styleUrls: ['./sub-priorities.page.scss'],
})
export class SubPrioritiesPage implements OnInit {
subPrioritiesList = [];
duplicatedSub = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    let prID = this.activatedRoute.snapshot.params['id'];
    
    console.log('priority ID', prID);
    // get sub priorities 
    this.dbService.getSubPriorityWithPriorityID(prID).then((subs: Subpriority[]) => {
      this.subPrioritiesList = subs;
    })
  }


  getDuplicatedSup(subid) {
    console.log('hello getDuplicatedSup', subid);
    this.dbService.getDuplicatedSub(subid).then(res => {
      this.duplicatedSub = res;
      console.log('duplicated sup', res)
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
            this.duplicateSupPriority(sub, object.subTitle);
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  duplicateSupPriority(sub: Subpriority, title) {
    let duplicateSub: DuplicatedSub = {
      duplicated_ID: '',
      parentSub: sub,
      subTitle: `${sub.sub_name}: ${title}` ,
      parentID: sub.sub_ID
    }
  //  console.log('Confirm save: subtitle', object);
    this.dbService.duplicateSubPriority(duplicateSub);
  }

}
