
export class Audit {
    id: string;
    taskID: string;
    title: string;
    subTitle: string;
    divTitle: string;
    createdAt: string;
    createdBy: string;
    constructor(audit){
        {
            this.id = audit.id || "";
            this.taskID = audit.taskID || "";
            this.title = audit.title || "";
            this.subTitle = audit.subTitle;
            this.divTitle = audit.divTitle ;
            this.createdAt = audit.createdAt ;
            this.createdBy = audit.createdBy ;
        }
    }
}