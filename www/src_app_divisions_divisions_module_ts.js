"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_divisions_divisions_module_ts"],{

/***/ 6272:
/*!*******************************************************!*\
  !*** ./src/app/divisions/divisions-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivisionsPageRoutingModule": () => (/* binding */ DivisionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _divisions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divisions.page */ 1724);




const routes = [
    {
        path: '',
        component: _divisions_page__WEBPACK_IMPORTED_MODULE_0__.DivisionsPage
    }
];
let DivisionsPageRoutingModule = class DivisionsPageRoutingModule {
};
DivisionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DivisionsPageRoutingModule);



/***/ }),

/***/ 9856:
/*!***********************************************!*\
  !*** ./src/app/divisions/divisions.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivisionsPageModule": () => (/* binding */ DivisionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _divisions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divisions-routing.module */ 6272);
/* harmony import */ var _divisions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divisions.page */ 1724);







let DivisionsPageModule = class DivisionsPageModule {
};
DivisionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _divisions_routing_module__WEBPACK_IMPORTED_MODULE_0__.DivisionsPageRoutingModule
        ],
        declarations: [_divisions_page__WEBPACK_IMPORTED_MODULE_1__.DivisionsPage]
    })
], DivisionsPageModule);



/***/ }),

/***/ 1724:
/*!*********************************************!*\
  !*** ./src/app/divisions/divisions.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivisionsPage": () => (/* binding */ DivisionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_divisions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./divisions.page.html */ 8838);
/* harmony import */ var _divisions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divisions.page.scss */ 3068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 568);







let DivisionsPage = class DivisionsPage {
    constructor(activatedRoute, dbService, alertController) {
        this.activatedRoute = activatedRoute;
        this.dbService = dbService;
        this.alertController = alertController;
        this.divisionList = [];
        this.duplicatedDivs = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let subID = this.activatedRoute.snapshot.params['subID'];
            let prID = this.activatedRoute.snapshot.params['prID'];
            this.type = this.activatedRoute.snapshot.params['type'];
            console.log('Sub priority ID', subID);
            console.log(' priority ID', prID);
            console.log(' router type', this.type);
            if (this.type == 'main') {
                // get sub priorities 
                yield this.dbService.getDivisionBySubID(subID).then((divs) => {
                    this.divisionList = divs;
                });
                console.log('Main content Division ..', this.divisionList);
            }
            else if (this.type == 'duplicated') {
                yield this.getDuplicatedDiv(subID);
                //console.log('duplicated content ..', this.duplicateDivision)
            }
        });
    }
    presentAlert(div) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Enter Division Title',
                inputs: [
                    {
                        name: 'title',
                        type: 'text',
                        placeholder: 'Division Title'
                    }
                ],
                // message: 'This is an alert message.',
                buttons: [
                    {
                        text: 'Save',
                        cssClass: 'secondary',
                        id: 'save-button',
                        handler: (object) => {
                            console.log('handler object', object.title);
                            this.duplicateDivision(div, object.title);
                        }
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    duplicateDivision(div, title) {
        let duplicateDiv = {
            division: div,
            duplicated_ID: '',
            title: title,
            parentID: div.divison_ID
        };
        //  console.log('Confirm save: subtitle', object);
        this.dbService.duplicateDivision(duplicateDiv);
    }
    getDuplicatedDiv(subID) {
        console.log('getDuplicatedDiv ..', subID);
        this.dbService.getDuplicatedDivBySubID(subID).then(res => {
            this.duplicatedDivs = res;
            console.log('duplicated Divisions', res);
        });
    }
    getDuplicatedDivByDivID(divID) {
        this.dbService.getDuplicatedDiv(divID).then(res => {
            this.duplicatedDivs = res;
        });
    }
};
DivisionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
DivisionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-divisions',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_divisions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_divisions_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DivisionsPage);



/***/ }),

/***/ 8838:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/divisions/divisions.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>divisions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-accordion-group animated=\"reduce\" *ngIf=\"type == 'main'\">\r\n    <ion-accordion [value]=\"div?.divison_ID\" (click)=\"getDuplicatedDivByDivID(div.divison_ID)\"\r\n      *ngFor=\"let div of divisionList\">\r\n      <ion-item slot=\"header\">\r\n        <ion-label>{{div?.division_name}}</ion-label>\r\n        <ion-button (click)=\"presentAlert(div)\">\r\n          <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n\r\n      <ion-list slot=\"content\">\r\n        <ion-item [routerLink]=\"['/questions/'+'main/'+ div.divison_ID+'/' + div.sub_ID  +'/' + div.priority_ID]\">\r\n          <ion-label>{{div.division_name}}</ion-label>\r\n        </ion-item>\r\n        \r\n        <ion-item *ngFor=\"let div of duplicatedDivs\"\r\n          [routerLink]=\"['/questions/'+'duplicated/'+ div.duplicated_ID+ '/' + div.division.sub_ID +'/' + div.division.priority_ID]\"\r\n          routerLinkActive=\"router-link-active\">\r\n          <ion-label>{{div?.title}}</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-accordion>\r\n  </ion-accordion-group>\r\n\r\n  <ion-list *ngIf=\"duplicatedDivs\">\r\n    <ion-item *ngFor=\"let div of duplicatedDivs\"\r\n      [routerLink]=\"['/questions/'+'duplicated/'+ div.duplicated_ID+ '/' + div.sub_ID +'/' + div.priority_ID]\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <ion-label>{{div?.title}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 3068:
/*!***********************************************!*\
  !*** ./src/app/divisions/divisions.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXZpc2lvbnMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_divisions_divisions_module_ts.js.map