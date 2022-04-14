import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { Division } from '../models/division';
import { Priority } from '../models/priority';
import { Question } from '../models/question';
import { Subpriority } from '../models/Subpriority';
import { Task } from '../models/task';
import { filter, map } from 'rxjs/operators';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { NetworkService } from './network.service';
import { Audit } from '../models/audit';
import { AuditQuestion } from '../models/auditQuestion';
import { resolve } from 'dns';
import { DuplicatedQuestion } from '../models/duplicatedQuestion';
import { DuplicateDivision } from '../models/duplicate-division';
import { DuplicatedSub } from '../models/duplicatedSub';




@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  database = this.db.database.app.database('https://helm-8734b-4d96d.firebaseio.com/');  

  constructor(
    private db: AngularFireDatabase,
    private dbStore: AngularFirestore,
    private network: Network,
    private storage: Storage,
    private networkService: NetworkService
    ) {
     }


  getNewTasks(userID): Observable<any> {
    return this.dbStore.collection('tasks').valueChanges().pipe(
      map(data => data.filter((task: Task) => task.completed == false && task.selectedUser == userID ))
    )
  }

  getSavedTasks(userID): Observable<any> {
    return this.dbStore.collection('tasks').valueChanges().pipe(
      map(data => data.filter((task: Task) => task.completed == true && task.selectedUser == userID ))
    )
  }

  getTasks(): Observable<any> {
    return this.dbStore.collection('tasks').valueChanges();
  }

  getTaskDetails(taskID): Promise <Task> {
    return  new Promise((resolve, reject)=> {
      this.dbStore.collection(`tasks`).valueChanges().subscribe((res: Task[]) => {
        console.log('tasks', res);
        resolve(res.find(e => e.tid == taskID))
      }, reject)
    })
    
  }

  updateTaskDetails(tid, obj) {
    return this.dbStore.collection('tasks').doc(tid).update(obj)
  }


  getPriorities(): Promise <Priority[]> {
    return new Promise((resolve, reject)=> {
      this.database.ref('/Priorities/').on('value', val => {
        let res = val.val();
       let prioritiesList = Object.keys(res).map(k => res[k]);
       resolve(prioritiesList)
      }, reject)
    })
  }

  getPriority(key): Promise <Priority> {
    return new Promise((resolve, reject)=> {


      this.networkService.onNetworkChange().subscribe(status => {
        if(status == 0) {
          console.log('status network Online >>>>>', status);
          this.database.ref(`/Priorities/${key}/`).on('value', val => {
            let res = val.val();
            resolve(res)
          }, reject)
        } 
        else {
          console.log('status network Offline >>>>>', status)
          this.storage.get('Priorities').then((pr: Priority[]) => {
            resolve(pr.find(e => e.priority_ID == key))
          }, reject)
        }
      })
    })
  }

  getSubPriorityWithPriorityID(priorityID): Promise <Subpriority[]> {
    console.log('priority id', priorityID)
    return new Promise((resolve, reject)=> {
      this.database.ref('/SubPriorities/').on('value', val => {
        let res = val.val();
        console.log('all subpriorities', res)

        let subPrioritiesList = Object.keys(res).map(k => res[k]).filter((e: Subpriority) => e.priority_ID == priorityID)
        console.log('subpriorities list >> ', subPrioritiesList);
        resolve(subPrioritiesList)
      })
    })
  }

  getDivisionWithPriorityIDAndSubIS(priorityID,subID): Promise <Division[]> {
    let divisions = [];
    return new Promise((resolve, reject)=> {
      this.database.ref('/Divisions/').on('value', val => {
        let res = val.val();
       let divisionList = Object.keys(res).map(k => res[k]);
       divisions = divisionList.filter(e => e.priority_ID == priorityID)
       divisionList.forEach((divElm: Division) => {
         if(divElm.priority_ID == priorityID && divElm.sub_ID == subID) {
         // console.log('getSubPriorityWithPriorityID', subElm)
          divisions.push(divElm);
         }
        
       });
       resolve(divisions)

      }, reject)
    })
  }

  getDivision(divID): Promise <Division> {
    return new Promise((resolve, reject)=> { 
      this.database.ref(`/Divisions/${divID}/`).on('value', (val) => {
        let res = val.val();
        resolve(res)
      }, reject)
    })
  }

  getDivisionsBySubID(subID) {
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Divisions/`).on('value', val => {
        let res = val.val();
       let divList = Object.keys(res).map(k => res[k]).filter(d => d.sub_ID == subID);
        resolve(divList)
      }, reject)
    })
  }


  getDivisions(auditKey ,type, subID) {
 
    return new Promise((resolve, reject)=> {
      if(type == 'main') {
        this.database.ref(`/Divisions/`).on('value', val => {
        let res = val.val();
        let divList = Object.keys(res).map(k => res[k]).filter(d => d.sub_ID == subID);
          resolve(divList)
        }, reject)
      } else {
        this.getDuplicatedDivBySubID(auditKey, subID).then((divs: DuplicateDivision[]) => {
          resolve(divs)
        }, reject)
      }
    })
  }

  getQuestionByDivID(divID): Promise <Question[]> {
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Questions/`).on('value', val => {
        let res = val.val();
       let questionList = Object.keys(res).map(k => res[k]).filter(q => q.division_ID == divID);   
        resolve(questionList)
      }, reject)
    })
  }

  
  getQuestion(qID, type): Promise <Question> {
    return new Promise((resolve, reject)=> {
      if(type == 'main') {
        this.database.ref(`/Questions/`).on('value', val => {
          let res = val.val();
        let question = Object.keys(res).map(k => res[k]).find(q => q.question_ID == qID);   
          resolve(question)
        }, reject)
      } else {
        this.database.ref(`/duplicated-question/`).on('value', val => {
        let res = val.val();
        let question = Object.keys(res).map(k => res[k]).find((q: DuplicatedQuestion) => q.duplicated_ID == qID);   
          resolve(question)
        }, reject)
      }
      
    })
  }


  getQuestionByPr_Sub_Division(priorityID, subID, divisionID): Promise <Question[]>{
    let filteredQuestion = [];
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Questions/`).on('value', val => {
        let res = val.val();
       let questionList = Object.keys(res).map(k => res[k]);
        questionList.forEach(q => {
          if(q.priority_ID == priorityID && q.sub_ID == subID && q.division_ID == divisionID){
            filteredQuestion.push(q);
          }
        })        
        resolve(filteredQuestion)
        
      }, reject)
    })
  }


  getQuestionByDivision(divisionID): Promise <Question[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Questions/`).on('value', val => {
        let res = val.val();
        let questions = Object.keys(res).map(k => res[k]).filter((e: Question) => e.division_ID == divisionID)
        resolve(questions)
      }, reject)
    })
  }

  // question factory
  addQuestion(question: Question) {
    console.log('Question ####', question);
    if(question.question) {
      this.database.ref('/Questions/').push(question).then(res => {
        console.log('Question Added successfully', res.key);
        question.question_ID = res.key;
        // set id to Priorities document
        this.updateQuestion(res.key, question);
      })
    } else {
      console.log('there is no ADA Number in this question');
      // alert('there is no ADA Number in this question')
    }

  }

  updateQuestion(key: string ,question: Question){
    console.log('question id', key);

    console.log('question before edit', question);
    return this.database.ref(`/Questions/${key}`).set(question)
  }


  duplicateQuestion(auditKey,question: DuplicatedQuestion) {
    this.database.ref(`/Audits/${auditKey}/Questions/`).push(question).then(res => {
      this.database.ref(`/Audits/${auditKey}/Questions/${res.key}/`).update({
        duplicated_ID: res.key
      })
    })
  }

  updateNoteQuestion(auditKey, qKey, note, images: any[]) {
    return this.database.ref(`/Audits/${auditKey}/Questions/${qKey}/`).update({
      note: note,
      images: images
    })
  }

  duplicateDivision(auditKey, division: DuplicateDivision) {
    this.database.ref(`/Audits/${auditKey}/duplicated-division/`).push(division).then(res => {
      this.database.ref(`/Audits/${auditKey}/duplicated-division/${res.key}/`).update({
        duplicated_ID: res.key
      });
      // duplicate question after division
      this.getQuestionByDivision(division.parent_DivID)
      .then((ques: Question[]) => {
        ques.forEach(q => {
          let duplicatedQuestion = new DuplicatedQuestion(q);
          duplicatedQuestion.parentDiv_ID = res.key;
          duplicatedQuestion.parentSub_ID = division.parent_SubID
          this.duplicateQuestion(auditKey,duplicatedQuestion);
        });
        
      })
    })
  }

