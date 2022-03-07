import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Audit } from '../models/audit';
import { AuditQuestion } from '../models/auditQuestion';
import { Division } from '../models/division';
import { DuplicateDivision } from '../models/duplicate-division';
import { DuplicatedQuestion } from '../models/duplicatedQuestion';
import { Question } from '../models/question';
import { Subpriority } from '../models/Subpriority';
import { Task } from '../models/task';
import { DatabaseService } from '../services/database.service';
import { LocalStorageService } from '../services/local-storage.service';
import { ReplaceService } from '../services/replace.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  questionList = [];
  duplicatedquestions= [];
  indexofDivision;
  _previousDiv;
  _nextDiv;
  _thisDivision;
  type;
  _thisSub;
  indexofSub: number;
   _nextSub;
   _previousSub;
   divID;
   taskID;
   taskDetails: Task;
   auditDetails: Audit;
   divList;
  duplicatedSubID;
  duplicatedDivID;
  subId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    // private localDB: LocalStorageService,
    private storage: Storage,
    private replaceServ: ReplaceService
    
  ) { }

  async ngOnInit() {
   this.divID = this.activatedRoute.snapshot.params['divId'];
   this.subId = this.activatedRoute.snapshot.params['subId'];
   let prId = this.activatedRoute.snapshot.params['prId'];
   this.type = this.activatedRoute.snapshot.params['type'];

    this.storage.get('helmTask-').then((res: Task) => {
      this.taskID = res.tid;
      this.storage.get(`TaskAudit-${this.taskID}`).then(audit => {
        console.log('audit from storage', audit)
        this.auditDetails = audit;
      })

    })

     if(this.type == 'main') {
       await this.dbService.getQuestionByDivID(this.divID).then((questions: Question[]) => {
          this.questionList = questions ;
          console.log('main question list >>>', this.questionList);
        })
    } else {
      console.log('diiiv is', this.divID)
       await this.getDuplicatedQuestion(this.divID);
        console.log('duplicated question ..', this.questionList)
    }

    // get divisions
    await this.getDivision(this.subId, this.divID, prId);

  }




 async getDivision(subId, divID, prID) {
    if(this.type == 'main') {
      console.log('priority id', prID)
      this.dbService.getDivisionBySubID(subId).then((divs: Division[]) => {
        console.log('divisions list', divs);
        
        this.indexofDivision = divs.findIndex(i => i.divison_ID == divID);
        this._thisDivision = divs[this.indexofDivision];
        this._previousDiv = divs[this.indexofDivision - 1];
        this._nextDiv = divs[this.indexofDivision + 1];
  
        console.log('previous division', this._previousDiv);
        console.log('next division', this._nextDiv);
  
        if(!this._nextDiv) {
          this.dbService.getSubPriorityWithPriorityID(prID).then((subs: Subpriority[]) => {
            this.indexofSub = subs.findIndex(i => i.sub_ID == subId);
            this._thisSub = subs[this.indexofSub];
            this._previousSub = subs[this.indexofSub - 1];
            this._nextSub = subs[this.indexofSub + 1];
            console.log('previous Sub', this._previousSub);
            console.log('next Sub', this._nextSub);
          })
        }
  
      })
    } else {
      console.log('priority id', prID)
     await this.dbService.getDuplicatedDivBySubID(subId).then(async (divs: DuplicateDivision[]) => {
        
        
        this.indexofDivision = divs.findIndex(i => i.duplicated_ID == divID);
        this._thisDivision = divs[this.indexofDivision];
        this._previousDiv = divs[this.indexofDivision - 1];
        this._nextDiv = divs[this.indexofDivision + 1];
  
        console.log('Duplicated previous division <=', this._previousDiv);
        console.log('Duplicated next division =>', this._nextDiv);
  
        if(!this._nextDiv) {
          this.dbService.getSubPriorityWithPriorityID(prID).then((subs: Subpriority[]) => {
            this.indexofSub = subs.findIndex(i => i.sub_ID == subId);

            
            this._thisSub = subs[this.indexofSub];
            this.duplicatedSubID = this._thisSub.duplicated_ID;
            this._previousSub = subs[this.indexofSub - 1];
            this._nextSub = subs[this.indexofSub + 1];
            console.log('Duplicated  Sub <=', this.duplicatedSubID);
            console.log('Duplicated next Sub =>', this._nextSub);
          })
        }
  
      })
    }

  }
  
  getDuplicatedQuestion(divID) {
    console.log('getDuplicatedDiv ..', divID)
    this.dbService.getDuplicatedQuestionByDuplicatedDivision(divID).then((res: DuplicatedQuestion[]) => {
      console.log('duplicated question list???', res)
      this.questionList = res
    })
  }

  ionViewWillLeave() {
  // this.Save();
  }

  async Save() {
    
    console.log('**********',this.questionList.length)
    this.questionList.forEach((q) => {
     // console.log('question element', q);
      let auditQ = new AuditQuestion(q);

      if(q.duplicated_ID) {
        auditQ.division_ID = this.divID;
        auditQ.sub_ID = this.subId;
        auditQ.question_ID = q.duplicated_ID
        this.dbService.addQuestionToAudit(this.taskID, auditQ);
      } else {
        auditQ.division_ID = this.divID;
        auditQ.sub_ID = this.subId;
        auditQ.question_ID = q.question_ID
        this.dbService.addQuestionToAudit(this.taskID, auditQ);

      }
     // console.log('test auditQ', auditQ)
    });
  }
}
