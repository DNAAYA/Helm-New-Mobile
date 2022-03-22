import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{
  @Input() question: Question ; 
  questionWithInput = [];
  _inputValue1; _inputValue2; _inputValue3; _inputValue4 


  constructor() { }

  ngOnInit() {
    console.log('question Input >>>', this.question)
    let _measurement0 = this.question.question.includes('/measurement0/');
    let _measurement1 = this.question.question.includes('/measurement1/');
    let _number = this.question.question.includes('/number/');
    let _number0 = this.question.question.includes('/number0/');
    let _number1 = this.question.question.includes('/number1/');

    let _text = this.question.question.includes('/text/');

    // _measurement0 && _measurement1
    if(_measurement0 && _measurement1 && _text) {

      let part1 = this.question.question.split('/measurement0/');
      let part2 = part1[1].split('/measurement1/');
      let part3 = part2[1].split('/text/')

     this.questionWithInput.push(part1[0], part2[0], ...part3)
     //console.log('split question 3 INPUTS >>', this.questionWithInput)

     }
         // number 
    else if (_number && !_measurement0 && !_measurement1) {
      let part1 = this.question.question.split('/number/');
     // console.log('contain number', part1)
      this.questionWithInput.push(...part1)
    }
     else if(_measurement0 && _measurement1 ) {
     let part1 = this.question.question.split('/measurement0/');
     let part2 = part1[1].split('/measurement1/');
      this.questionWithInput.push(part1[0], ...part2)
     //console.log('split question ', this.questionWithInput);
     //console.log('split question 2 INPUTS >>', this.questionWithInput)

    } 
    // _measurement0 && _measurement1
    else if (_measurement0 && !_measurement1) {
     let part1 = this.question.question.split('/measurement0/');
      this.questionWithInput.push(...part1)
     //console.log('split question 1 INPUTS >>', this.questionWithInput)

    } 

    else if (_measurement0 && _number) {
      let part1 = this.question.question.split('/measurement0/');
      let part2 = part1[1].split('/number/');
      this.questionWithInput.push(part1[0], ...part2)
    }
     else if (_number0 && _number1) {
      let part1 = this.question.question.split('/number0/');
      let part2 = part1[1].split('/number1/');
      this.questionWithInput.push(part1[0], ...part2)
    } 
    else if (_number0) {
      let part1 = this.question.question.split('/number0/');
      this.questionWithInput.push(...part1)
     } else if(_text){
       let part1 = this.question.question.split('/text/');
      this.questionWithInput.push(...part1)
     }
  }
}
