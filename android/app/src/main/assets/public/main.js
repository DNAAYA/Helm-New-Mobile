(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 8245)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'priorities',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_priorities_priorities_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./priorities/priorities.module */ 8477)).then(m => m.PrioritiesPageModule)
    },
    {
        path: 'sub-priorities/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sub-priorities_sub-priorities_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sub-priorities/sub-priorities.module */ 1787)).then(m => m.SubPrioritiesPageModule)
    },
    {
        path: 'divisions/:type/:subID/:prID',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_divisions_divisions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./divisions/divisions.module */ 9856)).then(m => m.DivisionsPageModule)
    },
    {
        path: 'tasks',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./tasks/tasks.module */ 3684)).then(m => m.TasksPageModule)
    },
    {
        path: 'task-details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tasks_task-details_task-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tasks/task-details/task-details.module */ 5252)).then(m => m.TaskDetailsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 9549)).then(m => m.LoginPageModule)
    },
    {
        path: 'questions/:type/:divId/:subId/:prId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_questions_questions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./questions/questions.module */ 2293)).then(m => m.QuestionsPageModule),
    },
    {
        path: 'details/:qID',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_question-details_question-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./question-details/question-details.module */ 7325)).then(m => m.QuestionDetailsPageModule)
    },
    {
        path: 'question-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_question-details_question-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./question-details/question-details.module */ 7325)).then(m => m.QuestionDetailsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 6636);






let AppComponent = class AppComponent {
    constructor(authserv, router) {
        this.authserv = authserv;
        this.router = router;
    }
    ngOnInit() {
        // if(this.authserv.isLoggedIn) {
        //   this.router.navigate(['/tasks'])
        // } else {
        //   this.router.navigate(['/login'])
        // }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat */ 762);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/storage */ 9202);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/database */ 7606);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_fire_compat_firestore___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore/ */ 3059);
/* harmony import */ var _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/tasks.module */ 3684);















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuthModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__.AngularFireStorageModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__.AngularFireDatabaseModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_fire_compat_firestore___WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule,
            _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_3__.TasksPageModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6636:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);





let AuthService = class AuthService {
    constructor(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Returns true when user is looged in
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    // Store user in localStorage
    SetUserData(user) {
        const userRef = this.db.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    //login function
    loginUser(value) {
        return new Promise((resolve, reject) => {
            this.afAuth.signInWithEmailAndPassword(value.email, value.password)
                .then(res => resolve(res), err => reject(err));
        });
    }
    // el function el el user bey3mel be el enw password 
    changePass(password) {
        this.afAuth.currentUser.then(user => {
            console.log('current user', user.uid);
            user.updatePassword(password).then(() => {
                this.db.doc(`users/${user.uid}`).update({ userPassword: true });
            });
        });
    }
    //logout function
    logoutUser() {
        return new Promise((resolve, reject) => {
            if (this.afAuth.currentUser) {
                this.afAuth.signOut()
                    .then(() => {
                    console.log("LOG Out");
                    resolve('');
                }).catch((error) => {
                    reject();
                });
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 568:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/database */ 7606);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8377);





let DatabaseService = class DatabaseService {
    constructor(db, dbStore) {
        this.db = db;
        this.dbStore = dbStore;
        this.database = this.db.database.app.database('https://helm-8734b-4d96d.firebaseio.com/');
    }
    getNewTasks(userID) {
        return this.dbStore.collection('tasks').valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data.filter((task) => task.completed == false && task.selectedUser == userID)));
    }
    getSavedTasks(userID) {
        return this.dbStore.collection('tasks').valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data.filter((task) => task.completed == true && task.selectedUser == userID)));
    }
    getTasks() {
        return this.dbStore.collection('tasks').valueChanges();
    }
    getTaskDetails(taskID) {
        return this.dbStore.collection(`tasks`).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data.filter((task) => task.tid == taskID)));
    }
    getPriorities() {
        return new Promise((resolve, reject) => {
            this.database.ref('/Priorities/').on('value', val => {
                let res = val.val();
                let prioritiesList = Object.keys(res).map(k => res[k]);
                resolve(prioritiesList);
            }, reject);
        });
    }
    getPriority(key) {
        return new Promise((resolve, reject) => {
            this.database.ref(`/Priorities/${key}/`).on('value', val => {
                let res = val.val();
                resolve(res);
            }, reject);
        });
    }
    getSubPriorityWithPriorityID(priorityID) {
        let subPriorities = [];
        return new Promise((resolve, reject) => {
            this.database.ref('/SubPriorities/').on('value', val => {
                let res = val.val();
                let subPrioritiesList = Object.keys(res).map(k => res[k]);
                subPrioritiesList.forEach((subElm) => {
                    if (subElm.priority_ID == priorityID) {
                        // console.log('getSubPriorityWithPriorityID', subElm)
                        subPriorities.push(subElm);
                    }
                });
                resolve(subPriorities);
            }, reject);
        });
    }
    getDivisionWithPriorityIDAndSubIS(priorityID, subID) {
        let divisions = [];
        return new Promise((resolve, reject) => {
            this.database.ref('/Divisions/').on('value', val => {
                let res = val.val();
                let divisionList = Object.keys(res).map(k => res[k]);
                divisions = divisionList.filter(e => e.priority_ID == priorityID);
                divisionList.forEach((divElm) => {
                    if (divElm.priority_ID == priorityID && divElm.sub_ID == subID) {
                        // console.log('getSubPriorityWithPriorityID', subElm)
                        divisions.push(divElm);
                    }
                });
                resolve(divisions);
            }, reject);
        });
    }
    getDivision(divID) {
        return new Promise((resolve, reject) => {
            this.database.ref(`/Divisions/${divID}/`).on('value', (val) => {
                let res = val.val();
                resolve(res);
            }, reject);
        });
    }
    getDivisionBySubID(subID) {
        let filteredDivisions = [];
        return new Promise((resolve, reject) => {
            this.database.ref(`/Divisions/`).on('value', val => {
                let res = val.val();
                let divList = Object.keys(res).map(k => res[k]);
                filteredDivisions = divList.filter(d => d.sub_ID == subID);
                resolve(filteredDivisions);
            }, reject);
        });
    }
    getQuestionByDivID(divID) {
        return new Promise((resolve, reject) => {
            this.database.ref(`/Questions/`).on('value', val => {
                let res = val.val();
                let questionList = Object.keys(res).map(k => res[k]).filter(q => q.division_ID == divID);
                resolve(questionList);
            }, reject);
        });
    }
    getQuestionByPr_Sub_Division(priorityID, subID, divisionID) {
        let filteredQuestion = [];
        return new Promise((resolve, reject) => {
            this.database.ref(`/Questions/`).on('value', val => {
                let res = val.val();
                let questionList = Object.keys(res).map(k => res[k]);
                questionList.forEach(q => {
                    if (q.priority_ID == priorityID && q.sub_ID == subID && q.division_ID == divisionID) {
                        filteredQuestion.push(q);
                    }
                });
                resolve(filteredQuestion);
            }, reject);
        });
    }
    getQuestionByDivision(divisionID) {
        return new Promise((resolve, reject) => {
            this.database.ref(`/Questions/`).on('value', val => {
                let res = val.val();
                let questions = Object.keys(res).map(k => res[k]);
                questions.forEach(element => {
                    if (element.division_ID == divisionID) {
                        resolve(element);
                    }
                });
            }, reject);
        });
    }
    // question factory
    addQuestion(question) {
        console.log('Question ####', question);
        if (question.question) {
            this.database.ref('/Questions/').push(question).then(res => {
                console.log('Question Added successfully', res.key);
                question.question_ID = res.key;
                // set id to Priorities document
                this.updateQuestion(res.key, question);
            });
        }
        else {
            console.log('there is no ADA Number in this question');
            // alert('there is no ADA Number in this question')
        }
    }
    updateQuestion(key, question) {
        console.log('question id', key);
        console.log('question before edit', question);
        return this.database.ref(`/Questions/${key}`).set(question);
    }
    duplicateQuestion(parentID, question) {
        question.parentDiv_ID = parentID;
        this.database.ref('/duplicated-question/').push(question).then(res => {
            this.database.ref(`/duplicated-question/${res.key}/`).update({
                duplicated_ID: res.key
            });
        });
    }
    duplicateDivision(division) {
        let parentID = division.division.divison_ID;
        division.parentID = parentID;
        this.getDivision(parentID).then((div) => {
            console.log('division ', div);
            division.division = div;
            this.database.ref(`/duplicated-division/`).push(division).then(res => {
                this.database.ref(`/duplicated-division/${res.key}/`).update({
                    duplicated_ID: res.key
                });
                // duplicate question after division
                this.getQuestionByPr_Sub_Division(div.priority_ID, div.sub_ID, div.divison_ID)
                    .then((ques) => {
                    let duplicatedQuestion = {
                        questions: ques,
                        duplicated_ID: '',
                        parentDiv_ID: res.key
                    };
                    this.duplicateQuestion(res.key, duplicatedQuestion);
                });
            });
        });
    }
    // duplicated sub & duplicate division & duplicate question 
    duplicateSubPriority(subPriority) {
        this.database.ref('/duplicated-subPriority/').push(subPriority).then(res => {
            let key = res.key;
            this.database.ref(`/duplicated-subPriority/${key}/`).update({
                duplicated_ID: key
            });
            // get all divisions by sub id to copy into duplicated divisions;
            this.getDivisionBySubID(subPriority.parentSub.sub_ID).then((divs) => {
                divs.forEach((div) => {
                    let duplicateDiv = {
                        division: div,
                        duplicated_ID: '',
                        parentID: div.divison_ID,
                        title: `# ${div.division_name}`
                    };
                    this.duplicateDivision(duplicateDiv);
                });
            });
            // duplicate division after duplicate sub
        });
    }
    getDuplicatedSub(subID) {
        return new Promise((resolve, reject) => {
            this.database.ref('/duplicated-subPriority/').on('value', val => {
                let res = val.val();
                if (res) {
                    let dSubs = Object.keys(res).map(k => res[k]);
                    let duplicatedSub = dSubs.filter(e => e.parentSub.sub_ID == subID);
                    resolve(duplicatedSub);
                }
                else {
                    resolve(res);
                }
            }, reject);
        });
    }
    getDuplicatedDiv(divID) {
        return new Promise((resolve, reject) => {
            this.database.ref('/duplicated-division/').on('value', val => {
                let res = val.val();
                if (res) {
                    let dDivs = Object.keys(res).map(k => res[k]);
                    let duplicated_Divs = dDivs.filter(e => e.parentID == divID);
                    resolve(duplicated_Divs);
                }
                else {
                    resolve(res);
                }
            }, reject);
        });
    }
    getDuplicatedDivBySubID(subID) {
        return new Promise((resolve, reject) => {
            this.database.ref('/duplicated-division/').on('value', val => {
                let res = val.val();
                if (res) {
                    let dDivs = Object.keys(res).map(k => res[k]);
                    let duplicatedDiv = dDivs.filter(e => e.division.sub_ID == subID);
                    resolve(duplicatedDiv);
                }
                else {
                    resolve(res);
                }
            }, reject);
        });
    }
    getDuplicatedQuestionByDuplicatedDivision(divID) {
        return new Promise((resolve, reject) => {
            this.database.ref('/duplicated-question/').on('value', val => {
                let res = val.val();
                console.log('result', res);
                if (res) {
                    let dquestions = Object.keys(res).map(k => res[k]);
                    // console.log('duplicated questions', dquestions);
                    let questionList = dquestions.filter(e => e.parentDiv_ID == divID);
                    console.log('questionList', questionList);
                    resolve(questionList[0].questions);
                }
                else {
                    resolve(res);
                }
            }, reject);
        });
    }
    sendAnswer(questionID, question) {
        console.log('update answer: question id', questionID);
        console.log('update answer: question ', question);
        this.database.ref(`/Questions/${questionID}/`).update({ answer: question.answer }).then((res) => {
            console.log('update answer success >>>');
        });
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ 3320:
/*!********************************************************!*\
  !*** ./src/app/tasks/new-tasks/new-tasks.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTasksComponent": () => (/* binding */ NewTasksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_tasks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-tasks.component.html */ 5409);
/* harmony import */ var _new_tasks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-tasks.component.scss */ 378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 6636);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 568);








