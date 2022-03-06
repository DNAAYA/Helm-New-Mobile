import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Division } from '../models/division';
import { Priority } from '../models/priority';
import { Question } from '../models/question';
import { Subpriority } from '../models/Subpriority';
import { Task } from '../models/task';
import { filter, map } from 'rxjs/operators';
import { DuplicatedSub } from '../models/duplicatedSub';
import { DuplicateDivision } from '../models/duplicate-division';
import { DuplicatedQuestion } from '../models/duplicatedQuestion';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { NetworkService } from './network.service';
import { Audit } from '../models/audit';




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
    return new Promise((resolve, reject)=> {
      this.networkService.onNetworkChange().subscribe(status => {
        if(status == 0) {
          console.log('status network Online >>>>>', status);
          this.database.ref('/SubPriorities/').on('value',async val => {
            let res = val.val();
           let subPrioritiesList = Object.keys(res).map(k => res[k]);
          await this.storage.set('SubPriorities', subPrioritiesList).then((res: Subpriority[]) => {
             console.log('result after add subPrioritiesList in local storage >>', res)
             let subs = res.filter(e => e.priority_ID == priorityID);
             resolve(subs)
           }, reject)
          })
        } 
        else {
          console.log('status network Offline >>>>>', status)
          this.storage.get('SubPriorities').then((res: Subpriority[]) => {
            resolve(res.filter(e => e.priority_ID == priorityID))
          }, reject)
        }
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

  getDivisionBySubID(subID) {
    let filteredDivisions = [];
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Divisions/`).on('value', val => {
        let res = val.val();
       let divList = Object.keys(res).map(k => res[k]);
       filteredDivisions = divList.filter(d => d.sub_ID == subID);    
        resolve(filteredDivisions)
        
      }, reject)
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

  getQuestion(qID): Promise <Question> {
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Questions/`).on('value', val => {
        let res = val.val();
       let questionList = Object.keys(res).map(k => res[k]).find(q => q.question_ID == qID);   
        resolve(questionList)
      }, reject)
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


  getQuestionByDivision(divisionID): Promise <Question>{
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Questions/`).on('value', val => {
        let res = val.val();
       let questions = Object.keys(res).map(k => res[k]);
       questions.forEach(element => {
         if(element.division_ID == divisionID) {
          resolve(element)
         }
       });
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


  duplicateQuestion(parentID, question: DuplicatedQuestion) {
    question.parentDiv_ID = parentID;
    this.database.ref('/duplicated-question/').push(question).then(res => {
      this.database.ref(`/duplicated-question/${res.key}/`).update({
        duplicated_ID: res.key
      })
    })
  }

  duplicateDivision(division: DuplicateDivision) {
    let parentID =  division.division.divison_ID;
    division.parentID = parentID;
    this.getDivision(parentID).then((div: Division) => {
      console.log('division ', div);

      division.division = div;
      this.database.ref(`/duplicated-division/`).push(division).then(res => {
        this.database.ref(`/duplicated-division/${res.key}/`).update({
          duplicated_ID: res.key
        });
        // duplicate question after division
        this.getQuestionByPr_Sub_Division(div.priority_ID, div.sub_ID, div.divison_ID)
        .then((ques: Question[]) => {
          let duplicatedQuestion: DuplicatedQuestion = {
            questions: ques,
            duplicated_ID: '',
            parentDiv_ID: res.key,
            type: 'duplicated'
          }
          this.duplicateQuestion(res.key, duplicatedQuestion);
        })
      })
    })
  
  }

// duplicated sub & duplicate division & duplicate question 

  duplicateSubPriority(subPriority: DuplicatedSub){
    this.database.ref('/duplicated-subPriority/').push(subPriority).then(res => {
      let key = res.key;
      this.database.ref(`/duplicated-subPriority/${key}/`).update({
        duplicated_ID: key
      })
      // get all divisions by sub id to copy into duplicated divisions;
      this.getDivisionBySubID(subPriority.parentSub.sub_ID).then((divs: Division[]) => {
        divs.forEach((div: Division) => {
          let duplicateDiv: DuplicateDivision  = {
            division: div,
            duplicated_ID: '',
            parentID: div.divison_ID,
            title: `# ${div.division_name}`
          }
          this.duplicateDivision(duplicateDiv);
        });
      })
      // duplicate division after duplicate sub
    })
  }


  getDuplicatedSub(subID) : Promise <DuplicatedSub[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref('/duplicated-subPriority/').on('value', val => {

        let res = val.val();
        if(res) {
          let dSubs = Object.keys(res).map(k => res[k]);
          let duplicatedSub = dSubs.filter(e => e.parentSub.sub_ID == subID);
           resolve(duplicatedSub)
        } else {
          resolve(res)
        }
       
      }, reject)
    })
  }

  getDuplicatedDiv(divID) : Promise <DuplicatedSub[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref('/duplicated-division/').on('value', val => {

        let res = val.val();
        if(res) {
          let dDivs = Object.keys(res).map(k => res[k]);
          let duplicated_Divs = dDivs.filter(e => e.parentID == divID);
           resolve(duplicated_Divs)
        } else {
          resolve(res)
        }
       
      }, reject)
    })
  }


  getDuplicatedDivBySubID(subID) : Promise <DuplicateDivision[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref('/duplicated-division/').on('value', val => {

        let res = val.val();
        if(res) {
        let dDivs = Object.keys(res).map(k => res[k]);
        let duplicatedDiv = dDivs.filter(e => e.division.sub_ID == subID);
        resolve(duplicatedDiv)
        } else {
          resolve(res)
        }
    
      }, reject)
    })
  }

  getDuplicatedQuestionByDuplicatedDivision(divID) : Promise <DuplicatedQuestion[]>{
    return new Promise((resolve, reject)=> {
      this.database.ref('/duplicated-question/').on('value', val => {

        let res = val.val();
        console.log('result',  res)
        if(res) {
        let dquestions = Object.keys(res).map(k => res[k])
       // console.log('duplicated questions', dquestions);
        let questionList = dquestions.filter(e => e.parentDiv_ID == divID);
         console.log('questionList', questionList);
        resolve(questionList[0].questions)
        } else {
          resolve(res)
        }
      }, reject)
    })
  }


  addAudit(audit: Audit) {
    console.log('audit before add', audit );
    this.database.ref('/Audits/').push(audit).then(res => {
      this.database.ref(`/Audits/${res.key}/`).update({
        id: res.key
      });
      this.database.ref('/Audits/').on('value', val => {
        let result = val.val();
        let audit: Audit = Object.keys(result).map(k => result[k]).find((e: Audit) => e.id == res.key);
        this.storage.set(`TaskAudit-${audit.taskID}`, audit);
      })
    })
    // this.database.ref(`/Questions/${questionID}/`).update({answer: question.answer }).then(
    //   (res) => {
    //     console.log('update answer success >>>');
    //   }
    // )
  }

  getAuditByTaskID(auditID) : Promise <Audit> {
    return new Promise((resolve, reject)=> {
      this.database.ref(`/Audits/${auditID}`).on('value', val => {
        let res = val.val();
        if(res) {
        let audit = Object.keys(res).map(k => res[k]).find((e: Audit) => e.id == auditID);
        resolve(audit)
        }
      }, reject)
    })
  }
  addQuestionToAudit(auditID, q: Question) {
    console.log('audit-id', auditID)
    this.database.ref(`Audits/${auditID}/Questions`).push(q).then(res => console.log('question added to audit'))
  }

  // addDivisionToAudit(auditID, division) {
  //   console.log('audit-id', auditID)
  //   this.database.ref(`Audits/${auditID}/Questions`).push(q).then(res => console.log('question added to audit'))
  // }
}
