import { Division } from "./division";

export class DuplicateDivision {
    duplicated_ID: string;
    title: string;
    parent_DivID: string;
    parent_SubID: string;

    //taskID: string;
    constructor(division){
        {
            this.duplicated_ID = division.duplicatedID || "";
            this.title = division.title || "";
            this.parent_DivID = division.parent_DivID;
            this.parent_SubID = division.parent_SubID;
           // this.taskID = division.taskID;
        }
    }
}