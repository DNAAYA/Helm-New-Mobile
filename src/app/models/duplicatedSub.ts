import { Subpriority } from "./Subpriority";

export class DuplicatedSub {
    duplicated_ID: string;
    subTitle: string;
    parent_SubID: string;
   // taskID: string;

    constructor(duplicatedSub){
        {
            this.duplicated_ID = duplicatedSub.duplicatedID;
            this.subTitle = duplicatedSub.subTitle;
            this.parent_SubID = duplicatedSub.parent_SubID;            
        }
    }
}