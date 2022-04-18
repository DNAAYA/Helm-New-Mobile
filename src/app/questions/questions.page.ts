import { Component, OnInit, Renderer2 } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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
  test = ''
  auditQuestions: any;
  globalListenFunc: Function;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    // private localDB: LocalStorageService,
    private storage: Storage,
    private replaceServ: ReplaceService,
    private toastController: ToastController,
    private router: Router,
    private navCtrl: NavController,
    private renderer:Renderer2 ,
    private dbStore: AngularFirestore
  ) { }

  async ngOnInit() {

    this.divID = this.activatedRoute.snapshot.params['divId'];
    this.subId = this.activatedRoute.snapshot.params['subId'];
    this.prId = this.activatedRoute.snapshot.params['prId'];
    this.type = this.activatedRoute.snapshot.params['type'];
    this.auditKey = this.activatedRoute.snapshot.params['auditKey'];
    
    console.log( this.auditKey, this.type, this.divID);
    // this.storage.get('helmTask-').then((res: Task) => {
    //   this.taskID = res.tid;
    //   this.storage.get(`TaskAudit-${this.taskID}`).then(audit => {
    //     console.log('audit from storage', audit)
    //     this.auditDetails = audit;
    //   })

    // })
    this.getAuditQuestions();
    // await this.getQuestions();
    await this.getDivision();
  }

  async getAuditQuestions() {
    await this.dbService.checkAuditQuestions(this.auditKey, this.type, this.divID).then((async res => {
      // console.log('checkAuditQuestions res: ', res);
      
      if(res['status'] == true) {
        this.questionList = res['questions'];
      } 
      else {
       await this.dbService.getQuestionByDivID(this.divID).then((res) => {
        console.log('getQuestionByDivID res: ', res);

          this.questionList = res
        })
      }
      for ( let q of this.questionList ) {
        this.dbService.getQuestions(this.auditKey)
        .then( (questions: Question[]) => {
          console.log(questions)
          var question = questions.find( ques => ques.question_ID === q.parentID)
          console.log(question)
          if (question) {
            if (question.answer.toLocaleLowerCase() === q.parentAnwer.toLocaleLowerCase()) {
              q.display = true
            }
          }
        })
      }
      console.log('checkAuditQuestions res: ', this.questionList);
    
    }));
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
  
        console.log('previous division << <<', this._previousDiv);
        console.log('next division >> >>', this._nextDiv);
  
        if(!this._nextDiv) {
          this.dbService.getSubPriorityWithPriorityID(this.prId).then((subs: Subpriority[]) => {
            console.log('subs: ', subs);
            console.log('this.prId: ', this.prId);
            this.indexofSub = subs.findIndex(i => i.sub_ID == this.subId);
            this._thisSub = subs[this.indexofSub];
            this._previousSub = subs[this.indexofSub - 1];
            this._nextSub = subs[this.indexofSub + 1];
            console.log('previous Sub', this._previousSub);
             console.log('next Sub', this._nextSub);
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
    this.dbService.generateReport(this.auditKey).then(res => {
      
      console.log('result after generate report', res)
    })
  }

   Save(next?) {
    console.log('save ... ', this.questionList)
    this.questionList.forEach((q) => {
    let auditQ = new AuditQuestion(q);
        if(this.type == 'duplicated') {
          
           auditQ.division_ID = this.divID;
           auditQ.sub_ID = this.subId;
           auditQ.question_ID = q.duplicated_ID;
          this.dbService.updateDuplicatedQuestion(this.auditKey, q).then(() => {
            this.presentToast();
            console.log(this._nextSub)
            // if (next === 'next') this.router.navigate([`/questions/${this.type}/${this._nextDiv.divison_ID}/${this._nextDiv.sub_ID}/${this._nextDiv.priority_ID}/${this.auditKey}`])
          })
          console.log('audit duplicated Question >>>_>>>', auditQ);
        }
        else {

          auditQ.division_ID = this.divID;
          auditQ.sub_ID = this.subId;
          auditQ.question_ID = q.question_ID;
          console.log('audit main Question >>>_>>>', auditQ);

          //    TODO: //remove audit id and make it dynamic from local storage
          this.dbService.addQuestionToAudit(this.auditKey, auditQ).then(() => {
            this.presentToast();
            console.log(this._nextSub)
            if (next === 'next') this.router.navigate([`/questions/${this.type}/${this._nextDiv.divison_ID}/${this._nextDiv.sub_ID}/${this._nextDiv.priority_ID}/${this.auditKey}`])
          })
        }
    

     })

    // console.log('test auditQ before add', auditQuestionArr)

  }
  checkRadio(questions: any[]) {
    questions.forEach((question,i) => {
      console.log(question,document.getElementById('a'))
      if (question.answer === 'Yes') document.getElementById('a').setAttribute('checked','true')
      if (question.answer === 'No') document.getElementById('b').setAttribute('checked','true')
      if (question.answer === 'N/A') document.getElementById('c').setAttribute('checked','true')
    });
}

  onFocusPlace(event,q) {
    console.log(event.target.value,q.answer)
    q.answer = event.target.value
  }


  arrowNav(navType) {
    console.log('sub ID', this.subId);
     this.dbService.getDivisions(this.auditKey, this.type, this.subId).then(async (divs: any[]) => {
        console.log('Main division list >> >> ', divs);
          this.indexofDivision = divs.findIndex(i => i.duplicated_ID == this.divID);
          this._thisDivision = divs[this.indexofDivision];
          this._previousDiv = divs[this.indexofDivision - 1];
          this._nextDiv = divs[this.indexofDivision + 1];
        if(this.type == 'duplicated') {
          if(navType == 'back') {
            console.log('previous division.. ', this._thisDivision);
            // this.router.navigate([`/questions/${this.type}/${this._previousDiv.}/-MzMSxLYUJZCyUuvWyMu/-MwWSk-IUMTss1N4jqWm/-MzMIlJSuHvEV_BYJPON`])
            let navigationExtras: NavigationExtras = {
                queryParams: {
                    type:  this.type,
                    divID: this._previousDiv.duplicated_ID,
                    subID: this._previousDiv.parent_SubID,
                    prID: this.prId,
                    auditKey: this.auditKey
                }
            };
            console.log('next division.. ', this._nextDiv);
            this.navCtrl.navigateForward(`/questions/`, navigationExtras);
          } else {
            //...
            let navigationExtras: NavigationExtras = {
                queryParams: {
                    type:  this.type,
                    divID: this._nextDiv.duplicated_ID,
                    subID: this._nextDiv.parent_SubID,
                    prID: this.prId,
                    auditKey: this.auditKey
                }
            };
            console.log('next division.. ', this._nextDiv);
            this.navCtrl.navigateForward(`/questions/`, navigationExtras);


        }
        } else {
            if(navType == 'back') {
                console.log('previous division.. ', this._thisDivision);
                // this.router.navigate([`/questions/${this.type}/${this._previousDiv.}/-MzMSxLYUJZCyUuvWyMu/-MwWSk-IUMTss1N4jqWm/-MzMIlJSuHvEV_BYJPON`])
                let navigationExtras: NavigationExtras = {
                queryParams: {
                    type:  this.type,
                    divID: this._previousDiv.divison_ID,
                    subID: this._previousDiv.sub_ID,
                    prID: this.prId,
                    auditKey: this.auditKey
                }
                };
                console.log('next division.. ', this._nextDiv);
                this.navCtrl.navigateForward(`/questions/`, navigationExtras);

              } else {
                //...
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                        type:  this.type,
                        divID: this._nextDiv.divison_ID,
                        subID: this._nextDiv.sub_ID,
                        prID: this.prId,
                        auditKey: this.auditKey
                    }
                };
                console.log('next division.. ', this._nextDiv);
                await this.navCtrl.navigateForward(`/questions/`, navigationExtras).then(() => {
                  console.log('navigation test >>>')
                })


            }
        }

       // console.log('previous division << <<', this._previousDiv);
       // console.log('next division >> >>', this._nextDiv);
  
        // if(!this._nextDiv) {
        //   this.dbService.getSubPriorityWithPriorityID(this.prId).then((subs: Subpriority[]) => {
        //     this.indexofSub = subs.findIndex(i => i.sub_ID == this.subId);
        //     this._thisSub = subs[this.indexofSub];
        //     this._previousSub = subs[this.indexofSub - 1];
        //     this._nextSub = subs[this.indexofSub + 1];
        //  //   console.log('previous Sub', this._previousSub);
        //    // console.log('next Sub', this._nextSub);
        //   })
        // }
  
      })
    // get current navigation

  }
}
