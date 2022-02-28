import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Division } from '../models/division';
import { DuplicateDivision } from '../models/duplicate-division';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.page.html',
  styleUrls: ['./divisions.page.scss'],
})
export class DivisionsPage implements OnInit {
  divisionList = [];
  duplicatedDivs = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    private alertController: AlertController
  ) { }

async  ngOnInit() {
    let subID = this.activatedRoute.snapshot.params['subID'];
    let prID = this.activatedRoute.snapshot.params['prID'];
    let type = this.activatedRoute.snapshot.params['type'];
    console.log('Sub priority ID', subID);
    console.log(' priority ID', prID);
    console.log(' router type', type);

    if(type == 'main') {
      // get sub priorities 
    await  this.dbService.getDivisionBySubID(subID).then((divs: Division[]) => {
        this.divisionList = divs;
      }) 
      console.log('Main content Division ..', this.divisionList)


    } else {
       this.getDuplicatedDiv(subID);
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
      division: div,
      duplicated_ID: '',
      title: title
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

}