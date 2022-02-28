import { Question } from "./question";

export class DuplicatedQuestion {
    duplicated_ID: string;
    parentDiv_ID: string;
    questions: Question[];
    constructor(question){
        {
            this.duplicated_ID = question.question_ID ;
            this.parentDiv_ID = question.parentDiv_ID;
            this.questions = question.questions ;
        }
    }
}