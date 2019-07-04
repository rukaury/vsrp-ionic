webpackJsonp([0],{

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.apiUrl = 'https://vsrpapi.herokuapp.com/v1';
        //console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.login = function (username, password) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/auth/login', JSON.stringify({ username: username, password: password }), _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.register = function (username, password, f_name, l_name, school_id) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/auth/register', JSON.stringify({ username: username, password: password, first_name: f_name, last_name: l_name, school_id: school_id }), _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.logout = function (token) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/auth/logout', JSON.stringify({}), _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getRooms = function (token) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/rooms', _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getUsers = function () {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/users', _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getCourses = function (school_id) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/schools/' + school_id + '/courses', _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getRoomInfo = function (token, room_id) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/rooms/' + room_id, _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getQuestionInfo = function (token, room_id, question_id) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/rooms/' + room_id + '/questions/' + question_id, _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.addRoom = function (room_name, course_code, token) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/rooms', JSON.stringify({ room: { name: room_name, course_code: course_code } }), _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.addQuestion = function (room_id, title, text, is_mcq, answers, token) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/rooms/' + room_id + '/questions', JSON.stringify({ question: { title: title, text: text, is_mcq: is_mcq, answers: answers } }), _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.inviteUsers = function (token, room_id, users) {
        var _this = this;
        this.reqOpts = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/rooms/' + room_id + '/invite', JSON.stringify({ users: users }), _this.reqOpts).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(storage, globalVars, rest, navCtrl, loadingCtrl, alert) {
        this.storage = storage;
        this.globalVars = globalVars;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.user = {};
        this.school_id = "90cb9867c2894786bfa4dfc8a6884c1a";
        this.dataRetrieved = false;
        this.show_login = true;
        this.show_registration = false;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.rest.login(this.username, this.password).then(function (data) {
            _this.jsonData = data;
            _this.user.username = _this.username;
            _this.user.password = _this.password;
            _this.user.token = _this.jsonData.auth_token;
            _this.storage.addUser(_this.user).then(function (val) {
                console.log("Logged in!");
            }).catch(function (err) {
                console.log(err);
            });
            _this.dataRetrieved = true;
            _this.goToHomePage();
        }).catch(function (err) {
            switch (err.status) {
                case 401:
                    _this.presentAlert('Login', 'User does not exist or password is incorrect');
                    break;
                default:
                    _this.presentAlert('Login', 'Sorry, an error has occured!');
                    break;
            }
        });
        loading.dismiss();
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.rest.register(this.username, this.password, this.f_name, this.l_name, this.school_id).then(function (data) {
            _this.jsonData = data;
            _this.user.username = _this.username;
            _this.user.password = _this.password;
            _this.user.token = _this.jsonData.auth_token;
            _this.storage.addUser(_this.user).then(function (val) {
                console.log("Registered!");
            }).catch(function (err) {
                console.log(err);
            });
            _this.dataRetrieved = true;
            _this.goToHomePage();
        }).catch(function (err) {
            switch (err.status) {
                case 400:
                    _this.presentAlert('Login', 'User with username ' + _this.username + ' already exists!');
                    break;
                default:
                    _this.presentAlert('Login', 'Sorry, an error has occured!');
                    break;
            }
        });
        loading.dismiss();
    };
    LoginPage.prototype.goToHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.presentAlert = function (title, message) {
        var alert = this.alert.create({
            title: title,
            message: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    LoginPage.prototype.showLogin = function (check) {
        this.show_login = check;
        this.show_registration = !check;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\login\login.html"*/'<ion-content>\n\n\n\n    <ion-card class="container" *ngIf="!this.globalVars.getIsConnected()">\n\n        <ion-card-header>Offline</ion-card-header>\n\n            <ion-card-content padding>\n\n                <button class=\'btn btn-primary\' (click)="this.globalVars.open(\'wifi\')">Open Wifi settings</button>\n\n            </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div *ngIf="this.globalVars.getIsConnected()" class="container">    \n\n        <div>\n\n            <ion-img class="app-icon" width="150" height="100" src="../../assets/imgs/app_icon.png"></ion-img>\n\n            <p class="white-text app-name-text">Virtual Practice Room</p>\n\n        </div>\n\n\n\n        <div class="row" *ngIf="this.show_login">\n\n            <form class="col s12">\n\n                    <p class="white-text credentials-text">Please enter your credentials.</p>\n\n                <div class="row" margin>\n\n                    <div class="input-group input-group-lg">\n\n                        <input class="form-control" [(ngModel)]="username" placeholder="Username" id="username" type="text" name="username" required>\n\n                    </div>\n\n                    <div class="input-group input-group-lg">\n\n                        <input class="form-control" [(ngModel)]="password" placeholder="Password" id="password" type="password" name="password" required>\n\n                    </div>\n\n                </div>\n\n                <div class="row" margin>\n\n                    <div class="col s12">\n\n                        <button class="btn btn-lg login-btn" type="submit" name="action" (click)="login()">Login</button>\n\n                    </div>\n\n                </div>\n\n                <div class="row">\n\n                    <p class="col s12 white-text">Don\'t have an account? <button (click)="showLogin(false)" style="color: white;background: #f26e40;border-bottom: 1px solid white">Register</button></p>\n\n                </div>\n\n            </form>\n\n        </div>\n\n\n\n        <div class="row" *ngIf="this.show_registration">\n\n            <form class="col s12">\n\n                <p class="white-text credentials-text">Tell us about yourself.</p>\n\n                <ion-slides pager>\n\n                    <ion-slide>\n\n                        <div class="row" padding>\n\n                            <div class="input-group input-group-lg">\n\n                                <input class="form-control" [(ngModel)]="username" placeholder="Username" id="username" type="text" name="username">\n\n                            </div>\n\n                            \n\n                            <div class="input-group input-group-lg">\n\n                                <input class="form-control" [(ngModel)]="password" placeholder="Password" id="password" type="password" name="password">\n\n                            </div>\n\n                        \n\n                            <div class="input-group input-group-lg">\n\n                                <input class="form-control" [(ngModel)]="conf_password" placeholder="Confirm password" id="conf_password" type="password" name="conf_password">\n\n                            </div>\n\n                        </div>\n\n                    </ion-slide>\n\n\n\n                    <ion-slide>\n\n                        <div class="row" padding>\n\n                            <div class="input-group input-group-lg">\n\n                                <input class="form-control" [(ngModel)]="f_name" placeholder="First Name" id="f_name" type="text" name="f_name">\n\n                            </div>\n\n                            <div class="input-group input-group-lg">\n\n                                <input class="form-control" [(ngModel)]="l_name" placeholder="Last Name" id="l_name" type="text" name="l_name">\n\n                            </div>\n\n                        </div>\n\n                    </ion-slide>\n\n                </ion-slides>\n\n                \n\n                <div class="row" margin>\n\n                    <div class="col s12">\n\n                        <button class="btn btn-lg login-btn" type="submit" name="register" (click)="register()">Sign Up</button>\n\n                    </div>\n\n                </div>\n\n                <div class="row">\n\n                    <p class="col s12 white-text">Have an account? <button (click)="showLogin(true)" style="color: white;background: #f26e40;border-bottom: 1px solid white"> Login</button></p>\n\n                </div>\n\n            </form>\n\n        </div>\n\n        \n\n        <div class="row bottom-view">\n\n            <p class="col s12 white-text">VPR Copyright © 2019</p>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_answer__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionPage = /** @class */ (function () {
    function QuestionPage(storage, restProvider, navParams, globalVars, navCtrl, loadingCtrl, cd, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.restProvider = restProvider;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cd = cd;
        this.toastCtrl = toastCtrl;
        this.answer_input = "";
        this.answer = "";
        this.token = ';';
        this.dataRetrieved = false;
        this.show_response = false;
        this.disable_answers = false;
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.room_id = navParams.get('room_id');
        this.question_id = navParams.get('question_id');
        this.storage.getUser().then(function (val) {
            _this.token = val.token;
            _this.getQuestionInfo();
        });
        loading.dismiss();
    }
    QuestionPage.prototype.getQuestionInfo = function () {
        var _this = this;
        this.restProvider.getQuestionInfo(this.token, this.room_id, this.question_id)
            .then(function (data) {
            _this.jsonData = data;
            _this.title = _this.jsonData.title;
            _this.text = _this.jsonData.text;
            _this.is_mcq = _this.jsonData.is_mcq;
            if (_this.is_mcq) {
                _this.allAnswers = new Array(_this.jsonData.answers.length);
                for (var i = 0; i < _this.jsonData.answers.length; i++) {
                    var an_answer = new __WEBPACK_IMPORTED_MODULE_3__Models_answer__["a" /* Answer */](_this.jsonData.answers[i].uuid, _this.jsonData.answers[i].text, _this.jsonData.answers[i].correct);
                    _this.answer = an_answer.getIsCorrect() ? an_answer.getText() : _this.answer;
                    _this.allAnswers[i] = an_answer;
                }
            }
            _this.dataRetrieved = true;
        });
    };
    QuestionPage.prototype.submitAnswer = function () {
        if (!this.is_mcq) {
            this.presentToast('Question was submited successfully', 5000, 'middle');
            this.navCtrl.pop();
        }
        else if (this.is_mcq && this.answer_input != "") {
            this.show_response = true;
            this.disable_answers = true;
        }
        else {
            this.presentToast('Select an answer', 3000, 'top');
        }
    };
    QuestionPage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], QuestionPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], QuestionPage.prototype, "content", void 0);
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\question\question.html"*/'<ion-header class="page-header">\n    <ion-navbar>\n      <ion-title>{{title}}</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon style="color:#f26e40" name="star-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <ion-card *ngIf="!this.globalVars.getIsConnected()" margin>\n      <ion-card-header>Offline</ion-card-header>\n      <ion-card-content padding>\n        <button class=\'btn btn-primary\' (click)="this.globalVars.open(\'wifi\')">Open Wifi settings</button>\n      </ion-card-content>\n    </ion-card>\n  \n    <div *ngIf="this.globalVars.getIsConnected()">\n      <div *ngIf="this.show_response" [ngClass]="(this.answer == this.answer_input ? \'success-msg correct-answer\': \'success-msg wrong-answer\')" padding>\n        <p *ngIf="this.answer == this.answer_input">Your answer is correct!</p>\n        <p *ngIf="this.answer != this.answer_input">Your answer is wrong!</p>\n      </div>\n      <h3 margin>{{text}}</h3>\n      <div *ngIf="this.is_mcq; else notMcq" margin>\n        <ion-list radio-group [(ngModel)]="answer_input">\n          <ion-list-header>\n            Answers\n          </ion-list-header>\n          <ion-item *ngFor="let a of allAnswers; let j = index">\n            <ion-label>{{a.getText()}}</ion-label>\n            <ion-radio [disabled]="this.disable_answers" color="main" [value]="a.getText()"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <ng-template #notMcq>\n        <div padding>\n          <ion-label color="main" stacked>Answer</ion-label>\n          <div class="input-group input-group-lg">\n              <ion-textarea name="answer_input" [(ngModel)]="answer_input" placeholder="Type your answer here ..." rows="5" style="border:dotted 2px #f26e40;"></ion-textarea>\n          </div>\n        </div>\n      </ng-template>\n      \n      <div class="row bottom-view" margin>\n          <div class="col s12">\n              <button class="add_btn" type="button" name="submit" (click)="submitAnswer()" [disabled]="this.disable_answers">Submit</button>\n          </div>\n      </div>\n    </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\question\question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_room_room__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddQuestionPage = /** @class */ (function () {
    function AddQuestionPage(loadingCtrl, viewCtrl, restProvider, navCtrl, navParams, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.num_of_answers = 'select';
        this.show_button = false;
        this.show_select_num = false;
        this.disable_submit_btn = true;
        this.token = navParams.get('token');
        this.room_id = navParams.get('room_id');
        this.room_name = navParams.get('room_name');
        this.answers = [];
    }
    AddQuestionPage.prototype.dismissModal = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.viewCtrl.dismiss({
            'dismissed': true
        });
    };
    AddQuestionPage.prototype.addQuestion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.restProvider.addQuestion(this.room_id, this.title, this.text, (this.is_mcq == "Yes" ? true : false), this.answers, this.token).then(function () {
            _this.dataRetrieved = true;
            _this.goToRoomPage(_this.room_id, _this.room_name);
        }).catch(function (err) {
            console.log(err);
        });
        loading.dismiss();
    };
    AddQuestionPage.prototype.goToRoomPage = function (room_id, name) {
        room_id = room_id || "";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_room_room__["a" /* RoomPage */], {
            room_id: room_id, roomName: name
        });
    };
    AddQuestionPage.prototype.onQuestionTypeClick = function (val) {
        this.show_select_num = (val == "Yes") ? true : false;
        this.disable_submit_btn = true;
        if (!(val == "Yes")) {
            this.show_button = false;
            this.answers = [];
            this.disable_submit_btn = false;
        }
    };
    AddQuestionPage.prototype.onSelectNumOfAnswers = function (val) {
        this.show_button = (val == "Yes" && !(this.num_of_answers == "select")) ? true : false;
    };
    AddQuestionPage.prototype.addAnswersPrompt = function () {
        var _this = this;
        var inputs = [];
        for (var i = 1; i <= +this.num_of_answers; i++) {
            var answer = { name: "ans_" + i, placeholder: i + ". " + (i == 1 ? "First answer..." : (i == 2 ? "Second answer..." : (i == 3 ? "Third answer" : (i == 4 ? "Fourth answer" : "Fifth answer")))) };
            inputs[i - 1] = answer;
        }
        var prompt = this.alertCtrl.create({
            title: 'Answers',
            message: "Add your MCQ answers",
            inputs: inputs,
            cssClass: 'buttonCss',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        for (var i = 1; i <= inputs.length; i++) {
                            _this.answers.push({ text: (i == 1 ? data.ans_1 : (i == 2 ? data.ans_2 : (i == 3 ? data.ans_3 : (i == 4 ? data.ans_4 : data.ans_5)))), correct: false });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AddQuestionPage.prototype.selectAnswer = function (num) {
        var elems = document.getElementsByClassName('orange-text');
        if (elems.length > 0) {
            for (var i = 0; i < elems.length; i++) {
                elems.item(i).removeAttribute('class');
                this.answers[i].correct = false;
            }
        }
        this.answers[num].correct = true;
        document.getElementById('answer_' + (num + 1)).setAttribute('class', 'orange-text');
        this.disable_submit_btn = false;
    };
    AddQuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\question\add-question.html"*/'<ion-header class="page-header">\n\n    <ion-navbar>\n\n        <ion-buttons start>\n\n            <button (click)="dismissModal()" style="color:#f26e40;background: #fff">Cancel</button>\n\n        </ion-buttons>\n\n        <ion-title>Add Question</ion-title>\n\n        \n\n        <ion-buttons end>\n\n        <button ion-button icon-only [disabled]="disable_submit_btn" (click)="addQuestion()">\n\n            <ion-icon color="main" name="checkmark-circle-outline"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <div margin>\n\n        <ion-label color="main" stacked>Question title</ion-label>\n\n        <div class="input-group input-group-lg">\n\n            <input class=\'text_input\' [(ngModel)]="title" placeholder="Enter question title" id="title" type="text" name="title">\n\n        </div>\n\n        <ion-label color="main" stacked>Question text</ion-label>\n\n        <div class="input-group input-group-lg">\n\n            <ion-textarea placeholder="Type your question here ..." rows="3" [(ngModel)]="text" name="text"></ion-textarea>\n\n        </div>\n\n        <ion-label color="main" stacked>Question type</ion-label>\n\n        <div class="input-group input-group-lg">\n\n            <ion-list radio-group [(ngModel)]="is_mcq" style="width:100%" no-lines>\n\n            \n\n                <ion-item>\n\n                    <ion-label>MCQ</ion-label>\n\n                    <ion-radio value="Yes" color="main" (ionSelect)="onQuestionTypeClick(\'Yes\')"></ion-radio>\n\n                </ion-item>\n\n            \n\n                <ion-item>\n\n                    <ion-label>Text answer</ion-label>\n\n                    <ion-radio checked="true" value="No" color="main" (ionSelect)="onQuestionTypeClick(\'No\')"></ion-radio>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n        <div *ngIf="this.show_select_num" class="input-group input-group-lg">\n\n            <ion-label color="main"># of Answers</ion-label>\n\n            <ion-select [(ngModel)]="num_of_answers" (ionChange)="onSelectNumOfAnswers(\'Yes\')">\n\n                <ion-option value="select">Pick a number</ion-option>\n\n                <ion-option value="1">1</ion-option>\n\n                <ion-option value="2">2</ion-option>\n\n                <ion-option value="3">3</ion-option>\n\n                <ion-option value="4">4</ion-option>\n\n                <ion-option value="5">5</ion-option>\n\n            </ion-select>\n\n        </div>\n\n        <div *ngIf="this.answers.length > 0">\n\n            <p *ngFor="let a of answers; let i = index" (click)="selectAnswer(i)" attr.id="answer_{{i+1}}">{{i+1}} . {{a.text}}</p>\n\n        </div>\n\n        <button *ngIf="this.show_button" class="add_btn" (click)="addAnswersPrompt()">ADD ANSWERS</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\question\add-question.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddQuestionPage);
    return AddQuestionPage;
}());

//# sourceMappingURL=add_questions.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_room_room__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InviteUserPage = /** @class */ (function () {
    function InviteUserPage(loadingCtrl, viewCtrl, restProvider, navCtrl, navParams, alert, globalVars, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.globalVars = globalVars;
        this.toastCtrl = toastCtrl;
        this.disable_submit_btn = true;
        this.invites = [];
        this.dataRetrieved = false;
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.getUsers();
        this.token = navParams.get('token');
        this.room_id = navParams.get('room_id');
        loading.dismiss();
    }
    InviteUserPage.prototype.dismissModal = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.viewCtrl.dismiss({
            'dismissed': true
        });
    };
    InviteUserPage.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers().then(function (data) {
            _this.jsonData = data;
            _this.users = new Array(_this.jsonData.users.length);
            for (var i = 0; i < _this.jsonData.users.length; i++) {
                _this.users[i] = _this.jsonData.users[i];
            }
            _this.dataRetrieved = true;
        });
    };
    InviteUserPage.prototype.inviteUsers = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.restProvider.inviteUsers(this.token, this.room_id, this.invites).then(function () {
            _this.dataRetrieved = true;
            _this.presentToast('Added users successfully!', 4000, 'top');
            _this.dismissModal();
        }).catch(function (err) {
            if (err.status == 403) {
                _this.presentAlert('Invite users', 'Please contact the room administrator to add users!');
            }
            else {
                _this.presentAlert('Invite users', 'An error has occured, try again!');
                _this.dismissModal();
            }
        });
        loading.dismiss();
    };
    InviteUserPage.prototype.goToRoomPage = function (room_id, name) {
        room_id = room_id || "";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_room_room__["a" /* RoomPage */], {
            room_id: room_id, roomName: name
        });
    };
    InviteUserPage.prototype.addUser = function (username) {
        var elem = document.getElementById(username);
        var style = elem.getAttribute('style');
        if (style) {
            elem.removeAttribute('style');
            var index = this.invites.indexOf(username);
            if (index !== -1) {
                this.invites.splice(index, 1);
            }
        }
        else {
            elem.setAttribute('style', 'color:#f26e40');
            this.invites.push(username);
        }
        this.disable_submit_btn = this.invites.length == 0 ? true : false;
    };
    InviteUserPage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    InviteUserPage.prototype.presentAlert = function (title, message) {
        var alert = this.alert.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    cssClass: 'alert-submit-btn'
                }
            ]
        });
        alert.present();
    };
    InviteUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\home\invite_user.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons start>\n\n            <button (click)="dismissModal()" style="color:#f26e40;background: #fff">Cancel</button>\n\n        </ion-buttons>\n\n        <ion-title center text-center>Invite Users</ion-title>\n\n        <ion-buttons end *ngIf="this.globalVars.getIsConnected()">\n\n        <button ion-button\n\n                (click)="inviteUsers()" [disabled]="disable_submit_btn" color=\'main\'><ion-icon\n\n                name="send"></ion-icon></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    \n\n    <ion-card *ngIf="!this.globalVars.getIsConnected()">\n\n        <ion-card-header>Offline</ion-card-header>\n\n        <ion-card-content padding>\n\n        <button class=\'btn btn-primary\' (click)="this.globalVars.open(\'wifi\')">Open Wifi settings</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <div *ngIf="this.globalVars.getIsConnected()">\n\n        <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n\n    \n\n        <ion-list radio-group *ngIf="this.dataRetrieved; else noShow">\n\n    \n\n        <ion-list-header>\n\n            Users \n\n        </ion-list-header>\n\n    \n\n        <ion-item *ngFor="let username of users | search : terms" (click)="addUser(username)" [id]="username">\n\n            <ion-icon name="contact" item-start></ion-icon>\n\n            <h1>{{username}}</h1>\n\n        </ion-item>\n\n    \n\n        </ion-list>\n\n    \n\n        <ng-template #noShow>\n\n        <ion-card padding>\n\n            <h1>No users are available.</h1>\n\n        </ion-card>\n\n        </ng-template>\n\n    </div>\n\n    \n\n    <ion-fab right bottom margin>\n\n        <button ion-fab (click)="inviteUsers()" color=\'main\' [disabled]="disable_submit_btn"><ion-icon name="send"></ion-icon></button>\n\n    </ion-fab>\n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\home\invite_user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], InviteUserPage);
    return InviteUserPage;
}());

