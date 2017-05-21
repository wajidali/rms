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
 * Created by Wajid Khilji on 17/05/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var authentication_service_1 = require('../../_services/authentication.service');
var LoginRegisterComponent = (function () {
    function LoginRegisterComponent(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.user = { Password: '', Email: '', Id: 0, FirstName: '', LastName: '' };
        this.errorMessage = "";
        this.retypePassword = "";
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginRegisterComponent.prototype.login = function (model, isValid) {
        var _this = this;
        if (isValid) {
            this.authService.login(model.loginEmail, model.loginPassword).subscribe(function () {
                $('#loginModal').modal('hide');
                _this.router.navigate([_this.returnUrl]);
            }, function (error) {
                _this.errorMessage = error.statusText + ": check email or password";
            });
        }
    };
    LoginRegisterComponent.prototype.register = function (model, isValid) {
        var _this = this;
        console.log(model, isValid);
        if (isValid) {
            this.authService.register(model).subscribe(function () {
                $('#loginModal').modal('hide');
                _this.router.navigate([_this.returnUrl]);
            });
        }
    };
    LoginRegisterComponent.prototype.showRegisterForm = function () {
        $('.loginBox').fadeOut('fast', function () {
            $('.registerBox').fadeIn('fast');
            $('.login-footer').fadeOut('fast', function () {
                $('.register-footer').fadeIn('fast');
            });
            $('.modal-title').html('Register with');
        });
        $('.error').removeClass('alert alert-danger').html('');
    };
    LoginRegisterComponent.prototype.showLoginForm = function () {
        $('#loginModal .registerBox').fadeOut('fast', function () {
            $('.loginBox').fadeIn('fast');
            $('.register-footer').fadeOut('fast', function () {
                $('.login-footer').fadeIn('fast');
            });
            $('.modal-title').html('Login with');
        });
        $('.error').removeClass('alert alert-danger').html('');
    };
    LoginRegisterComponent.prototype.openLoginModal = function () {
        this.showLoginForm();
        setTimeout(function () {
            $('.modal').appendTo("body");
            $('#loginModal').modal('show');
        }, 230);
    };
    LoginRegisterComponent.prototype.openRegisterModal = function () {
        this.showRegisterForm();
        setTimeout(function () {
            $('.modal').appendTo("body");
            $('#loginModal').modal('show');
        }, 230);
    };
    LoginRegisterComponent = __decorate([
        core_1.Component({
            selector: 'login-cmp',
            moduleId: module.id,
            templateUrl: 'login-register.component.html',
            styleUrls: ['login-register.css']
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.ActivatedRoute, router_1.Router])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());
exports.LoginRegisterComponent = LoginRegisterComponent;
//# sourceMappingURL=login-register.component.js.map