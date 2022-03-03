"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tasks_task-details_task-details_module_ts"],{

/***/ 9390:
/*!*******************************************************************!*\
  !*** ./src/app/tasks/task-details/task-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDetailsPageRoutingModule": () => (/* binding */ TaskDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _task_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-details.page */ 5728);




const routes = [
    {
        path: '',
        component: _task_details_page__WEBPACK_IMPORTED_MODULE_0__.TaskDetailsPage
    }
];
let TaskDetailsPageRoutingModule = class TaskDetailsPageRoutingModule {
};
TaskDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TaskDetailsPageRoutingModule);



/***/ }),

/***/ 5252:
/*!***********************************************************!*\
  !*** ./src/app/tasks/task-details/task-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDetailsPageModule": () => (/* binding */ TaskDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _task_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-details-routing.module */ 9390);
/* harmony import */ var _task_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-details.page */ 5728);







let TaskDetailsPageModule = class TaskDetailsPageModule {
};
TaskDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _task_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaskDetailsPageRoutingModule
        ],
        declarations: [_task_details_page__WEBPACK_IMPORTED_MODULE_1__.TaskDetailsPage]
    })
], TaskDetailsPageModule);



/***/ }),

/***/ 5728:
/*!*********************************************************!*\
  !*** ./src/app/tasks/task-details/task-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDetailsPage": () => (/* binding */ TaskDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_task_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./task-details.page.html */ 6161);
/* harmony import */ var _task_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-details.page.scss */ 8530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ 568);






let TaskDetailsPage = class TaskDetailsPage {
    constructor(activatedRoute, dbService) {
        this.activatedRoute = activatedRoute;
        this.dbService = dbService;
    }
    ngOnInit() {
        this.taskID = this.activatedRoute.snapshot.params['id'];
        console.log('task id', this.taskID);
        this.dbService.getTaskDetails(this.taskID).subscribe(task => {
            console.log('task details', task);
            this.taskDetails = task;
        });
    }
};
TaskDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
TaskDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-task-details',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_task_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_task_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TaskDetailsPage);



/***/ }),

/***/ 6161:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tasks/task-details/task-details.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Task Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor=\"let task of taskDetails\">\r\n    <div>\r\n      <h4 style=\"padding-left: 3%;\"> {{task.title}} </h4>\r\n    </div>\r\n    <ion-card class=\"card-style\" id=\"cardSpace\">\r\n      <ion-card-content style=\"color: #3C3C3B;\">\r\n        <h3> Venue Name: {{task.venueName}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"text\" placeholder=\"Edit Venue Name here\">\r\n        </ion-input>\r\n\r\n        <h3> Category: {{task.category}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"text\" placeholder=\"Edit Category here\">\r\n        </ion-input>\r\n\r\n        <h3> Address: {{task.address}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"text\" placeholder=\"Edit Address here\">\r\n        </ion-input>\r\n\r\n        <h3> Contact Name: {{task.contactName}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"text\"\r\n          placeholder=\"Edit Contact Name here\">\r\n        </ion-input>\r\n\r\n        <h3> Contact Number: {{task.contactNumber}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n          <ion-buttons style=\"display: inline;\" slot=\"\">\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"call\"></ion-icon>\r\n          </ion-buttons>\r\n\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"\" placeholder=\"Edit Contact Number here\">\r\n\r\n        </ion-input>\r\n\r\n\r\n        <h3> Surface Area: {{task.surfaceArea}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"text\"\r\n          placeholder=\"Edit Surface Area here\">\r\n        </ion-input>\r\n\r\n        <h3> Number Of Floors: {{task.numberOfFloors}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"\"\r\n          placeholder=\"Edit Number Of Floors here\">\r\n        </ion-input>\r\n\r\n        <h3> Number Of Bathrooms: {{task.numberOfBathrooms}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"text\"\r\n          placeholder=\"Edit Number Of Bathrooms here\">\r\n        </ion-input>\r\n\r\n        <h3> Infrastructure Type: {{task.infrastructureType}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"text\"\r\n          placeholder=\"Edit Infrastructure Type here\">\r\n        </ion-input>\r\n\r\n        <h3> Audit Date: {{task.auditDate}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"\" placeholder=\"Edit Audit Date here\">\r\n        </ion-input>\r\n\r\n        <h3> Assessment visit's duration: {{task.timeSlot}}\r\n          <ion-buttons style=\"display: inline;\" icon-only item-end clear>\r\n            <ion-icon slot=\"end\" style=\"color: #3C3C3B; float: right;\" name=\"create-outline\"></ion-icon>\r\n          </ion-buttons>\r\n        </h3>\r\n        <ion-input class=\"border\" style=\"font-weight: lighter;\" required type=\"number\"\r\n          placeholder=\"Edit Time Slot here\">\r\n        </ion-input>\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <div>\r\n      <div>\r\n        <!-- <ion-button class=\"button\"  style=\"float: left;\" (click)=\"clearStorage()\"  > Clear Storage </ion-button> -->\r\n        <ion-button class=\"button\" *ngIf=\"task.status === true\" routerLink=\"/priorities\" style=\"float: left;\"> start\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 8530:
/*!***********************************************************!*\
  !*** ./src/app/tasks/task-details/task-details.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tasks_task-details_task-details_module_ts.js.map