import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DuplicateDivision } from '../models/duplicate-division';
import { DuplicatedSub } from '../models/duplicatedSub';
import { Priority } from '../models/priority';
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
      this.storage.get('/duplicated-division/').then(res => {
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
}
