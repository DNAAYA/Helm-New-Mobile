import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  prId: any;
  auditKey: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    // private localDB: LocalStorageService,
    private storage: Storage,
    private replaceServ: ReplaceService,
    private toastController: ToastController
    
  ) { }

  async ngOnInit() {
   this.divID = this.activatedRoute.snapshot.params['divId'];
   this.subId = this.activatedRoute.snapshot.params['subId'];

   // this.prId = this.activatedRoute.snapshot.params['prId'];
   this.type = this.activatedRoute.snapshot.params['type'];
    this.auditKey = this.activatedRoute.snapshot.params['auditKey'];

    if(this.type == 'main') {
      this.prId = this.activatedRoute.snapshot.params['prId'];
    }
    // this.storage.get('helmTask-').then((res: Task) => {
    //   this.taskID = res.tid;
    //   this.storage.get(`TaskAudit-${this.taskID}`).then(audit => {
    //     console.log('audit from storage', audit)
    //     this.auditDetails = audit;
    //   })

    // })

     
    await this.getQuestions();
    // get divisions
    await this.getDivision();

  }


async getQuestions() {
    if(this.type == 'main') {
       await this.dbService.getQuestionByDivID(this.divID).then((questions: Question[]) => {
          this.questionList = questions ;
          console.log('main question list >>>', this.questionList);
        })
    }
     else {
        await this.dbService.getDuplicatedQuestionByDuplicatedDivision(this.auditKey,this.divID).then((res: DuplicatedQuestion[]) => {
        this.questionList = res;
        console.log('duplicated question list >>>', this.questionList)
      })
    }
}

 async getDivision() {
    if(this.type == 'main') 
    {
      this.dbService.getDivisionsBySubID(this.subId).then((divs: Division[]) => {
      //  console.log('Main division list >> >> ', divs);
        this.indexofDivision = divs.findIndex(i => i.divison_ID == this.divID);
        this._thisDivision = divs[this.indexofDivision];
        this._previousDiv = divs[this.indexofDivision - 1];
        this._nextDiv = divs[this.indexofDivision + 1];
  
       // console.log('previous division << <<', this._previousDiv);
       // console.log('next division >> >>', this._nextDiv);
  
        if(!this._nextDiv) {
          this.dbService.getSubPriorityWithPriorityID(this.prId).then((subs: Subpriority[]) => {
            this.indexofSub = subs.findIndex(i => i.sub_ID == this.subId);
            this._thisSub = subs[this.indexofSub];
            this._previousSub = subs[this.indexofSub - 1];
            this._nextSub = subs[this.indexofSub + 1];
         //   console.log('previous Sub', this._previousSub);
           // console.log('next Sub', this._nextSub);
          })
        }
  
      })
    }
     else {
      await this.dbService.getDuplicatedDivBySubID(this.auditKey, this.subId).then(async (divs: DuplicateDivision[]) => {
        this.indexofDivision = divs.findIndex(i => i.duplicated_ID == this.divID);
     //  console.log('# 1) indexofDivision>  ', this.indexofDivision)

        this._thisDivision = divs[this.indexofDivision];

    //   console.log('# 2) _thisDivision>  ', this._thisDivision)
//
        this._previousDiv = divs[this.indexofDivision - 1];

      // console.log('# 3) _previousDiv>  ', this._previousDiv)

        this._nextDiv = divs[this.indexofDivision + 1];

    //   console.log('# 4) _nextDiv>  ', this._nextDiv)

        if(!this._nextDiv) {
         // console.log('priority id', this.prId);
          let parentDivID = this.activatedRoute.snapshot.params['prId'];
          // #TODO: Fix Next sub error {subId != this.subID};
          await this.dbService.getDivision(parentDivID).then(async (div: Division) => {
            await this.dbService.getSubPriorityWithPriorityID(div.priority_ID).then((subs: Subpriority[]) => {
            //  console.log('sub ID', this.subId);
              this.indexofSub = subs.findIndex(i => i.sub_ID == this.subId);
           //   console.log('sub list', subs);
              this._thisSub = subs[this.indexofSub];
            //  console.log('this sub >>', this._thisSub);
  
              this.duplicatedSubID = this._thisSub.duplicated_ID;
              this._previousSub = subs[this.indexofSub - 1];
              this._nextSub = subs[this.indexofSub + 1];
    
            })
          })
         
        }
  
      })
    }

  }

  ionViewWillLeave() {
   this.Save();
  }
  async presentToast() {
      const toast = await this.toastController.create({
        message: 'Your Answers have been saved.',
        duration: 1000,
        icon: 'checkmark-outline',
        color: 'success'
      });
      toast.present();
    }
  generateReport() {
    this.Save();
    this.dbService.generateReport('-MyELsa29JPl4wuHTycp').then(res => {
      
      console.log('result after generate report', res)
    })
  }

   Save() {
     console.log('save ... ')
     let auditQuestionArr = [];
     this.questionList.map((q) => {
        let auditQ = new AuditQuestion(q);

        if(this.type == 'duplicated') {
          // auditQ.division_ID = this.divID;
          // auditQ.sub_ID = this.subId;
          // auditQ.question_ID = q.duplicated_ID;
          this.dbService.updateDuplicatedQuestion(this.auditKey, q);
          
        }
        else {
          auditQ.division_ID = this.divID;
          auditQ.sub_ID = this.subId;
          auditQ.question_ID = q.question_ID;

          //    TODO: //remove audit id and make it dynamic from local storage
          this.dbService.addQuestionToAudit(this.auditKey, auditQ).then(() => {
            this.presentToast();
          })
        }
    

     })

    // console.log('test auditQ before add', auditQuestionArr)

  }
}
