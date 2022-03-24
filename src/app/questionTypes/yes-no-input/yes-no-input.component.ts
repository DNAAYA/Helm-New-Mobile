import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-yes-no-input',
  templateUrl: './yes-no-input.component.html',
  styleUrls: ['./yes-no-input.component.scss'],
})
export class YesNoInputComponent implements OnInit {
  @Input() question: any ;
  auditQuestion: any;
  @Input() auditKey: string ; 

  rightAnswer; wrongAnswer;
  constructor(
    private db: DatabaseService
  ) { }

  async ngOnInit() {
    console.log('audit Key', this.auditKey);
     await this.db.checkAuditQuestions(this.auditKey, this.question).then((res => {
      console.log('check audit question result>> ', res);
      if(res['status'] == true) {
        this.auditQuestion = res['question'];
      }
    }))
    if(this.auditQuestion) {
      // console.log('question List', this.question);
      if(this.auditQuestion.right_en.includes('/number/') || this.auditQuestion.wrong_en.includes('/number/')) {
        this.rightAnswer = this.auditQuestion.right_en.split('/number/');
        this.wrongAnswer = this.auditQuestion.wrong_en.split('/number/');
      } else if (this.auditQuestion.right_en.includes('/measurement0/') || this.auditQuestion.wrong_en.includes('/measurement0/')) {
        this.rightAnswer = this.auditQuestion.right_en.split('/measurement0/');
        this.wrongAnswer = this.auditQuestion.wrong_en.split('/measurement0/');
      }
      // get right question will display while answer is yes
      // console.log('rightanswer', this.rightAnswer);

    } else  {
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

}
