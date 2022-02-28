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

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService
  ) { }

  async ngOnInit() {
    let divID = this.activatedRoute.snapshot.params['divId'];
    let subId = this.activatedRoute.snapshot.params['subId'];
    let prId = this.activatedRoute.snapshot.params['prId'];
    let type = this.activatedRoute.snapshot.params['type'];

     // console.log('division id:', divID, subId, prId, type);
         if(type == 'main') {
          //get question list buy division id
          this.dbService.getQuestionByPr_Sub_Division(prId, subId, divID).then((questions: Question[]) => {
            this.questionList = questions ;
            console.log('question list', this.questionList);
          })
    } else {
       await this.getDuplicatedQuestion(divID);
        console.log('duplicated question ..', this.questionList)
        
    }

    // get divisions 
    await this.getDivision(prId, subId, divID);
  }

  getDivision(prId, subId, divID) {
    this.dbService.getDivisionWithPriorityIDAndSubIS(prId, subId).then((divs: Division[]) => {
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

}
