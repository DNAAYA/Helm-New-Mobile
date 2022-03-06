import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class ReplaceService {
   _v0 = 0;
   _v1 = 1;
   _v2 = 2;

  constructor() { }

  generateAssessmentPoint(q: Question) {
    let assessment;
    // console.log('question list >>> ', element);
     if(q.type == 'Yes/No') {
    //   console.log('Yes/No Question', q)

     } 
     
     else if (q.type == 'Input') {
      //  if(q.range.length) {
      //   q.range.forEach(r => {
      //     console.log('question rang ', q, r);
      //     if( parseInt(r.inputID) == this._v0 ) {
      //       if( r.symbol.includes('>=') ) {
      //         let _input0 = q.inputs[this._v0]['value'];
      //         console.log('input #0', _input0 , '>> range number :', r.num)

      //         if(_input0 >= r.num) {
      //           assessment = q.right_en.replace('/measurement0/', q.inputs[this._v0]['value'] );
      //           console.log('assessment point ..... ', assessment);
      //         }
      //       }
      //     }
      //   });
      //  }
      // console.log('Input Question', q);
       let i3 = 3;
       let i2 = 2;
      
       let _v0 = 0;
       let _v1 = 1;
       let _v2 = 2;

       if(q.inputs.length == i3) {
         let value1 = q.inputs[_v0]['value'] * 10
         let value2 = q.inputs[_v1]['value'] * 10
         let value3 = q.inputs[_v2]['value'];
         if(q.question.includes('/measurement0/' && '/measurement1/' && '/text/')) {
           assessment  = q.question.replace('/measurement0/',  value1.toString())
           .replace('/measurement1/', value2.toString())
           .replace('/text/', value3)
         } else if (q.question.includes('/measurement0/' && '/measurement1/' && '/number/')) {
           assessment  = q.question.replace('/measurement0/',  value1.toString())
           .replace('/measurement1/', value2.toString())
           .replace('/number/', value3)
         }
       //  console.log('assessment point', assessment)
       } 
       
       
       else if (q.inputs.length == i2) {
         if(q.question.includes('/measurement0/' && '/measurement1/')) {
           let value1 = q.inputs[_v0]['value'] * 10
           let value2 = q.inputs[_v1]['value'] * 10
           assessment  = q.question.replace('/measurement0/',  value1.toString())
           .replace('/measurement1/', value2.toString())
         } 
         else if(q.question.includes('/number0/' && '/number1/')) {
          let value1 = q.inputs[_v0]['value'] 
          let value2 = q.inputs[_v1]['value'] 
          assessment  = q.question.replace('/number0/',  value1)
          .replace('/number1/', value2)
         } 
         
         else if (q.question.includes('/measurement0/')) {
           let value1 = q.inputs[_v0]['value'] * 10;
           assessment  = q.question.replace('/measurement0/',  value1.toString())
         }
         else if (q.question.includes('/number/')) {
          let value1 = q.inputs[_v0]['value'];
          assessment  = q.question.replace('/number/',  value1)
        }
        else if (q.question.includes('/number0/')) {
          let value1 = q.inputs[_v0]['value'];
          assessment  = q.question.replace('/number0/',  value1)
        }
       }
     } 
     
     else {
       console.log('Yes/No Question', q)

     }

     console.log('assessment point', assessment, 'question ID', q.question_ID)
  }
}
