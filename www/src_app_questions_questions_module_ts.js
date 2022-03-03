"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_questions_questions_module_ts"],{

/***/ 3469:
/*!********************************************************!*\
  !*** ./src/app/questionTypes/input/input.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./input.component.html */ 1480);
/* harmony import */ var _input_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.component.scss */ 6612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let InputComponent = class InputComponent {
    constructor() {
        this.questionWithInput = [];
    }
    ngOnInit() {
        let _measurement0 = this.question.question.includes('/measurement0/');
        let _measurement1 = this.question.question.includes('/measurement1/');
        let _number = this.question.question.includes('/number/');
        let _number0 = this.question.question.includes('/number0/');
        let _number1 = this.question.question.includes('/number1/');
        let _text = this.question.question.includes('/text/');
        // _measurement0 && _measurement1
        if (_measurement0 && _measurement1 && _text) {
            let part1 = this.question.question.split('/measurement0/');
            let part2 = part1[1].split('/measurement1/');
            let part3 = part2[1].split('/text/');
            this.questionWithInput.push(part1[0], part2[0], ...part3);
            //console.log('split question 3 INPUTS >>', this.questionWithInput)
        }
        else if (_measurement0 && _measurement1) {
            let part1 = this.question.question.split('/measurement0/');
            let part2 = part1[1].split('/measurement1/');
            this.questionWithInput.push(part1[0], ...part2);
            //console.log('split question ', this.questionWithInput);
            //console.log('split question 2 INPUTS >>', this.questionWithInput)
        }
        // _measurement0 && _measurement1
        else if (_measurement0 && !_measurement1) {
            let part1 = this.question.question.split('/measurement0/');
            this.questionWithInput.push(...part1);
            //console.log('split question 1 INPUTS >>', this.questionWithInput)
        }
        // number 
        else if (_number && !_measurement0 && !_measurement1) {
            let part1 = this.question.question.split('/number/');
            // console.log('contain number', part1)
            this.questionWithInput.push(...part1);
        }
        else if (_measurement0 && _number) {
            let part1 = this.question.question.split('/measurement0/');
            let part2 = part1[1].split('/number/');
            this.questionWithInput.push(part1[0], ...part2);
        }
        else if (_number0 && _number1) {
            let part1 = this.question.question.split('/number0/');
            let part2 = part1[1].split('/number1/');
            this.questionWithInput.push(part1[0], ...part2);
        }
        else if (_number0) {
            let part1 = this.question.question.split('/number0/');
            this.questionWithInput.push(...part1);
        }
    }
};
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    question: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
InputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-input',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_input_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputComponent);



/***/ }),

/***/ 7779:
/*!**********************************************************************!*\
  !*** ./src/app/questionTypes/yes-no-input/yes-no-input.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesNoInputComponent": () => (/* binding */ YesNoInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_yes_no_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./yes-no-input.component.html */ 4099);
/* harmony import */ var _yes_no_input_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yes-no-input.component.scss */ 129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let YesNoInputComponent = class YesNoInputComponent {
    constructor() { }
    ngOnInit() {
        // console.log('question List', this.question);
        if (this.question.right_en.includes('/number/') || this.question.wrong_en.includes('/number/')) {
            this.rightAnswer = this.question.right_en.split('/number/');
            this.wrongAnswer = this.question.wrong_en.split('/number/');
        }
        else if (this.question.right_en.includes('/measurement0/') || this.question.wrong_en.includes('/measurement0/')) {
            this.rightAnswer = this.question.right_en.split('/measurement0/');
            this.wrongAnswer = this.question.wrong_en.split('/measurement0/');
        }
        // get right question will display while answer is yes
        // console.log('rightanswer', this.rightAnswer);
    }
};
YesNoInputComponent.ctorParameters = () => [];
YesNoInputComponent.propDecorators = {
    question: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
YesNoInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-yes-no-input',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_yes_no_input_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_yes_no_input_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], YesNoInputComponent);



/***/ }),

