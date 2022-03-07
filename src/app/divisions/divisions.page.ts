import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    private alertController: AlertController,
  //  private localDB: LocalStorageService
  ) { }

async  ngOnInit() {
    let subID = this.activatedRoute.snapshot.params['subID'];
     this.type = this.activatedRoute.snapshot.params['type'];
    console.log('Sub priority ID', subID);
    console.log(' router type', this.type);

    if(this.type == 'main') {
      // get sub priorities 
    await  this.dbService.getDivisionBySubID(subID).then((divs: Division[]) => {
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
    let duplicateDiv: DuplicateDivision  = {
      duplicated_ID: '',
      title: `# ${title}`,
      parent_DivID: div.divison_ID,
      parent_SubID: div.sub_ID
    }
  //  console.log('Confirm save: subtitle', object);
    this.dbService.duplicateDivision(duplicateDiv);
  }
  
  getDuplicatedDiv(subID) {
    console.log('getDuplicatedDiv ..', subID)
    this.dbService.getDuplicatedDivBySubID(subID).then(res => {
      this.duplicatedDivs = res;
      console.log('duplicated Divisions', res)
    })
  }

  getDuplicatedDivByDivID(divID) {
    this.dbService.getDuplicatedDiv(divID).then(res => {
      this.duplicatedDivs = res;
    })

  }

}
