export class Division {
    divison_ID: string;
    division_name: string;
    priority_ID: string;
    sub_ID: string;

    constructor(division){
        {
            this.divison_ID = division.division_ID || "";
            this.division_name = division.division_name || "";
            this.priority_ID = division.priority_ID || "";
            this.sub_ID = division.sub_ID || "";
        }
    }
}