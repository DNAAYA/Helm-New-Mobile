import { Question } from "./question";

export class DuplicatedQuestion {
    duplicated_ID: string;
    parentDiv_ID: string;
    parentSub_ID: string;
    parentQuestion_ID: string;
    priority_ID: string;
    adaNumber: string;
    ada_image: string;
    cost: string;
    fullQuestion: string;
    question: string;
    right_en: string;
    wrong_en: string;
    guidance_en: string;
    right_ar: string;
    wrong_ar: string;
    guidance_ar: string;
    solutions: string[];
    type: string;
    inputs: [];
    range: [
        {
        inputID: string;
        num: number;
        symbol: string;
            }
        ];
    answer: string;
    images: [];
    note: string;
    display: string;
    parentID: string;
    parentAnwer: string;
    assessmentPoints: string;
   // taskID: string;

    constructor(question){
        {
            this.duplicated_ID = question.question_ID || '';
            this.parentDiv_ID = question.parentDiv_ID || '';
            this.priority_ID = question.priority_ID || '';
            this.adaNumber = question.adaNumber || '';
            this.ada_image = question.ada_image || '';
            this.cost = question.cost || '';
            this.fullQuestion = question.fullQuestion || '';
            this.guidance_ar = question.guidance_ar || '' ;
            this.guidance_en = question.guidance_en || '';
            this.question = question.question || '';
            this.right_ar = question.right_ar || '';
            this.wrong_ar = question.wrong_ar || '';
            this.right_en = question.right_en || '';
            this.wrong_en = question.wrong_en || '';
            this.solutions = question.solutions || '';
            this.type = question.type || '';
            this.range = question.range || '';
            this.answer = question.answer || '';
            this.images = question.images || '';
            this.note = question.note || '';
            this.display = question.display || '';
            this.parentAnwer = question.parentAnwer || '';
            this.parentID = question.parentID || '';
            this.inputs = question.inputs || '';
        }
    }
}