import { Division } from "./division";

export class DuplicateDivision {
    division: Division;
    duplicated_ID: string;
    title: string;
    parentID: string;
    //taskID: string;
    constructor(division){
        {
            this.division = division.division || "";
            this.duplicated_ID = division.duplicatedID || "";
            this.title = division.title || "";
            this.parentID = division.parentID;
           // this.taskID = division.taskID;
        }
    }
}