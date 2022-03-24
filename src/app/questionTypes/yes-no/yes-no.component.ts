import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/models/question';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss'],
})
export class YesNoComponent implements OnInit {
  @Input() question: any; 
  @Input() auditKey: string ; 
  auditQuestion: any;
  constructor(
    private db: DatabaseService
  ) { }

 async ngOnInit() {

    
    await this.db.checkAuditQuestions(this.auditKey, this.question).then((res => {
      console.log('audit question  >> ', res)
     // console.log('check audit question result>> ', res);
      if(res['status'] == true) {
        this.auditQuestion = res['question'];
        console.log('audit duplicate question answer >> ', this.auditQuestion)
      } 
    }))
    // console.log('audit Key', this.auditKey)
   // console.log('changes', this.question)
  }
}
