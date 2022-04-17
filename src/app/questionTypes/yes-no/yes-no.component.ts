import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss'],
})
export class YesNoComponent implements OnInit {
  @Input() question: any; 
  @Input() auditKey: string ; 
  @Input() questionList: any; 
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(
    private db: DatabaseService
  ) { }

 async ngOnInit() {
   console.log('question >>>>?>>> ', this.question)
  }

  renderQuestions() {
    if (this.question.answer === 'N/A') {
      return
    }
    else {
      for (let q of this.questionList) {
        console.log(this.question.answer,q.parentAnwer)
        if (this.question.answer.toLocaleLowerCase() === q.parentAnwer.toLocaleLowerCase()) {
          console.log(q.parentID,this.question.question_ID)
          if (q.parentID === this.question.question_ID) {
            console.log('show')
            q.display = true
            if (this.question.parentID === this.question.question_ID) this.question.display = true
          }
        }
        else {
          for (let q of this.questionList) {
            if (q.parentID === this.question.question_ID) {
              console.log('hide')
              q.display = false
              if (this.question.parentID === this.question.question_ID) this.question.display = true
            }
          }
        }
      }
    }
  }
}