let NewTasksComponent = class NewTasksComponent {
    constructor(dbServices, ngAuth, authService, router) {
        this.dbServices = dbServices;
        this.ngAuth = ngAuth;
        this.authService = authService;
        this.router = router;
        this.taskList = [];
    }
    ngOnInit() {
        this.ngAuth.onAuthStateChanged(user => {
            if (user === null) {
                this.router.navigate(['/sign-in']);
            }
            else {
                this.userID = user.uid;
                console.log('user id', this.userID);
                this.dbServices.getNewTasks('mKdeGymteMR2K7jn85bQ9zsPqf53').subscribe((tasks) => {
                    this.taskList = tasks;
                    console.log('task list', this.taskList);
                });
            }
        });
    }
};
NewTasksComponent.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
NewTasksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-new-tasks',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_tasks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_tasks_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewTasksComponent);



/***/ }),

/***/ 6985:
/*!************************************************************!*\
  !*** ./src/app/tasks/saved-tasks/saved-tasks.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedTasksComponent": () => (/* binding */ SavedTasksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_saved_tasks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./saved-tasks.component.html */ 1020);
/* harmony import */ var _saved_tasks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-tasks.component.scss */ 4902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ 568);







let SavedTasksComponent = class SavedTasksComponent {
    constructor(ngAuth, router, dbService) {
        this.ngAuth = ngAuth;
        this.router = router;
        this.dbService = dbService;
    }
    ngOnInit() {
        this.ngAuth.onAuthStateChanged(user => {
            if (user === null) {
                this.router.navigate(['/sign-in']);
            }
            else {
                this.userID = user.uid;
                console.log('user id', this.userID);
                this.dbService.getSavedTasks('mKdeGymteMR2K7jn85bQ9zsPqf53').subscribe((tasks) => {
                    this.taskList = tasks;
                    console.log('task list', this.taskList);
                });
            }
        });
    }
};
SavedTasksComponent.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
SavedTasksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-saved-tasks',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_saved_tasks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_saved_tasks_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SavedTasksComponent);



