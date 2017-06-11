"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var dashboard_routes_1 = require("./dashboard.routes");
var equal_validator_directive_1 = require("../_validators/equal-validator.directive");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations"); // this is needed!
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
// Import your library
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
            forms_1.FormsModule,
            common_1.CommonModule,
            animations_1.BrowserAnimationsModule,
            angular_2_dropdown_multiselect_1.MultiselectDropdownModule
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS, equal_validator_directive_1.EqualValidator],
        providers: []
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map