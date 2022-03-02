import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Question } from '../models/question';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.page.html',
  styleUrls: ['./question-details.page.scss'],
})
export class QuestionDetailsPage implements OnInit {
  imgUrL = 'https://images.unsplash.com/photo-1612896488082-7271dc0ed30c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80'
  question: Question;
  questionID: string;
  constructor(
    public alertController: AlertController, 
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService) {
      this.questionID = this.activatedRoute.snapshot.params['qID'];
     }

 async ngOnInit() {
    console.log('question id : >>> ', this.questionID)
    if(this.questionID) {
      await this.getQuestion(this.questionID);
    }
    console.log('question information', this.question)
  }

  getQuestion(qid) {
    this.dbService.getQuestion(qid).then((question: Question ) => {
      this.question = question;
    })
  }
  
 async QuestionDetails() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: `${this.question.fullQuestion}`,
      message: `<img src="${this.question.ada_image}"  class="card-image">`,
      buttons: [
         {
          text: 'Close',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
    console.log('request details', )
  }

  deleteImg() {

  }

  saveNote() {
    
  }
}