/***/ 5223:
/*!**********************************************************!*\
  !*** ./src/app/questionTypes/yes-no/yes-no.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesNoComponent": () => (/* binding */ YesNoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_yes_no_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./yes-no.component.html */ 7190);
/* harmony import */ var _yes_no_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yes-no.component.scss */ 1357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let YesNoComponent = class YesNoComponent {
    constructor() { }
    ngOnInit() {
        console.log('changes', this.question);
    }
};
YesNoComponent.ctorParameters = () => [];
YesNoComponent.propDecorators = {
    question: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
YesNoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-yes-no',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_yes_no_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_yes_no_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], YesNoComponent);



/***/ }),

/***/ 95:
/*!*******************************************************!*\
  !*** ./src/app/questions/questions-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPageRoutingModule": () => (/* binding */ QuestionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.page */ 2626);




const routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_0__.QuestionsPage
    }
];
let QuestionsPageRoutingModule = class QuestionsPageRoutingModule {
};
QuestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionsPageRoutingModule);



/***/ }),

/***/ 2293:
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPageModule": () => (/* binding */ QuestionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-routing.module */ 95);
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.page */ 2626);
/* harmony import */ var _questionTypes_yes_no_yes_no_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questionTypes/yes-no/yes-no.component */ 5223);
/* harmony import */ var _questionTypes_yes_no_input_yes_no_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questionTypes/yes-no-input/yes-no-input.component */ 7779);
/* harmony import */ var _questionTypes_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../questionTypes/input/input.component */ 3469);
/* harmony import */ var _replace_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../replace.pipe */ 5973);











let QuestionsPageModule = class QuestionsPageModule {
};
QuestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionsPageRoutingModule
        ],
        declarations: [
            _questions_page__WEBPACK_IMPORTED_MODULE_1__.QuestionsPage,
            _questionTypes_yes_no_yes_no_component__WEBPACK_IMPORTED_MODULE_2__.YesNoComponent,
            _questionTypes_yes_no_input_yes_no_input_component__WEBPACK_IMPORTED_MODULE_3__.YesNoInputComponent,
            _questionTypes_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent,
            _replace_pipe__WEBPACK_IMPORTED_MODULE_5__.ReplacePipe,
        ],
        exports: [_replace_pipe__WEBPACK_IMPORTED_MODULE_5__.ReplacePipe]
    })
], QuestionsPageModule);



/***/ }),

/***/ 2626:
/*!*********************************************!*\
  !*** ./src/app/questions/questions.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPage": () => (/* binding */ QuestionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./questions.page.html */ 6105);
/* harmony import */ var _questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.page.scss */ 789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 568);






let QuestionsPage = class QuestionsPage {
    constructor(activatedRoute, dbService) {
        this.activatedRoute = activatedRoute;
        this.dbService = dbService;
        this.questionList = [];
        this.duplicatedquestions = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let divID = this.activatedRoute.snapshot.params['divId'];
            let subId = this.activatedRoute.snapshot.params['subId'];
            let prId = this.activatedRoute.snapshot.params['prId'];
            this.type = this.activatedRoute.snapshot.params['type'];
            console.log('#) sub ID from router: ', subId);
            console.log('#) priority ID from router: ', prId);
            console.log('#) div ID from router: ', divID);
            console.log('#) type  from router: ', this.type);
            // console.log('division id:', divID, subId, prId, type);
            if (this.type == 'main') {
                // console.log('main question divsion id', divID)
                //get question list buy division id
                yield this.dbService.getQuestionByDivID(divID).then((questions) => {
                    this.questionList = questions;
                    console.log('main question list >>>', this.questionList);
                });
            }
            else {
                yield this.getDuplicatedQuestion(divID);
                console.log('duplicated question ..', this.questionList);
            }
            // get divisions
            yield this.getDivision(subId, divID);
        });
    }
    getDivision(subId, divID) {
        this.dbService.getDivisionBySubID(subId).then((divs) => {
            console.log('divisions list', divs);
            this.indexofDivision = divs.findIndex(i => i.divison_ID == divID);
            this._thisDivision = divs[this.indexofDivision];
            this._previousDiv = divs[this.indexofDivision - 1];
            this._nextDiv = divs[this.indexofDivision + 1];
            console.log('previous division', this._previousDiv);
            console.log('next division', this._nextDiv);
        });
    }
    getDuplicatedQuestion(divID) {
        console.log('getDuplicatedDiv ..', divID);
        this.dbService.getDuplicatedQuestionByDuplicatedDivision(divID).then((res) => {
            // console.log('duplicated questions', res);
            this.questionList = res;
        });
    }
    saveAnswer() {
        let questID = "-Mx0NZwuxdH96kh-unRZ";
        this.questionList.forEach(q => {
            this.dbService.sendAnswer(questID, q);
        });
    }
};
QuestionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
QuestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-questions',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionsPage);



