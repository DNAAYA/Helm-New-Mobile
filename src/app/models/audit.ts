import { Data } from "@angular/router";
import { Question } from "./Question";

export class Audit {
    
    id: string;
    taskID: string;
    title: string;
    createdAt: number;
    createdBy: string;
    reported: boolean;
    questions?: Question[];


    constructor(audit){
        {
            this.id = audit.id || "";
            this.taskID = audit.taskID || "";
            this.title = audit.title || "";
            this.createdAt = audit.createdAt ;
            this.createdBy = audit.createdBy ;
            this.questions = audit.questions
            this.reported = audit.reported
        }
    }
}