/***/ }),

/***/ 1958:
/*!***********************************************!*\
  !*** ./src/app/tasks/tasks-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksPageRoutingModule": () => (/* binding */ TasksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _new_tasks_new_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-tasks/new-tasks.component */ 3320);
/* harmony import */ var _saved_tasks_saved_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-tasks/saved-tasks.component */ 6985);
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.page */ 9587);






const routes = [
    {
        path: '',
        component: _tasks_page__WEBPACK_IMPORTED_MODULE_2__.TasksPage,
        children: [
            {
                path: 'new-tasks',
                component: _new_tasks_new_tasks_component__WEBPACK_IMPORTED_MODULE_0__.NewTasksComponent
            },
            {
                path: 'saved-tasks',
                component: _saved_tasks_saved_tasks_component__WEBPACK_IMPORTED_MODULE_1__.SavedTasksComponent
            }
        ]
    },
    {
        path: 'task-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tasks_task-details_task-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./task-details/task-details.module */ 5252)).then(m => m.TaskDetailsPageModule)
    }
];
let TasksPageRoutingModule = class TasksPageRoutingModule {
};
TasksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], TasksPageRoutingModule);



/***/ }),

/***/ 3684:
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksPageModule": () => (/* binding */ TasksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-routing.module */ 1958);
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.page */ 9587);
/* harmony import */ var _new_tasks_new_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-tasks/new-tasks.component */ 3320);
/* harmony import */ var _saved_tasks_saved_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saved-tasks/saved-tasks.component */ 6985);









