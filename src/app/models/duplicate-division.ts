import { Division } from "./division";

export class DuplicateDivision {
    division: Division;
    duplicated_ID: string;
    title: string;
    constructor(division){
        {
            this.division = division.division || "";
            this.duplicated_ID = division.duplicatedID || "";
            this.title = division.title || "";
        }
    }
}