/***/ }),

/***/ 5973:
/*!*********************************!*\
  !*** ./src/app/replace.pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplacePipe": () => (/* binding */ ReplacePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


let ReplacePipe = class ReplacePipe {
    constructor() {
    }
    transform(value, args) {
        const item = document.createElement('ion-item');
        const input = document.createElement('ion-input');
        //  console.log('replaace pipe value', value, );
        //   console.log(' replace pipe args', args)
        // For each argument
        for (var key in args) {
            console.log('replace pipe', args[key]);
            if (value && args[key] == 'input') {
                value = value.replace(key, item.appendChild(input).innerHTML);
            }
        }
        return value;
    }
};
ReplacePipe.ctorParameters = () => [];
ReplacePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'replace'
    })
], ReplacePipe);



/***/ }),

/***/ 1480:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/questionTypes/input/input.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    <!-- Question with 2 inputs -->\r\n    <div *ngIf=\"questionWithInput.length == 3\">\r\n      <p>\r\n        {{questionWithInput[0]}}\r\n        <ion-input type=\"number\" [(ngModel)]=\"question?.inputs[0].value\"></ion-input>\r\n        {{questionWithInput[1]}}\r\n        <ion-input type=\"number\" [(ngModel)]=\"question?.inputs[1].value\"></ion-input>\r\n        {{questionWithInput[2]}}\r\n      </p>\r\n    </div>\r\n\r\n    <div *ngIf=\"questionWithInput.length == 2\">\r\n      <p>\r\n        {{questionWithInput[0]}}\r\n        <ion-input type=\"number\" [(ngModel)]=\"question?.inputs[0].value\"></ion-input>\r\n        {{questionWithInput[1]}}\r\n      </p>\r\n    </div>\r\n\r\n    <!-- Question with 3 inputs -->\r\n    <div *ngIf=\"questionWithInput.length == 4\">\r\n      <p>\r\n        {{questionWithInput[0]}}\r\n        <ion-input type=\"number\" [(ngModel)]=\"question?.inputs[0].value\"></ion-input>\r\n        {{questionWithInput[1]}}\r\n        <ion-input type=\"number\" [(ngModel)]=\"question?.inputs[1].value\"></ion-input>\r\n        {{questionWithInput[2]}}\r\n        <ion-input type=\"text\" [(ngModel)]=\"question?.inputs[2].value\"></ion-input>\r\n      </p>\r\n    </div>");

/***/ }),