let TasksPageModule = class TasksPageModule {
};
TasksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _tasks_routing_module__WEBPACK_IMPORTED_MODULE_0__.TasksPageRoutingModule
        ],
        declarations: [
            _tasks_page__WEBPACK_IMPORTED_MODULE_1__.TasksPage,
            _new_tasks_new_tasks_component__WEBPACK_IMPORTED_MODULE_2__.NewTasksComponent,
            _saved_tasks_saved_tasks_component__WEBPACK_IMPORTED_MODULE_3__.SavedTasksComponent
        ]
    })
], TasksPageModule);



/***/ }),

/***/ 9587:
/*!*************************************!*\
  !*** ./src/app/tasks/tasks.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksPage": () => (/* binding */ TasksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tasks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tasks.page.html */ 6485);
/* harmony import */ var _tasks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.page.scss */ 1977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let TasksPage = class TasksPage {
    constructor() { }
    ngOnInit() {
    }
};
TasksPage.ctorParameters = () => [];
TasksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tasks',
        template: _D_myProjects_Helm_New_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tasks_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tasks_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TasksPage);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBBjQJUHIgN3XYY-kBCzOO8CbFYVFhlHIM",
        authDomain: "helm-8734b.firebaseapp.com",
        databaseURL: "https://helm-8734b.firebaseio.com",
        projectId: "helm-8734b",
        storageBucket: "helm-8734b.appspot.com",
        messagingSenderId: "758507429266",
        appId: "1:758507429266:web:7485783bbc27dfb96cf54b",
        measurementId: "G-KE7BHEEYVM"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		864,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 5409:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tasks/new-tasks/new-tasks.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- List of Text Items -->\r\n\r\n\r\n<ion-list>\r\n\r\n\r\n  <ion-item *ngFor=\"let task of taskList\">\r\n    <ion-label>{{task.title}}</ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ 1020:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tasks/saved-tasks/saved-tasks.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <div *ngFor=\"let task of taskList\" >\r\n  \r\n    <ion-card class=\"card-style\" [routerLink]=\"'/task-details/'+task.tid\">\r\n      \r\n      <ion-card-header style=\"color: black;\">\r\n        {{  task.title  }}\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-buttons style=\"display: flow-root;\" icon-only item-end clear [routerLink]=\"'/task-details/'+task.tid\">\r\n          <ion-icon style=\"color: #3C3C3B; float: right;\" name=\"chevron-forward-outline\">\r\n          </ion-icon>\r\n        </ion-buttons>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div> \r\n</ion-content>\r\n");

/***/ }),

/***/ 6485:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tasks/tasks.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>tasks</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"new-tasks\">\r\n        <ion-icon name=\"list-circle\"></ion-icon>\r\n        <ion-label>New Tasks</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"saved-tasks\">\r\n        <ion-icon name=\"list-circle\"></ion-icon>\r\n        <ion-label>Saved Tasks</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 378:
/*!**********************************************************!*\
  !*** ./src/app/tasks/new-tasks/new-tasks.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctdGFza3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4902:
/*!**************************************************************!*\
  !*** ./src/app/tasks/saved-tasks/saved-tasks.component.scss ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlZC10YXNrcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 1977:
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.page.scss ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy5wYWdlLnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map