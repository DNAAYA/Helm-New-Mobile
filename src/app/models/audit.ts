import { Data } from "@angular/router";
import { Division } from "./division";
import { DuplicateDivision } from "./duplicate-division";
import { DuplicatedQuestion } from "./duplicatedQuestion";
import { DuplicatedSub } from "./duplicatedSub";
import { Priority } from "./priority";
import { Question } from "./Question";
import { Subpriority } from "./Subpriority";

export class Audit {
    
    id: string;
    taskID: string;
    title: string;
    createdAt: number;
    createdBy: string;
    reported: boolean;
    questions?: Question[];
    priorities?: Priority[]
    subPriorities?: Subpriority[]
    divisions?: Division[]
    subPrioritiesDuplicates?: DuplicatedSub[]
    duplicatedDivisions?: DuplicateDivision[]
    duplicatedQuestions?: DuplicatedQuestion[]

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