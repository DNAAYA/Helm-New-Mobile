import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuditQuestion } from 'src/app/models/auditQuestion';
import { Question } from 'src/app/models/question';
import { DatabaseService } from 'src/app/services/database.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{
  @Input() question: any ; 
  @Input() auditKey: string ; 
  auditQuestion: any;
  
  questionWithInput = [];
  _inputValue1; _inputValue2; _inputValue3; _inputValue4
  _measurement1: any;
  _measurement0: any;
  _number: any;
  _number0: any;
  _number1: any;
  _text: any;


  constructor(private db: DatabaseService) { }

  async ngOnInit() {
    console.log('this.question >>> ', this.question);
     await this.db.checkAuditQuestions(this.auditKey, this.question.question_ID).then((res => {
      console.log('check audit question result>> ', res);
      if(res['status'] == true) {
         this.auditQuestion = res['question'];
      }
    }))

    if (this.auditQuestion) {
    // console.log('question Input >>>', this.question)
     this._measurement0 = this.auditQuestion.question.includes('/measurement0/');
     this._measurement1 = this.auditQuestion.question.includes('/measurement1/');
     this._number = this.auditQuestion.question.includes('/number/');
     this._number0 = this.auditQuestion.question.includes('/number0/');
     this._number1 = this.auditQuestion.question.includes('/number1/');
     this._text = this.auditQuestion.question.includes('/text/');

      // _measurement0 && _measurement1
    if(this._measurement0 && this._measurement1 && this._text) {

      let part1 = this.auditQuestion.question.split('/measurement0/');
      let part2 = part1[1].split('/measurement1/');
      let part3 = part2[1].split('/text/')

     this.questionWithInput.push(part1[0], part2[0], ...part3)
     //console.log('split question 3 INPUTS >>', this.questionWithInput)

     }
         // number 
    else if (this._number && !this._measurement0 && !this._measurement1) {
      let part1 = this.auditQuestion.question.split('/number/');
     // console.log('contain number', part1)
      this.questionWithInput.push(...part1)
    }
     else if(this._measurement0 && this._measurement1 ) {
     let part1 = this.auditQuestion.question.split('/measurement0/');
     let part2 = part1[1].split('/measurement1/');
      this.questionWithInput.push(part1[0], ...part2)
     //console.log('split question ', this.questionWithInput);
     //console.log('split question 2 INPUTS >>', this.questionWithInput)

    } 
    // _measurement0 && _measurement1
    else if (this._measurement0 && !this._measurement1) {
     let part1 = this.auditQuestion.question.split('/measurement0/');
      this.questionWithInput.push(...part1)
     //console.log('split question 1 INPUTS >>', this.questionWithInput)

    } 

    else if (this._measurement0 && this._number) {
      let part1 = this.auditQuestion.question.split('/measurement0/');
      let part2 = part1[1].split('/number/');
      this.questionWithInput.push(part1[0], ...part2)
    }
     else if (this._number0 && this._number1) {
      let part1 = this.auditQuestion.question.split('/number0/');
      let part2 = part1[1].split('/number1/');
      this.questionWithInput.push(part1[0], ...part2)
    } 
    else if (this._number0) {
      let part1 = this.auditQuestion.question.split('/number0/');
      this.questionWithInput.push(...part1)
     } else if(this._text){
       let part1 = this.auditQuestion.question.split('/text/');
      this.questionWithInput.push(...part1)
     }

    } else  {
          // console.log('question Input >>>', this.question)
     this._measurement0 = this.question.question.includes('/measurement0/');
     this._measurement1 = this.question.question.includes('/measurement1/');
     this._number = this.question.question.includes('/number/');
     this._number0 = this.question.question.includes('/number0/');
     this._number1 = this.question.question.includes('/number1/');
     this._text = this.question.question.includes('/text/');


       // _measurement0 && _measurement1
    if(this._measurement0 && this._measurement1 && this._text) {

      let part1 = this.question.question.split('/measurement0/');
      let part2 = part1[1].split('/measurement1/');
      let part3 = part2[1].split('/text/')

     this.questionWithInput.push(part1[0], part2[0], ...part3)
     //console.log('split question 3 INPUTS >>', this.questionWithInput)

     }
         // number 
    else if (this._number && !this._measurement0 && !this._measurement1) {
      let part1 = this.question.question.split('/number/');
     // console.log('contain number', part1)
      this.questionWithInput.push(...part1)
    }
     else if(this._measurement0 && this._measurement1 ) {
     let part1 = this.question.question.split('/measurement0/');
     let part2 = part1[1].split('/measurement1/');
      this.questionWithInput.push(part1[0], ...part2)
     //console.log('split question ', this.questionWithInput);
     //console.log('split question 2 INPUTS >>', this.questionWithInput)

    } 
    // _measurement0 && _measurement1
    else if (this._measurement0 && !this._measurement1) {
     let part1 = this.question.question.split('/measurement0/');
      this.questionWithInput.push(...part1)
     //console.log('split question 1 INPUTS >>', this.questionWithInput)

    } 

    else if (this._measurement0 && this._number) {
      let part1 = this.question.question.split('/measurement0/');
      let part2 = part1[1].split('/number/');
      this.questionWithInput.push(part1[0], ...part2)
    }
     else if (this._number0 && this._number1) {
      let part1 = this.question.question.split('/number0/');
      let part2 = part1[1].split('/number1/');
      this.questionWithInput.push(part1[0], ...part2)
    } 
    else if (this._number0) {
      let part1 = this.question.question.split('/number0/');
      this.questionWithInput.push(...part1)
     } else if(this._text){
       let part1 = this.question.question.split('/text/');
      this.questionWithInput.push(...part1)
     }
    
    }

  
  }
}