/***/ 4099:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/questionTypes/yes-no-input/yes-no-input.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  \r\n\r\n    <ion-radio-group [(ngModel)]=\"question.answer\">\r\n      <ion-label>  {{question.question}} </ion-label>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>Yes</ion-label>\r\n          <ion-radio [value]=\"question.right_en\">\r\n          </ion-radio>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-label>No</ion-label>\r\n          <ion-radio [value]=\"question.wrong_en\">\r\n          </ion-radio>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-label>N/A</ion-label>\r\n          <ion-radio value=\"N/A\"></ion-radio>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-radio-group>\r\n    <ion-label *ngIf=\"question.answer == question.wrong_en\">{{question.wrong_en}}</ion-label>\r\n    <div *ngIf=\"question.answer == question.right_en\">\r\n      <p> {{rightAnswer[0]}}\r\n        <ion-input type=\"number\" placeholder=\"number....\"></ion-input>\r\n        {{rightAnswer[1]}}\r\n      </p>\r\n    </div>\r\n\r\n\r\n");

/***/ }),

/***/ 7190:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/questionTypes/yes-no/yes-no.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n    <ion-radio-group [(ngModel)]=\"question.answer\">\r\n      <ion-label>{{question.question}} </ion-label>\r\n      <ion-row class=\"ion-padding-top\">\r\n        <ion-col>\r\n          <ion-label>Yes</ion-label>\r\n          <ion-radio [value]=\"question.right_en\">\r\n          </ion-radio>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-label>No</ion-label>\r\n          <ion-radio [value]=\"question.wrong_en\">\r\n          </ion-radio>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-label>N/A</ion-label>\r\n          <ion-radio value=\"N/A\"></ion-radio>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n<!-- <ion-text color=\"danger\" >\r\n  <h4 >There is No Question in this division please change the Previous Answer</h4>\r\n</ion-text> -->\r\n");

/***/ }),

/***/ 6105:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/questions/questions.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"headerFontSize\">{{_thisDivision?.division_name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let q of questionList\" class=\"ion-padding card-style\">\r\n        <app-yes-no *ngIf=\"q?.type == 'Yes/No'\" [question]=\"q\"></app-yes-no>\r\n        <app-input *ngIf=\"q?.type == 'Input'\" [question]=\"q\"></app-input>\r\n        <app-yes-no-input *ngIf=\"q?.type == 'Yes/No With Input'\" [question]=\"q\"></app-yes-no-input>\r\n\r\n        <ion-buttons [routerLink]=\"['/details/' + q.question_ID]\" routerLinkActive=\"router-link-active\"  slot=\"end\" icon-only item-end clear>\r\n          <ion-icon  name=\"chevron-forward-outline\">\r\n          </ion-icon>\r\n        </ion-buttons>\r\n\r\n      </ion-item>\r\n    </ion-list>  \r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"outline\" color=\"secondary\" *ngIf=\"_previousDiv\"\r\n        [routerLink]=\"['/questions/' + type + '/'+ _previousDiv.divison_ID + '/' + _previousDiv.sub_ID + '/' + _previousDiv.priority_ID]\"\r\n        routerLinkActive=\"router-link-active\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        <!-- {{_previousDiv?.division_name}} -->\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"start\">\r\n\r\n      <ion-button  color=\"primary\" (click)=\"saveAnswer()\">\r\n        Save\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button\r\n        [routerLink]=\"['/questions/'+ type + '/' +_nextDiv.divison_ID + '/' + _nextDiv.sub_ID + '/' + _nextDiv.priority_ID]\"\r\n        routerLinkActive=\"router-link-active\" fill=\"outline\" color=\"secondary\" *ngIf=\"_nextDiv\">\r\n        <!-- {{_nextDiv?.division_name}} -->\r\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 6612:
/*!**********************************************************!*\
  !*** ./src/app/questionTypes/input/input.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 129:
/*!************************************************************************!*\
  !*** ./src/app/questionTypes/yes-no-input/yes-no-input.component.scss ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5ZXMtbm8taW5wdXQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1357:
/*!************************************************************!*\
  !*** ./src/app/questionTypes/yes-no/yes-no.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5ZXMtbm8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 789:
/*!***********************************************!*\
  !*** ./src/app/questions/questions.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".textColor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoicXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Q29sb3J7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_questions_questions_module_ts.js.map