import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Audit } from '../models/audit';
import { DuplicateDivision } from '../models/duplicate-division';
import { DuplicatedQuestion } from '../models/duplicatedQuestion';
import { DuplicatedSub } from '../models/duplicatedSub';
import { Priority } from '../models/priority';
import { Question } from '../models/question';
import { Subpriority } from '../models/Subpriority';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private storage: Storage
  ) { }

  getPriorities(): Promise <Priority[]> {
    return new Promise((resolve, reject)=> {
      this.storage.get('Priorities').then(res => {
        let prioritiesList = Object.keys(res).map(k => res[k]);
        resolve(prioritiesList)
      }, reject)
    })
  }

  getSubPriorityWithPriorityID(priorityID): Promise <Subpriority[]> {
    return new Promise((resolve, reject)=> {
      this.storage.get('SubPriorities').then((res) => {
        let subPriorities = Object.keys(res).map(k => res[k]);
        resolve(subPriorities.filter(e => e.priority_ID == priorityID))
      }, reject)
    })
  }

  getDuplicatedSub(subID) : Promise <DuplicatedSub[]>{
    return new Promise((resolve, reject)=> {
      this.storage.get('duplicated-subPriority').then((res) => {
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

  
  getDivisionBySubID(subID) {
    let filteredDivisions = [];
    return new Promise((resolve, reject)=> {
      this.storage.get(`Divisions`).then(res => {
       let divList = Object.keys(res).map(k => res[k]);
       filteredDivisions = divList.filter(d => d.sub_ID == subID);    
        resolve(filteredDivisions)
      }, reject)
    })
  }

  getDuplicatedDivBySubID(subID) : Promise <DuplicateDivision[]>{
    return new Promise((resolve, reject)=> {
      this.storage.get('duplicated-division').then(res => {
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

  getDuplicatedDiv(divID) : Promise <DuplicatedSub[]>{
    return new Promise((resolve, reject)=> {
      this.storage.get('duplicated-division').then(res => {
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

  getQuestionByDivID(divID): Promise <Question[]> {
    return new Promise((resolve, reject)=> {
      this.storage.get(`Questions`).then(res => {
        console.log('local questions', res)
       let questionList = Object.keys(res).map(k => res[k]).filter(q => q.division_ID == divID);   
        resolve(questionList)
      }, reject)
    })
  }



  getDuplicatedQuestionByDuplicatedDivision(divID) : Promise <DuplicatedQuestion[]>{
    return new Promise((resolve, reject)=> {
      this.storage.get('duplicated-question').then(res => {
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

  getAuditFromLocalStorage(): Promise <any>{
    return new Promise((resolve, reject)=> {
      let _auditID: string = '';
      this.storage.get('auditID').then(async auditID => {
        _auditID = auditID;
        // console.log('audit id..', _auditID);
      } ).then(() => {
            this.storage.get(`audit-${_auditID}`).then((audit: Audit)=> {
            // console.log('auditt >>>>>>> ', audit)
              resolve(audit)
            }, reject)
      })
    })

  
  }

  saveLocaldivisionQuestions(divID, q: Question[]) {
    this.storage.set(`divQuestions-${divID}`, q).then(q => {
      console.log('question after add to local storage', q)
    })
  }

  getLocaldivisionQuestions(divID): Promise <Question[]> {
    return new Promise((resolve, reject)=> {
      this.storage.get(`divQuestions-${divID}`).then((q: Question[]) => {
        console.log('local division questions', q)
        resolve(q)
      }, reject)
    })

  }

  
  saveQuestionsToLocalStorage(taskID, question: Question[]) {
    this.storage.set(`auditQuestions-${taskID}`, question).then(q => {
      console.log('question after add to local storage', q)
    })
  }
}
