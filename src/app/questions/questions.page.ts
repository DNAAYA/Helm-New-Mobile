import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Division } from '../models/division';
import { DuplicatedQuestion } from '../models/duplicatedQuestion';
import { Question } from '../models/question';
import { Subpriority } from '../models/Subpriority';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  questionList = [];
  duplicatedquestions= [];
  indexofDivision;
  _previousDiv: Division;
  _nextDiv: Division;
  _thisDivision: Division;
  type;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService
  ) { }

  async ngOnInit() {

   let divID = this.activatedRoute.snapshot.params['divId'];
   let subId = this.activatedRoute.snapshot.params['subId'];
   let prId = this.activatedRoute.snapshot.params['prId'];
    this.type = this.activatedRoute.snapshot.params['type'];

   console.log('#) sub ID from router: ', subId);
   console.log('#) priority ID from router: ', prId);
   console.log('#) div ID from router: ', divID);
   console.log('#) type  from router: ', this.type);

     // console.log('division id:', divID, subId, prId, type);
     if(this.type == 'main') {
        // console.log('main question divsion id', divID)
        //get question list buy division id
       await this.dbService.getQuestionByDivID(divID).then((questions: Question[]) => {
          this.questionList = questions ;
          console.log('main question list >>>', this.questionList);
        })
    } else {
       await this.getDuplicatedQuestion(divID);
        console.log('duplicated question ..', this.questionList)

    }

    // get divisions
    await this.getDivision(subId, divID);
  }



  getDivision(subId, divID) {
    this.dbService.getDivisionBySubID(subId).then((divs: Division[]) => {
      console.log('divisions list', divs);
      this.indexofDivision = divs.findIndex(i => i.divison_ID == divID);
      this._thisDivision = divs[this.indexofDivision];
      this._previousDiv = divs[this.indexofDivision - 1];
      this._nextDiv = divs[this.indexofDivision + 1];

      console.log('previous division', this._previousDiv);
      console.log('next division', this._nextDiv);

    })
  }
  getDuplicatedQuestion(divID) {
    console.log('getDuplicatedDiv ..', divID)
    this.dbService.getDuplicatedQuestionByDuplicatedDivision(divID).then((res: DuplicatedQuestion[]) => {
     // console.log('duplicated questions', res);
      this.questionList = res
    })
  }

  saveAnswer() {
    let questID =  "-Mx0NZwuxdH96kh-unRZ";

    this.questionList.forEach(q => {

      this.dbService.sendAnswer(questID, q);
    })
  }

}
