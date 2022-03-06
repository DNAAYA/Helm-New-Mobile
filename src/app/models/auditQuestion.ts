import { Question } from "./question";

export class AuditQuestion {
    question: Question;
    duplicated_SubID?: string;
    duplicated_divID?: string;

    constructor(question){
        {
            this.question = question.question 
            this.duplicated_SubID = question.duplicated_SubID || '';
            this.duplicated_divID = question.duplicated_divID || '';
        }
    }
}