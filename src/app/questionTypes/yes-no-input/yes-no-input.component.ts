import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-yes-no-input',
  templateUrl: './yes-no-input.component.html',
  styleUrls: ['./yes-no-input.component.scss'],
})
export class YesNoInputComponent implements OnInit {
  @Input() question: any ;
  @Input() auditKey: string ; 
  @Input() renderQuestions: any ; 

  rightAnswer; wrongAnswer;
  constructor(
    private db: DatabaseService
  ) { }

  async ngOnInit() {
   // console.log('question List', this.question);
        if(this.question.right_en.includes('/number0/') || this.question.wrong_en.includes('/number0/')) {
          this.rightAnswer = this.question.right_en.split('/number0/');
          this.wrongAnswer = this.question.wrong_en.split('/number0/');
        } 
        else if (this.question.right_en.includes('/measurement0/') || this.question.wrong_en.includes('/measurement0/')) {
          this.rightAnswer = this.question.right_en.split('/measurement0/');
          this.wrongAnswer = this.question.wrong_en.split('/measurement0/');
        }
        else if (this.question.right_en.includes('/result0/') || this.question.wrong_en.includes('/result0/')) {
          this.rightAnswer = this.question.right_en.split('/result0/');
          this.wrongAnswer = this.question.wrong_en.split('/result0/');
        }
        
        // get right question will display while answer is yes
        // console.log('rightanswer', this.rightAnswer);

  }

}
