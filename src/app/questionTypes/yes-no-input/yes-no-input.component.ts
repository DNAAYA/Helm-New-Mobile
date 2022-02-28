import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-yes-no-input',
  templateUrl: './yes-no-input.component.html',
  styleUrls: ['./yes-no-input.component.scss'],
})
export class YesNoInputComponent implements OnInit {
  @Input() question: Question ; 
  rightAnswer; wrongAnswer;
  constructor() { }

  ngOnInit() {
    // console.log('question List', this.question);
    if(this.question.right_en.includes('/number/') || this.question.wrong_en.includes('/number/')) {
      this.rightAnswer = this.question.right_en.split('/number/');
      this.wrongAnswer = this.question.wrong_en.split('/number/');
    } else if (this.question.right_en.includes('/measurement0/') || this.question.wrong_en.includes('/measurement0/')) {
      this.rightAnswer = this.question.right_en.split('/measurement0/');
      this.wrongAnswer = this.question.wrong_en.split('/measurement0/');
    }
    // get right question will display while answer is yes
    // console.log('rightanswer', this.rightAnswer);

  }

}
