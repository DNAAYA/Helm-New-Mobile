"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 6636);








let LoginPage = class LoginPage {
    constructor(formBuilder, navCtrl, authServ, db, loadingController) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authServ = authServ;
        this.db = db;
        this.loadingController = loadingController;
        this.showPassword = false;
        this.passwordToggleIcon = 'eye';
        this.errorMessage = '';
        // el validation messages el betezhar fel login page
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    ngOnInit() {
        // the validations form
        this.signIn_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            ])),
        });
    }
    loginUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.authServ.loginUser(this.signIn_form.getRawValue())
                .then(res => {
                const id = res.user.uid;
                this.db.doc(`users/${id}`).valueChanges().subscribe(res => {
                    if (!res['userPassword']) {
                        this.errorMessage = "";
                        this.navCtrl.navigateForward('/create-new-password');
                    }
                    else {
                        this.errorMessage = "";
                        this.navCtrl.navigateForward('/tasks');
                    }
                });
            }, err => {
                this.errorMessage = err.message;
            });
            let loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            loading.present();
            setTimeout(() => {
                loading.dismiss();
            }, 1500);
        });
    }
    // Start New Show Password Button
    togglePassword() {
        this.showPassword = !this.showPassword;
        if (this.passwordToggleIcon == 'eye') {
            this.passwordToggleIcon = 'eye-off';
        }
        else {
            this.passwordToggleIcon = 'eye';
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Ayman Edit -->\r\n\r\n\r\n<ion-header>\r\n  <!-- <ion-toolbar color=\"primary\">\r\n    <ion-title>Sign In</ion-title>\r\n  </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <!-- <h1> SIGN IN </h1> -->\r\n<img src=\"../../assets/Helm-Consulting.png\" width=\"180\" class=\"center\">\r\n  <form class=\"form\" style=\"padding-top: 10%;\" [formGroup]=\"signIn_form\" (ngSubmit)=\"loginUser()\">\r\n\r\n    <!-- User Email -->\r\n    <ion-item>\r\n      <!--<ion-label position=\"floating\">Email</ion-label>-->\r\n      <ion-icon id=\"iconColor\" slot=\"start\" name=\"person\"></ion-icon>\r\n      <ion-input type=\"text\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <!-- User Email Error Message -->\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n        <div style=\"color: red;\" class=\"error-message\"\r\n          *ngIf=\"signIn_form.get('email').hasError(validation.type) && (signIn_form.get('email').dirty || signIn_form.get('email').touched)\">\r\n          <ion-icon name=\"alert-circle-outline\" style=\"color: red;\"></ion-icon>\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <!-- User Password -->\r\n    <ion-item>\r\n     <!--<ion-label position=\"floating\" >Password</ion-label>-->\r\n      <ion-icon id=\"iconColor\" slot=\"start\" name=\"lock-closed\"></ion-icon>\r\n      <!--<ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required placeholder=\"Password\"></ion-input>-->\r\n      <ion-input [type]=\"showPassword ? 'text' : 'password'\" formControlName=\"password\" class=\"form-controll\"\r\n      required placeholder=\"Password\"></ion-input>      <!--<ion-icon id=\"iconColor\" slot=\"end\" [name]=\"passwordToggleIcon\" (click)=\"togglePassword()\"></ion-icon>-->\r\n    </ion-item>\r\n\r\n    <!-- User Password Error Message -->\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n        <div style=\"color: red;\" class=\"error-message\"\r\n          *ngIf=\"signIn_form.get('password').hasError(validation.type) && (signIn_form.get('password').dirty || signIn_form.get('password').touched)\">\r\n          <ion-icon name=\"alert-circle-outline\" style=\"color: red;\"></ion-icon>\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n  <br/>\r\n\r\n  <!-- Buttons -->\r\n<ion-grid>\r\n   \r\n<!-- Show Password Button -->\r\n      <ion-button (click)=\"togglePassword()\" style=\"text-transform: capitalize; color: white\" expand=\"block\"class=\"ion-padding\"> \r\n        <ion-icon style=\"color: white;\" slot=\"start\" [name]=\"passwordToggleIcon\" (click)=\"togglePassword()\"></ion-icon>\r\n        Show Password \r\n      </ion-button>\r\n\r\n\r\n<!-- Sign In Button -->\r\n      <ion-button type=\"submit\"  expand=\"block\" class=\"ion-padding\">\r\n        <ion-icon style=\"color: white;\" slot=\"start\" name=\"log-in-outline\"></ion-icon>\r\n        Sign In</ion-button>\r\n      <br/>\r\n\r\n\r\n   \r\n</ion-grid>\r\n  \r\n    \r\n      \r\n    <label class=\"error-message\">\r\n      {{errorMessage}}\r\n    </label>\r\n\r\n    <br/>\r\n  \r\n    <!-- Forgot Password -->\r\n    <a style=\" text-align: center; display: block; color: white; text-decoration: none;\"  routerLink=\"/forgot-password\"> Forgot Password </a>\r\n\r\n  </form>\r\n\r\n  <!-- <button (click)=\"test()\">TEST</button> -->\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "ion-content.ion-padding {\n  --ion-background-color: #0056A4;\n  text-align: center;\n}\n\nion-item {\n  --background: white;\n  --color: black;\n}\n\nh1 {\n  color: white;\n  font-size: x-large;\n  padding-top: 22%;\n  padding-bottom: 20%;\n  text-align: center;\n}\n\n/*ion-button.submit-btn{\n    --background: #ffffff;\n    --color: #000000;\n    float: right;\n}*/\n\n.button1 {\n  float: right;\n  text-transform: uppercase;\n  color: #3C3C3B;\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7Ozs7RUFBQTs7QUFPQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUZKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50Lmlvbi1wYWRkaW5ne1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwNTZBNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAyMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKmlvbi1idXR0b24uc3VibWl0LWJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0qL1xyXG5cclxuLy8gQnV0dG9ucyBTdHlsZVxyXG4uYnV0dG9uMXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzNDM0MzQjtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map