// duplicated sub & duplicate division & duplicate question 

  duplicateSubPriority(auditKey,subPriority: DuplicatedSub){
    console.log('subPriority >>', subPriority)
    this.database.ref(`/Audits/${auditKey}/duplicated-subPriority/`).push(subPriority).then(res => {
      let key = res.key;
      this.database.ref(`/Audits/${auditKey}/duplicated-subPriority/${key}/`).update({
        duplicated_ID: key
      })
      // get all divisions by sub id to copy into duplicated divisions;
      this.getDivisionsBySubID(subPriority.parent_SubID).then((divs: Division[]) => {
        divs.forEach((div: Division) => {
          let duplicateDiv: DuplicateDivision  = {
            duplicated_ID: '',
            parent_DivID: div.divison_ID,
            parent_SubID: res.key,
            title: `# ${div.division_name}`
          }
        this.duplicateDivision(auditKey,duplicateDiv)
        });
      })
      // duplicate division after duplicate sub
    })
  }

  deleteDuplicateSubPriority(auditKey, key){
    return this.database.ref(`/Audits/${auditKey}/Questions/`).once('value', val => {
      let arr: [] = val.val();
      let q = Object.keys(arr).map(k => arr[k]).filter((e: DuplicatedQuestion) => e.parentSub_ID == key);
      console.log('question array >> ', q);
      q.forEach((ques: DuplicatedQuestion) => {
        this.database.ref(`/Audits/${auditKey}/Questions/${ques.duplicated_ID}`).remove();
      })
    }).then(() => {
      this.database.ref(`/Audits/${auditKey}/duplicated-division/`).once('value', val => {
      let arr: [] = val.val();
      let div = Object.keys(arr).map(k => arr[k]).filter((e: DuplicateDivision) => e.parent_SubID == key);
      console.log('division array >> ', div);
      div.forEach((d: DuplicateDivision) => {
        this.database.ref(`/Audits/${auditKey}/duplicated-division/${d.duplicated_ID}`).remove();
      })
    })
    }).then(() => {
      this.database.ref(`/Audits/${auditKey}/duplicated-subPriority/${key}`).remove()
    })
    // .then(() => { 
    //   this.database.ref(`/duplicated-division/`).
    // })
  }


  deleteDuplicatedDivision(auditKey, key){
    return this.database.ref(`/Audits/${auditKey}/Questions/`).once('value', val => {
      let arr: [] = val.val();
      let q = Object.keys(arr).map(k => arr[k]).filter((e: DuplicatedQuestion) => e.parentDiv_ID == key);
      console.log('question array >> ', q);
      q.forEach((ques: DuplicatedQuestion) => {
        this.database.ref(`/Audits/${auditKey}/Questions/${ques.duplicated_ID}`).remove();
      })
    }).then(() => {
      this.database.ref(`/Audits/${auditKey}/duplicated-division/${key}`).remove()
    })
    // .then(() => { 
    //   this.database.ref(`/duplicated-division/`).
    // })
  } 


  getDuplicatedSub(auditKey, subID) : Promise <DuplicatedSub[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Audits/${auditKey}/duplicated-subPriority/`).on('value', val => {
        let res = val.val();
        if(res) {
          let duplicatedSub = Object.keys(res).map(k => res[k]).filter((e: DuplicatedSub) => e.parent_SubID == subID);
           resolve(duplicatedSub)
        } else {
          resolve(res)
        }
       
      }, reject)
    })
  }

  getDuplicatedDiv(auditKey, divID) : Promise <DuplicatedSub[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Audits/${auditKey}/duplicated-division/`).on('value', val => {
        let res = val.val();
        if(res) {
          let duplicated_Divs = Object.keys(res).map(k => res[k]).filter((e: DuplicateDivision) => e.parent_DivID == divID)
          console.log('duplicated_Divs >>>', duplicated_Divs)
          resolve(duplicated_Divs)
        } else {
          resolve(res)
        }
       
      }, reject)
    })
  }


  getDuplicatedDivBySubID(auditKey, subID) : Promise <DuplicateDivision[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Audits/${auditKey}/duplicated-division/`).on('value', val => {

        let res = val.val();
        if(res) {
        let duplicatedDiv = Object.keys(res).map(k => res[k]).filter((e: DuplicateDivision) => e.parent_SubID == subID);
        resolve(duplicatedDiv)
        } else {
          resolve(res)
        }
      }, reject)
    })
  }

  getDuplicatedQuestionByDuplicatedDivision(auditKey, divID) : Promise <DuplicatedQuestion[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Audits/${auditKey}/Questions/`).on('value', val => {

        let res = val.val();
        console.log('result',  res)
        if(res) {
        let dquestions = Object.keys(res).map(k => res[k]).filter((e: DuplicatedQuestion) => e.parentDiv_ID == divID);
       // console.log('duplicated questions', dquestions);
         console.log('questionList', dquestions);
        resolve(dquestions)
        } else {
          resolve(res)
        }
      }, reject)
    })
  }


  addAudit(audit: Audit, taskid): Promise<string> {
     return new Promise((resolve, reject)=> {
    this.database.ref('/Audits/').once('value', val => {
      console.log('all audits', val.val());
      if(val.val()) {
        let auditTask: Audit = Object.keys(val.val()).map(k => val.val()[k]).find((e: Audit) => e.taskID == taskid);
        if(auditTask) {
          console.log('audit already exist', auditTask);
          resolve(auditTask.id);
        } else {
          console.log('audit before add', audit );
          this.database.ref('/Audits/').push(audit).then(res => {
            this.database.ref(`/Audits/${res.key}/`).update({
              id: res.key
            });
            // this.storage.set(`TaskAudit-${taskid}`, audit);
            resolve(res.key);

          })
        }
      } else {
        this.database.ref('/Audits/').push(audit).then(res => {
          this.database.ref(`/Audits/${res.key}/`).update({
            id: res.key
          });
          // this.storage.set(`TaskAudit-${taskid}`, audit);
          resolve(res.key);
        })
      }
    })

     })

  }

  getAuditByTaskID(taskID) : Promise <Audit> {
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Audits/`).on('value', val => {
        let res = val.val();
        if(res) {
        let audit = Object.keys(res).map(k => res[k]).find((e: Audit) => e.taskID == taskID);
        resolve(audit)
        }
      }, reject)
    })
  }


  getAuditQuestion(auditKey, qID) : Promise <AuditQuestion> {
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Audits/${auditKey}/Questions/`).on('value', val => {
        let res = val.val();
        if(res) {
        resolve(res[qID])
        }
      }, reject)
    })
  }

  updateDuplicatedQuestion(auditKey, q) {
    return this.database.ref(`/Audits/${auditKey}/Questions/`).child(q.duplicated_ID).update({
      answer: q.answer,
      inputs: q.inputs
    })
  }


  ///////////////// PAUSE ?????????? check if question exist before add another question;
  addQuestionToAudit(auditID, q: AuditQuestion) {


    return  this.database.ref(`/Audits/${auditID}/Questions`).once('value', val => {
        let arr = val.val();
      //  console.log('questions inside audit:', arr)
        if(arr) {
          console.log('audit question ducoment  exist:  ');
          let question = Object.keys(arr).map(k => arr[k]).find((auditQ: AuditQuestion) => auditQ.question_ID == q.question_ID);
          if(question) {
            console.log('question exist in audit questions..', question);
            console.log('question before update..', q);
            console.log('question before update.auditID.', question);

             this.database.ref(`/Audits/${auditID}/Questions/`).child(question.id).update({
               answer: q.answer,
               inputs: q.inputs
             })
           } 
           else {
             console.log('question not exist in audit questions..', q)
            this.database.ref(`/Audits/${auditID}/Questions`).push(q).then(res => {
              console.log('result after add question', res.key);
              this.database.ref(`/Audits/${auditID}/Questions/${res.key}/`).update({
                id: res.key
              });
            })
           }
        }
        else {
          console.log('audit question ducoment Not exist:');
            this.database.ref(`/Audits/${auditID}/Questions`).push(q).then(res => {
              console.log('result after add question', res.key);
              this.database.ref(`/Audits/${auditID}/Questions/${res.key}/`).update({
                id: res.key
              });
            })  
        }  
      })
   
  }

  // addDivisionToAudit(taskID, division) {
  //   this.getAuditByTaskID(taskID).then((audit: Audit) => {
  //     console.log('task audit', audit)
  //     this.database.ref(`/Audits/${audit.id}/Divisions`).push(division).then(res => console.log('question added to audit'))
  //   })
  // }


  generateReport(auditID) {
   return this.database.ref(`/Audits/${auditID}/`).once('value', val => {
      let res = val.val();
      if(res) {
        this.dbStore.collection('tasks').doc(res['taskID']).update({'completed': true}).then(() => {
          this.database.ref(`/Audits/${auditID}/`).update({
                reported: true
            })
        })
        // let auditDetails = Object.keys(res).map(k => res[k])
        console.log('audits', res);
      }
    })
    // this.dbStore.collection('tasks').doc()
    // return this.database.ref(`/Audits/${auditID}/`).update({
    //     reported: true
    //   }).then(() => {
       
    //   })
  }

  checkAuditQuestions(auditKey, type, divID) : Promise <object> {
    console.log('auditKey: ', auditKey);
    console.log('type: ', type);
    console.log('divID: ', divID);

    return new Promise((resolve, reject)=> {
      this.database.ref(`/Audits/${auditKey}/Questions/`).on('value', async val => {
        let res = val.val();
        console.log('checkAuditQuestions >> res: ', res);
        if(res && type == 'duplicated') {
          let questions = Object.keys(res).map(k => res[k]).filter((e: AuditQuestion) => e.parentDiv_ID == divID )
          if(questions) {
            resolve({
              status: true,
              questions: questions
            })
          } else {
            resolve({
              status: false,
              questions: ''
            })
          }

        } 
        else if (res && type == 'main') {
          let questions = Object.keys(res).map(k => res[k]).filter((e: AuditQuestion) => e.division_ID == divID )
          // console.log('checkAuditQuestions questions: ', questions);
          if(questions.length) {
            console.log('checkAuditQuestions questions: ', questions);
            resolve({
              status: true,
              questions: questions
            })
            } else {
              resolve({
                status: false,
                questions: ''
              })
            }
        } 
        else {
          await this.getQuestionByDivision(divID).then(res => {
            resolve({
              status: true,
              questions: res
            })
          })
        }
      })


      // if(type == 'duplicated') {
      //   this.database.ref(`/Audits/${auditKey}/Questions/`).on('value', val => {
      //     let res = val.val();
      //     if(res) {
      //       let questions = Object.keys(res).map(k => res[k]).filter((e: AuditQuestion) => e.parentDiv_ID == divID )
      //       resolve({
      //           status: true,
      //           questions: questions
      //       })
      //     }
      //   })
      // } 
      // else {
      //   this.database.ref(`/Questions/`).on('value', val => {
      //       let res = val.val();
      //       console.log('checkAuditQuestions res not exist', res);

      //       let questionList = Object.keys(res).map(k => res[k]).filter(q => q.division_ID == divID);   
      //         resolve({
      //             status: true,
      //             questions: questionList
      //         })
      //   }, reject)
      // }
        // this.database.ref(`/Audits/${auditKey}/Questions/`).on('value', val => {
        //   let res = val.val();
        //   if(res) {
        //     // console.log('checkAuditQuestions res', res);
        //       let questions = Object.keys(res).map(k => res[k]).filter((e: AuditQuestion) => {
        //         console.log('audit question element', e, 'div ID', divID);
                
        //         if(!e.parentDiv_ID) {
        //          return e.division_ID == divID
        //         } else {
        //           return e.parentDiv_ID == divID
        //         }
        //       });
        //      console.log('question )()() >> ', questions);
        //       resolve({
        //         status: true,
        //         questions: questions
        //       })
        //   } else {
        //     this.database.ref(`/Questions/`).on('value', val => {
        //     let res = val.val();
        //     console.log('checkAuditQuestions res not exist', res);

        //     let questionList = Object.keys(res).map(k => res[k]).filter(q => q.division_ID == divID);   
        //       resolve({
        //           status: true,
        //           questions: questionList
        //       })
        //     }, reject)
        //   }
        // }, reject)
      })
  }

  // checkQuestionExistOnAudit(qKey): Promise <boolean> {
  //   return new Promise((resolve, reject)=> {
  //     this.database.ref(`/Audits/`).on('value', val => {
  //   })
  // }
  // }
}
