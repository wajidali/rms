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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Wajid on 5/19/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var config_1 = require("../config");
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.API_URL = "";
        this.API_URL = config_1.config.getEnvironmentVariable().endPoint;
        this.loggedIn = localStorage.getItem('currentUser') ? true : false;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var url = this.API_URL + 'api/authenticate';
        return this.http.post(url, JSON.stringify({ email: email, password: password }), this.jwt())
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({}));
                _this.loggedIn = true;
            }
        });
    };
    AuthenticationService.prototype.register = function (user) {
        var _this = this;
        var url = this.API_URL + 'api/users/post';
        return this.http.post(url, JSON.stringify(user), this.jwt())
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log(response);
            var user = response.json();
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({}));
                _this.loggedIn = true;
            }
        });
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
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
var _a, _b;
//# sourceMappingURL=authentication.service.js.map