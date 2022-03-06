import { Data } from "@angular/router";
import { Question } from "./question";

export class Audit {
    
    id: string;
    taskID: string;
    title: string;
    subTitle: string;
    divTitle: string;
    createdAt: number;
    createdBy: string;
    subs?: [
        {
            id?: string,
            title?: string
        }
    ];
    divs?: [
        {
            id?: string,
            subID?: string,
            title?: string
        }
    ];
    questions?: Question[];


    constructor(audit){
        {
            this.id = audit.id || "";
            this.taskID = audit.taskID || "";
            this.title = audit.title || "";
            this.subTitle = audit.subTitle;
            this.divTitle = audit.divTitle ;
            this.createdAt = audit.createdAt ;
            this.createdBy = audit.createdBy ;
            this.subs = audit.subs;
            this.divs = audit.divs;
            this.questions = audit.questions
        }
    }
}