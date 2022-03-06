import { Question } from "./question";

export class DuplicatedQuestion {
    duplicated_ID: string;
    parentDiv_ID: string;
    questions: Question[];
    type: string
   // taskID: string;

    constructor(question){
        {
            this.duplicated_ID = question.question_ID ;
            this.parentDiv_ID = question.parentDiv_ID;
            this.questions = question.questions ;
            this.type = question.type
        }
    }
}