"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_question-details_question-details_module_ts"],{

/***/ 208:
/*!*********************************************************************!*\
  !*** ./src/app/question-details/question-details-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionDetailsPageRoutingModule": () => (/* binding */ QuestionDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _question_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-details.page */ 8445);




const routes = [
    {
        path: '',
        component: _question_details_page__WEBPACK_IMPORTED_MODULE_0__.QuestionDetailsPage
    }
];
let QuestionDetailsPageRoutingModule = class QuestionDetailsPageRoutingModule {
};
QuestionDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionDetailsPageRoutingModule);



/***/ }),

/***/ 7325:
/*!*************************************************************!*\
  !*** ./src/app/question-details/question-details.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionDetailsPageModule": () => (/* binding */ QuestionDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _question_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-details-routing.module */ 208);
/* harmony import */ var _question_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-details.page */ 8445);







let QuestionDetailsPageModule = class QuestionDetailsPageModule {
};
QuestionDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _question_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionDetailsPageRoutingModule
        ],
        declarations: [_question_details_page__WEBPACK_IMPORTED_MODULE_1__.QuestionDetailsPage]
    })
], QuestionDetailsPageModule);



/***/ }),

/***/ 8445:
/*!***********************************************************!*\
  !*** ./src/app/question-details/question-details.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionDetailsPage": () => (/* binding */ QuestionDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./question-details.page.html */ 9302);
/* harmony import */ var _question_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-details.page.scss */ 4650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let QuestionDetailsPage = class QuestionDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
QuestionDetailsPage.ctorParameters = () => [];
QuestionDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-question-details',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionDetailsPage);



/***/ }),

/***/ 9302:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/question-details/question-details.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>questionDetails</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 4650:
/*!*************************************************************!*\
  !*** ./src/app/question-details/question-details.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_question-details_question-details_module_ts.js.map