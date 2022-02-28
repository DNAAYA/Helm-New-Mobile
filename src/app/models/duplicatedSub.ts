import { Subpriority } from "./Subpriority";

export class DuplicatedSub {
    duplicated_ID: string;
    parentSub: Subpriority;
    subTitle: string;
    parentID: string;

    constructor(duplicatedSub){
        {
            this.duplicated_ID = duplicatedSub.duplicatedID;
            this.parentSub = duplicatedSub.parentSub;
            this.subTitle = duplicatedSub.subTitle;
            this.parentID = duplicatedSub.parentID;
        }
    }
}