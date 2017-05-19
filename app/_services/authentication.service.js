"use strict";
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
 * Created by Wajid on 5/19/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var router_1 = require('@angular/router');
// import { appSettings } from '../app.module';
// import { User } from '../_models/index';
var config_1 = require('../config');
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
        this.configData = config_1.config.getEnvironmentVariable();
    }
    AuthenticationService.prototype.login = function (username, password) {
        this.http.get(this.configData.endPoint + "api/default").subscribe(function (r) { console.log(r); });
        // var API_URL = appSettings.settings.serviceApiUrl + '/api/user/authenticate';
        // return this.http.post(
        //     API_URL
        //     , JSON.stringify({ UserName: username, Password: password })
        //     , this.jwt())
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user: User = response.json();
        //         if (user) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify({}));
        this.loggedIn = true;
        //     }
        // });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedIn = false;
        this.router.navigate(['/login']);
    };
    AuthenticationService.prototype.getLoggedIn = function () {
        return JSON.parse(localStorage.getItem('currentUser').toString());
    };
    AuthenticationService.prototype.jwt = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map