//# sourceMappingURL=invite_user.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_room_room__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddRoomPage = /** @class */ (function () {
    function AddRoomPage(loadingCtrl, viewCtrl, restProvider, navCtrl, navParams, alert) {
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.room_name = "";
        this.course = "";
        this.disable_submit_btn = true;
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.token = this.navParams.get('token');
        this.getCourses('90cb9867c2894786bfa4dfc8a6884c1a');
        loading.dismiss();
    }
    AddRoomPage.prototype.dismissModal = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.viewCtrl.dismiss({
            'dismissed': true
        });
    };
    AddRoomPage.prototype.addRoom = function () {
        var _this = this;
        if (this.room_name == "" || this.course == "") {
            this.presentAlert('Add Room', "Some room information are missing!");
            return;
        }
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.restProvider.addRoom(this.room_name, this.course, this.token).then(function (data) {
            var jsonData = data;
            var room_id = jsonData.room.room_id;
            _this.dataRetrieved = true;
            _this.goToRoomPage(room_id, _this.room_name);
        }).catch(function (err) {
            console.log("Error!");
        });
        loading.dismiss();
    };
    AddRoomPage.prototype.getCourses = function (school_id) {
        var _this = this;
        this.restProvider.getCourses(school_id).then(function (data) {
            _this.jsonData = data;
            _this.courses = new Array(_this.jsonData.courses.length);
            for (var i = 0; i < _this.jsonData.courses.length; i++) {
                _this.courses[i] = _this.jsonData.courses[i];
            }
            _this.dataRetrieved = true;
        });
    };
    AddRoomPage.prototype.goToRoomPage = function (room_id, name) {
        room_id = room_id || "";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_room_room__["a" /* RoomPage */], {
            room_id: room_id, roomName: name
        });
    };
    AddRoomPage.prototype.disableSubmitBtn = function () {
        this.disable_submit_btn = (this.room_name == "" || this.course == "") ? true : false;
    };
    AddRoomPage.prototype.presentAlert = function (title, message) {
        var alert = this.alert.create({
            title: title,
            message: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    AddRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\home\add_room.html"*/'<ion-header class="page-header">\n\n    <ion-navbar>\n\n        <ion-buttons start>\n\n            <button (click)="dismissModal()" style="color:#f26e40;background: #fff">Cancel</button>\n\n        </ion-buttons>\n\n        <ion-title>Add room</ion-title>\n\n        \n\n        <ion-buttons end>\n\n        <button ion-button icon-only [disabled]="disable_submit_btn">\n\n            <ion-icon style="color:#f26e40" name="checkmark-circle-outline"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div margin>\n\n        <div class="input-group input-group-lg">\n\n            <input class=\'text_input\' [(ngModel)]="room_name" placeholder="Enter room name" id="room_name" type="text" name="room_name" (ionChange)="disableSubmitBtn()">\n\n        </div>\n\n        <ion-label>Course</ion-label>\n\n        <ion-list radio-group [(ngModel)]="course">\n\n            <ion-item *ngFor="let course of courses">\n\n                <ion-label>{{course.code}}</ion-label>\n\n                <ion-radio color="main" [value]="course.code"></ion-radio>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button class="add_btn" ion-button (click)="addRoom()">ADD ROOM</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\home\add_room.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddRoomPage);
    return AddRoomPage;
}());

//# sourceMappingURL=add_room.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage() {
        this.test = "";
        this.test = "<h1>Test</h1>";
    }
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\test\test.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content>\n  <div [innerHTML]="test">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\test\test.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_qrcode2__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_open_native_settings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_search_search__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_global_vars_global_vars__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_test_test__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_safe_html_safe_html__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_room_room__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_question_question__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_storage_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_add_room__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_add_questions__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_invite_user__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_safe_html_safe_html__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_24__components_add_room__["a" /* AddRoomPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_add_questions__["a" /* AddQuestionPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_invite_user__["a" /* InviteUserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    menuType: 'push',
                    platforms: {
                        ios: {
                            menuType: 'overlay',
                        }
                    }
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_add_room__["a" /* AddRoomPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_add_questions__["a" /* AddQuestionPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_invite_user__["a" /* InviteUserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                __WEBPACK_IMPORTED_MODULE_17__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_storage_storage__["a" /* StorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_open_native_settings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_vars_global_vars__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_storage_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_rest_rest__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular

// Ionic

// Ionic Native





// App




var MyApp = /** @class */ (function () {
    function MyApp(globalVars, settings, network, alert, platform, statusBar, splashScreen, storageProvider, menuCtrl, restProvider, storage) {
        this.globalVars = globalVars;
        this.settings = settings;
        this.network = network;
        this.alert = alert;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storageProvider = storageProvider;
        this.menuCtrl = menuCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.verifyConnectivity();
            _this.setRootPage();
            _this.menuCtrl.enable(true);
        });
    };
    MyApp.prototype.verifyConnectivity = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            _this.globalVars.setIsConnected(false);
            _this.showConnectivityAlert();
        });
        this.network.onConnect().subscribe(function () {
            _this.globalVars.setIsConnected(true);
            console.log('connected');
        });
    };
    MyApp.prototype.setRootPage = function () {
        var _this = this;
        this.storageProvider.getUser().then(function (aUser) {
            _this.rootPage = aUser ? __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] : __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            if (aUser) {
                _this.token = aUser.token;
            }
        });
    };
    MyApp.prototype.showConnectivityAlert = function () {
        var _this = this;
        var showAlert = this.alert.create({
            title: 'Network Connection',
            message: "You need to have a working wifi or network connection to use this application.",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancelled");
                    }
                },
                {
                    text: "Verify Wifi",
                    handler: function () {
                        _this.settings.open('wifi').then(function (val) {
                            console.log('wifi opened');
                        }).catch(function (err) {
                            console.log(JSON.stringify(err));
                        });
                    }
                }
            ]
        });
        showAlert.present();
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.restProvider.logout(this.token).then(function () {
            _this.storage.deleteUser();
            _this.menuCtrl.close();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\app\app.html"*/'<div>\n  <!--Default Menu-->\n  <ion-menu [content]="content">\n      <ion-header>\n          <ion-toolbar style="color:#f26e40">\n            <ion-title>Menu</ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content>\n          <ion-list>\n            <ion-item>\n                <ion-icon (click)="logout()" name="log-out" style="color:#f26e40" start padding> Logout</ion-icon>\n            </ion-item>\n          </ion-list>\n        </ion-content>\n    </ion-menu>\n</div>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_open_native_settings__["a" /* OpenNativeSettings */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_10__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_storage_storage__["a" /* StorageProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = /** @class */ (function () {
    //------------------------
    // CONSTRUCTOR
    //------------------------
    function Room(name, uuid, isActive) {
        this.name = name;
        this.uuid = uuid;
        this.isActive = isActive;
    }
    //------------------------
    // INTERFACE
    //------------------------
    Room.prototype.setUuid = function (aUuid) {
        var wasSet = false;
        this.uuid = aUuid;
        wasSet = true;
        return wasSet;
    };
    Room.prototype.setActive = function (aActive) {
        var wasSet = false;
        this.isActive = aActive;
        wasSet = true;
        return wasSet;
    };
    Room.prototype.setName = function (aName) {
        var wasSet = false;
        ;
        this.name = aName;
        wasSet = true;
        return wasSet;
    };
    Room.prototype.getUuid = function () {
        return this.uuid;
    };
    Room.prototype.getIsActive = function () {
        return this.isActive;
    };
    Room.prototype.getName = function () {
        return this.name;
    };
    Room.prototype.toString = function () {
        return "[" +
            "uuid" + ":" + this.getUuid() + "," +
            "active" + ":" + this.getIsActive() + "]" + "name" + "=" + " " + this.getName() + "]";
    };
    return Room;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = /** @class */ (function () {
    //------------------------
    // CONSTRUCTOR
    //------------------------
    function Question(uuid, title, text, isMcq) {
        this.uuid = uuid;
        this.title = title;
        this.text = text;
        this.isMcq = isMcq;
    }
    //------------------------
    // INTERFACE
    //------------------------
    Question.prototype.setUuid = function (aUuid) {
        var wasSet = false;
        this.uuid = aUuid;
        wasSet = true;
        return wasSet;
    };
    Question.prototype.setIsMCQ = function (aMcq) {
        var wasSet = false;
        this.isMcq = aMcq;
        wasSet = true;
        return wasSet;
    };
    Question.prototype.setTitle = function (aTitle) {
        var wasSet = false;
        ;
        this.title = aTitle;
        wasSet = true;
        return wasSet;
    };
    Question.prototype.setText = function (aText) {
        var wasSet = false;
        ;
        this.text = aText;
        wasSet = true;
        return wasSet;
    };
    Question.prototype.getUuid = function () {
        return this.uuid;
    };
    Question.prototype.getIsMCQ = function () {
        return this.isMcq;
    };
    Question.prototype.getTitle = function () {
        return this.title;
    };
    Question.prototype.getText = function () {
        return this.text;
    };
    Question.prototype.toString = function () {
        return "[" +
            "uuid" + ":" + this.getUuid() + "," +
            "active" + ":" + this.getIsMCQ() + "]" + "title" + "=" + " " + this.getTitle() + "text" + "=" + " " + this.getText() + "]";
    };
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = /** @class */ (function () {
    //------------------------
    // CONSTRUCTOR
    //------------------------
    function Answer(uuid, text, isCorrect) {
        this.uuid = uuid;
        this.text = text;
        this.isCorrect = isCorrect;
    }
    //------------------------
    // INTERFACE
    //------------------------
    Answer.prototype.setUuid = function (aUuid) {
        var wasSet = false;
        this.uuid = aUuid;
        wasSet = true;
        return wasSet;
    };
    Answer.prototype.setIsCorrect = function (aIsCorrect) {
        var wasSet = false;
        this.isCorrect = aIsCorrect;
        wasSet = true;
        return wasSet;
    };
    Answer.prototype.setText = function (aText) {
        var wasSet = false;
        ;
        this.text = aText;
        wasSet = true;
        return wasSet;
    };
    Answer.prototype.getUuid = function () {
        return this.uuid;
    };
    Answer.prototype.getIsCorrect = function () {
        return this.isCorrect;
    };
    Answer.prototype.getText = function () {
        return this.text;
    };
    Answer.prototype.toString = function () {
        return "[" + "text" + "=" + " " + this.getText() + "Correct" + "=" + " " + this.getIsCorrect() + "]";
    };
    return Answer;
}());

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__test_test__["a" /* TestPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="0" padding-top="10px">\n  <ion-tab tabIcon="home" tabTitle="Rooms" [root]="tab1Root" ></ion-tab>\n  <ion-tab tabIcon="ios-apps-outline" tabTitle="Test" [root]="tab2Root" ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_open_native_settings__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GlobalVarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalVarsProvider = /** @class */ (function () {
    function GlobalVarsProvider(nativeSettings, http) {
        this.nativeSettings = nativeSettings;
        this.http = http;
        this.isConnected = true;
    }
    GlobalVarsProvider.prototype.setIsConnected = function (check) {
        this.isConnected = check;
    };
    GlobalVarsProvider.prototype.getIsConnected = function () {
        return this.isConnected;
    };
    GlobalVarsProvider.prototype.open = function (settings) {
        this.nativeSettings.open(settings).then(function (val) {
            console.log(settings + 'opened');
        }).catch(function (err) {
            console.log(JSON.stringify(err));
        });
    };
    GlobalVarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_open_native_settings__["a" /* OpenNativeSettings */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalVarsProvider);
    return GlobalVarsProvider;
}());

//# sourceMappingURL=global-vars.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(terms);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafeHtmlPipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safeHtml',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=safe-html.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var USER = 'user';
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage) {
        this.storage = storage;
    }
    /*
    setToken(token : string) : Promise<any>{
        return this.storage.get(TOKEN).then((val) => {
          if(val && val == token){
            console.log("Token is saved already!");
          }else{
            return this.storage.set(TOKEN, token);
          }
        })
    }
    getToken() : Promise<string>{
      return this.storage.get(TOKEN);
    }
    */
    /*
    addUser(user: User): Promise<any> {
      return this.storage.get(USER).then((aUser: User) => {
        if (aUser) {
          console.log("User is logged in already!");
        } else {
          return this.storage.set(USER, user);
        }
      });
    }
    */
    // Create
    StorageProvider.prototype.addUser = function (user) {
        var _this = this;
        return this.storage.get(USER).then(function (aUser) {
            if (aUser) {
                console.log("User is logged in already!");
            }
            else {
                return _this.storage.set(USER, user);
            }
        });
    };
    // READ
    StorageProvider.prototype.getUser = function () {
        var _this = this;
        return this.storage.get(USER).then(function (aUser) {
            if (!aUser) {
                return null;
            }
            return _this.storage.get(USER);
        });
    };
    // UPDATE
    StorageProvider.prototype.updateToken = function (token) {
        var _this = this;
        return this.storage.get(USER).then(function (aUser) {
            if (!aUser) {
                return null;
            }
            var updatedUser = aUser;
            updatedUser.token = token;
            return _this.storage.set(USER, updatedUser);
        });
    };
    // DELETE
    StorageProvider.prototype.deleteUser = function () {
        var _this = this;
        return this.storage.get(USER).then(function (aUser) {
            if (!aUser) {
                return null;
            }
            return _this.storage.set(USER, null);
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_room__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_room__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_add_room__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(storage, restProvider, navParams, globalVars, navCtrl, loadingCtrl, cd, menu, alert, modalCtrl) {
        this.storage = storage;
        this.restProvider = restProvider;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cd = cd;
        this.menu = menu;
        this.alert = alert;
        this.modalCtrl = modalCtrl;
        this.token = '';
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        menu.enable(true);
        this.initializePage(0);
        loading.dismiss();
    }
    HomePage.prototype.initializePage = function (count) {
        var _this = this;
        if (count < 5) {
            this.storage.getUser().then(function (aUser) {
                _this.username = aUser.username;
                _this.password = aUser.password;
                _this.token = aUser.token;
                _this.getRooms();
            }).catch((function (err) {
                _this.initializePage(count++);
            }));
        }
        else {
            this.presentAlert('Info', 'Sorry an error has occured!');
        }
    };
    HomePage.prototype.getRooms = function () {
        var _this = this;
        this.restProvider.getRooms(this.token)
            .then(function (data) {
            _this.jsonData = data;
            _this.allRooms = new Array(_this.jsonData.rooms.length);
            for (var i = 0; i < _this.jsonData.rooms.length; i++) {
                var room = new __WEBPACK_IMPORTED_MODULE_3__Models_room__["a" /* Room */](_this.jsonData.rooms[i].name, _this.jsonData.rooms[i].room_id, _this.jsonData.rooms[i].active);
                _this.allRooms[i] = room;
            }
            _this.dataRetrieved = true;
        }).catch(function (err) {
            if ((err.error.message == "Signature expired, Please sign in again" || "Token was Blacklisted, Please login In") && err.status == 401) {
                _this.restProvider.login(_this.username, _this.password).then(function (data) {
                    _this.jsonData = data;
                    _this.storage.updateToken(_this.jsonData.auth_token).then(function (aUser) {
                        _this.token = aUser.token;
                        _this.getRooms();
                    }).catch(function (err) {
                        console.log("Token update: " + err);
                    });
                }).catch(function (err) {
                    console.log("Login: " + err);
                });
            }
        });
    };
    HomePage.prototype.goToRoomPage = function (room_id, name) {
        room_id = room_id || "";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__room_room__["a" /* RoomPage */], {
            room_id: room_id, roomName: name
        });
    };
    HomePage.prototype.openMenu = function () {
        this.menu.open();
    };
    HomePage.prototype.presentAlert = function (title, message) {
        var alert = this.alert.create({
            title: title,
            message: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    HomePage.prototype.addRoomModal = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_add_room__["a" /* AddRoomPage */], { token: this.token });
        contactModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\home\home.html"*/'<ion-header class="page-header">\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle (click)="openMenu">\n        <ion-icon style="color:#f26e40" name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Rooms</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="this.getRooms()" color="main">\n          <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf="!this.globalVars.getIsConnected()">\n    <ion-card-header>Offline</ion-card-header>\n    <ion-card-content padding>\n      <button class=\'btn btn-primary\' (click)="this.globalVars.open(\'wifi\')">Open the Wifi settings</button>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf="this.globalVars.getIsConnected()">\n    <div *ngIf="!(this.allRooms === undefined || this.allRooms.length == 0); else noRooms">\n      <p padding-left="1 px" padding-top="1px">Active</p>\n      <ion-card *ngFor="let room of allRooms" (click)="goToRoomPage(room.getUuid(), room.getName())" tappable>\n        <img src="https://source.unsplash.com/1600x900/?college,math,science,law"/>\n        <ion-card-content>\n          <ion-card-title>{{room.getName()}}</ion-card-title>\n          <p style="color:#f26e40">Room settings</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <ng-template #noRooms>\n        <div text-center>\n          <ion-icon style="font-size:100px; color:#f26e40" name="sad"></ion-icon>\n          <h1>You currently not participating in a room.</h1>\n          <p style="font-size: 11px;color:#f26e40" (click)="addRoomModal()">Create one</p>\n        </div>\n      </ng-template>\n  </div>\n\n  <ion-fab right bottom margin>\n    <button ion-fab (click)="addRoomModal()" color=\'main\'><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_question__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_question__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_add_questions__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_invite_user__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RoomPage = /** @class */ (function () {
    function RoomPage(storage, restProvider, navParams, globalVars, navCtrl, loadingCtrl, cd, modalCtrl) {
        var _this = this;
        this.storage = storage;
        this.restProvider = restProvider;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cd = cd;
        this.modalCtrl = modalCtrl;
        this.token = '';
        var loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.name = navParams.get('roomName');
        this.room_id = navParams.get('room_id');
        this.storage.getUser().then(function (val) {
            _this.token = val.token;
            _this.getRoomInfo();
        });
        loading.dismiss();
    }
    RoomPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            var pages = [
                {
                    page: __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]
                }
            ];
            _this.navCtrl.setPages(pages);
        };
    };
    RoomPage.prototype.getRoomInfo = function () {
        var _this = this;
        this.restProvider.getRoomInfo(this.token, this.room_id)
            .then(function (data) {
            _this.jsonData = data;
            _this.allQuestions = new Array(_this.jsonData.questions.length);
            for (var i = 0; i < _this.jsonData.questions.length; i++) {
                var question = new __WEBPACK_IMPORTED_MODULE_3__Models_question__["a" /* Question */](_this.jsonData.questions[i].uuid, _this.jsonData.questions[i].title, _this.jsonData.questions[i].text, _this.jsonData.questions[i].is_mcq);
                _this.allQuestions[i] = question;
            }
            _this.dataRetrieved = true;
        });
    };
    RoomPage.prototype.goToQuestionPage = function (question_id, room_id) {
        question_id = question_id || "";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__question_question__["a" /* QuestionPage */], {
            question_id: question_id,
            room_id: room_id
        });
    };
    RoomPage.prototype.addQuestionModal = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_add_questions__["a" /* AddQuestionPage */], { token: this.token, room_id: this.room_id, room_name: this.name });
        contactModal.present();
    };
    RoomPage.prototype.inviteModal = function () {
        var inviteModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_invite_user__["a" /* InviteUserPage */], { token: this.token, room_id: this.room_id });
        inviteModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], RoomPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], RoomPage.prototype, "content", void 0);
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room',template:/*ion-inline-start:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\room\room.html"*/'<ion-header class="page-header">\n    <ion-navbar>\n      <ion-title>{{name}}</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="inviteModal()" color="main">\n            <ion-icon name="person-add"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="this.getRoomInfo()" color="main">\n            <ion-icon name="refresh"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n  \n    <ion-card *ngIf="!this.globalVars.getIsConnected()">\n      <ion-card-header>Offline</ion-card-header>\n      <ion-card-content padding>\n        <button class=\'btn btn-primary\' (click)="this.globalVars.open(\'wifi\')">Open Wifi settings</button>\n      </ion-card-content>\n    </ion-card>\n  \n    <div *ngIf="this.globalVars.getIsConnected()">\n        <div *ngIf="!(this.allQuestions === undefined || this.allQuestions.length == 0); else noQuestions">\n          <ion-list inset>\n              <ion-list-header>\n                Questions\n              </ion-list-header>\n        \n              <ion-item *ngFor="let question of allQuestions" (click)="goToQuestionPage(question.getUuid(), this.room_id)">\n                <h1>{{question.getTitle()}}</h1>\n                <h3>{{question.getText()}}</h3>\n                <h3 class="orange-text" *ngIf=" question.getIsMCQ() == true">MCQ: Yes</h3>\n                <h3 class="orange-text" *ngIf=" question.getIsMCQ() == false">MCQ: No</h3>\n                <ion-icon style="color:#f26e40" name="arrow-forward" item-end></ion-icon>\n              </ion-item>\n            </ion-list>\n          </div>\n          <ng-template #noQuestions>\n            <div text-center>\n              <ion-icon style="font-size:100px; color:#f26e40" name="sad"></ion-icon>\n              <h1>Questions are not created yet.</h1>\n              <p style="font-size: 11px;color:#f26e40" (click)="addQuestionModal()">Add some</p>\n            </div>\n          </ng-template>\n          \n    </div>\n\n    <ion-fab right bottom margin>\n        <button ion-fab (click)="addQuestionModal()" color=\'main\'><ion-icon name="add"></ion-icon></button>\n      </ion-fab>  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\rukau\Documents\Projects\Ionic\vsrp\src\pages\room\room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map