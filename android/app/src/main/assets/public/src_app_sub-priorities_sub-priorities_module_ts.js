"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sub-priorities_sub-priorities_module_ts"],{

/***/ 2517:
/*!*****************************************************************!*\
  !*** ./src/app/sub-priorities/sub-priorities-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubPrioritiesPageRoutingModule": () => (/* binding */ SubPrioritiesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _sub_priorities_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-priorities.page */ 2011);




const routes = [
    {
        path: '',
        component: _sub_priorities_page__WEBPACK_IMPORTED_MODULE_0__.SubPrioritiesPage
    }
];
let SubPrioritiesPageRoutingModule = class SubPrioritiesPageRoutingModule {
};
SubPrioritiesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubPrioritiesPageRoutingModule);



/***/ }),

/***/ 1787:
/*!*********************************************************!*\
  !*** ./src/app/sub-priorities/sub-priorities.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubPrioritiesPageModule": () => (/* binding */ SubPrioritiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _sub_priorities_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-priorities-routing.module */ 2517);
/* harmony import */ var _sub_priorities_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-priorities.page */ 2011);







let SubPrioritiesPageModule = class SubPrioritiesPageModule {
};
SubPrioritiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sub_priorities_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubPrioritiesPageRoutingModule
        ],
        declarations: [_sub_priorities_page__WEBPACK_IMPORTED_MODULE_1__.SubPrioritiesPage]
    })
], SubPrioritiesPageModule);



/***/ }),

/***/ 2011:
/*!*******************************************************!*\
  !*** ./src/app/sub-priorities/sub-priorities.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubPrioritiesPage": () => (/* binding */ SubPrioritiesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sub_priorities_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sub-priorities.page.html */ 6798);
/* harmony import */ var _sub_priorities_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-priorities.page.scss */ 5176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 568);







let SubPrioritiesPage = class SubPrioritiesPage {
    constructor(activatedRoute, dbService, alertController) {
        this.activatedRoute = activatedRoute;
        this.dbService = dbService;
        this.alertController = alertController;
        this.subPrioritiesList = [];
        this.duplicatedSub = [];
    }
    ngOnInit() {
        let prID = this.activatedRoute.snapshot.params['id'];
        console.log('priority ID', prID);
        // get sub priorities 
        this.dbService.getSubPriorityWithPriorityID(prID).then((subs) => {
            this.subPrioritiesList = subs;
        });
    }
    getDuplicatedSup(subid) {
        console.log('hello getDuplicatedSup', subid);
        this.dbService.getDuplicatedSub(subid).then(res => {
            this.duplicatedSub = res;
            console.log('duplicated sup', res);
        });
    }
    presentAlert(sub) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Enter Sub Title',
                inputs: [
                    {
                        name: 'subTitle',
                        type: 'text',
                        placeholder: 'Sub Title'
                    }
                ],
                // message: 'This is an alert message.',
                buttons: [
                    {
                        text: 'Save',
                        cssClass: 'secondary',
                        id: 'save-button',
                        handler: (object) => {
                            console.log('handler object', object.subTitle);
                            this.duplicateSupPriority(sub, object.subTitle);
                        }
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    duplicateSupPriority(sub, title) {
        let duplicateSub = {
            duplicated_ID: '',
            parentSub: sub,
            subTitle: `${sub.sub_name}: ${title}`,
            parentID: sub.sub_ID
        };
        //  console.log('Confirm save: subtitle', object);
        this.dbService.duplicateSubPriority(duplicateSub);
    }
};
SubPrioritiesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
SubPrioritiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sub-priorities',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sub_priorities_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sub_priorities_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubPrioritiesPage);



/***/ }),

/***/ 6798:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sub-priorities/sub-priorities.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>subPriorities</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-accordion-group>\r\n    <ion-accordion [value]=\"sub.sub_ID\" (click)=\"getDuplicatedSup(sub.sub_ID)\" *ngFor=\"let sub of subPrioritiesList\">\r\n      <ion-item slot=\"header\">\r\n        <ion-label>{{sub.sub_name}}</ion-label>\r\n        <ion-button (click)=\"presentAlert(sub)\">\r\n          <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n\r\n      <ion-list slot=\"content\">\r\n        <ion-item [routerLink]=\"['/divisions/'+'main/'+ sub.sub_ID+'/' + sub.priority_ID]\">\r\n          <ion-label>{{sub.sub_name}}</ion-label>\r\n        </ion-item>\r\n        \r\n        <ion-item *ngFor=\"let i of duplicatedSub\"\r\n          [routerLink]=\"['/divisions/'+'duplicated/'+ sub.sub_ID+'/' + sub.priority_ID]\">\r\n          <ion-label>{{i.subTitle}}</ion-label>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item [routerLink]=\"['/divisions/'+ sub.sub_ID+'/' + sub.priority_ID]\"\r\n          routerLinkActive=\"router-link-active\">\r\n          <ion-label>Red</ion-label>\r\n        </ion-item> -->\r\n      </ion-list>\r\n    </ion-accordion>\r\n  </ion-accordion-group>\r\n  <ion-list>\r\n\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 5176:
/*!*********************************************************!*\
  !*** ./src/app/sub-priorities/sub-priorities.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItcHJpb3JpdGllcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_sub-priorities_sub-priorities_module_ts.js.map