export class Subpriority {
    sub_ID: string;
    priority_ID: string;
    sub_name: string;

    constructor(subPriority){
        {
            this.sub_ID = subPriority.sub_ID || "";
            this.priority_ID = subPriority.priority_ID || "";
            this.sub_name = subPriority.sub_name || ""; 
        }

    }
}