import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Division } from '../models/division';
import { DuplicateDivision } from '../models/duplicate-division';
import { DatabaseService } from '../services/database.service';
import { LocalStorageService } from '../services/local-storage.service';

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
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    //  private localD   B: LocalStorageService
    private alertController: AlertController,
    private navCtrl: NavController,

  ) { }

async  ngOnInit() {
    let subID = this.activatedRoute.snapshot.params['subID'];
    this.type = this.activatedRoute.snapshot.params['type'];
    this.auditKey = this.activatedRoute.snapshot.params['auditKey'];

    console.log('Sub priority ID', subID);
    console.log(' router type', this.type);

    if(this.type == 'main') {
      // get sub priorities 
    await  this.dbService.getDivisionsBySubID(subID).then((divs: Division[]) => {
        this.divisionList = divs;
      }) 
      console.log('Main content Division ..', this.divisionList)
    } else if(this.type == 'duplicated'){
       await this.getDuplicatedDiv(subID);
      //console.log('duplicated content ..', this.duplicateDivision)
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
      duplicated_ID: '',
      title: `# ${title}`,
      parent_DivID: div.divison_ID,
      parent_SubID: div.sub_ID
    }
  //  console.log('Confirm save: subtitle', object);
    this.dbService.duplicateDivision(this.auditKey,duplicateDiv);
  }
  
  async getDuplicatedDiv(subID) {
    console.log('getDuplicatedDiv ..', subID)
   await this.dbService.getDuplicatedDivBySubID(this.auditKey, subID).then(res => {
      this.duplicatedDivs = res;
      console.log('duplicated Divisions', this.duplicatedDivs)
    })
  }

  async getDuplicatedDivByDivID(divID) {
    await this.dbService.getDuplicatedDiv(this.auditKey,divID).then(res => {
      console.log('duplicated divisions <<>>>', res)
      this.duplicatedDivs = res;
      console.log('duplicated divisions', this.duplicatedDivs)
    })

  }
gotoMainQuest(div) {
    console.log('gotoquestions div', div);

  let navigationExtras: NavigationExtras = {
        queryParams: {
            type:  'main',
            divID: div['divison_ID'],
            subID: div['sub_ID'],
            prID: div.priority_ID,
            auditKey: this.auditKey
        }
    };
    this.navCtrl.navigateForward(`/questions/`, navigationExtras);

}
  goQuestion(div) {
    console.log('gotoquestions div', div);
    let dnavigationExtras: NavigationExtras = {
        queryParams: {
            type:  'duplicated',
            divID: div['duplicated_ID'],
            subID: div['parent_SubID'],
            prID: div['parent_DivID'],
            auditKey: this.auditKey
        }
      }
    this.navCtrl.navigateForward(`/questions/`, dnavigationExtras);

  }

  deleteDuplicatedDiv(id) {
    this.dbService.deleteDuplicatedDivision(this.auditKey, id);
  }

}
