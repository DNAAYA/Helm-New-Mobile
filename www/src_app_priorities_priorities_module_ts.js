"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_priorities_priorities_module_ts"],{

/***/ 4208:
/*!*********************************************************!*\
  !*** ./src/app/priorities/priorities-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrioritiesPageRoutingModule": () => (/* binding */ PrioritiesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _priorities_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priorities.page */ 8941);




const routes = [
    {
        path: '',
        component: _priorities_page__WEBPACK_IMPORTED_MODULE_0__.PrioritiesPage
    }
];
let PrioritiesPageRoutingModule = class PrioritiesPageRoutingModule {
};
PrioritiesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrioritiesPageRoutingModule);



/***/ }),

/***/ 8477:
/*!*************************************************!*\
  !*** ./src/app/priorities/priorities.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrioritiesPageModule": () => (/* binding */ PrioritiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _priorities_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priorities-routing.module */ 4208);
/* harmony import */ var _priorities_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priorities.page */ 8941);







let PrioritiesPageModule = class PrioritiesPageModule {
};
PrioritiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _priorities_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrioritiesPageRoutingModule
        ],
        declarations: [_priorities_page__WEBPACK_IMPORTED_MODULE_1__.PrioritiesPage]
    })
], PrioritiesPageModule);



/***/ }),

/***/ 8941:
/*!***********************************************!*\
  !*** ./src/app/priorities/priorities.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrioritiesPage": () => (/* binding */ PrioritiesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_priorities_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./priorities.page.html */ 2658);
/* harmony import */ var _priorities_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priorities.page.scss */ 1898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 568);






let PrioritiesPage = class PrioritiesPage {
    constructor(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.prioritiesList = [];
    }
    ngOnInit() {
        this.dbService.getPriorities().then((pr) => {
            console.log('prioritiesd list', pr);
            this.prioritiesList = pr;
        });
    }
};
PrioritiesPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PrioritiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-priorities',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_priorities_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_priorities_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrioritiesPage);



/***/ }),

/***/ 2658:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/priorities/priorities.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>priorities</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let pr of prioritiesList\" [routerLink]=\"['/sub-priorities/'+ pr.priority_ID]\" routerLinkActive=\"router-link-active\" >\r\n      <ion-label>\r\n        {{pr.priority_name}}\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-grid style=\"position: absolute;bottom: 10%;\">\r\n    <ion-col>\r\n      <ion-row>\r\n          <ion-button style=\"margin-left: 33.3%;\" class=\"button\" >Save Report</ion-button>\r\n\r\n      </ion-row>\r\n      <ion-row>\r\n          <ion-button style=\"margin-left: 33.3%;\" class=\"button\" > <ion-icon name=\"list-outline\"></ion-icon> Tasks</ion-button>\r\n\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 1898:
/*!*************************************************!*\
  !*** ./src/app/priorities/priorities.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmlvcml0aWVzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_priorities_priorities_module_ts.js.map