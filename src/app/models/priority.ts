export class Priority {
    priority_ID: string;
    priority_name: string;
    description: string;
    priority_img: string;
    constructor(priority){
        {
            this.priority_ID = priority.prioirity_ID || "";
            this.priority_name = priority.priority_name || "";
            this.description = priority.descriprtion || "";
            this.priority_img = priority.priority_img || "";

        }
    }
}