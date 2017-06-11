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
var core_1 = require("@angular/core");
var sidebar_routes_config_1 = require("./sidebar-routes.config");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../_services/authentication.service");
var SidebarComponent = (function () {
    function SidebarComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        // get login status
        // var user = this.authenticationService.loggedIn.subscribe((loIn) => {
        //     this.loggedIn = loIn;
        // })
        // if (user != null)
        //     this.loggedIn = true;
        this.menuItems = sidebar_routes_config_1.ROUTES.filter(function (i) { return i; });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sidebar-cmp',
        templateUrl: 'sidebar.component.html',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, authentication_service_1.AuthenticationService])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
var _a;
//# sourceMappingURL=sidebar.component.js.map