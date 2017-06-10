"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var result_component_1 = require("./result/result.component");
var user_component_1 = require("./user/user.component");
var standardForm_component_1 = require("./standardForm/standardForm.component");
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    // { path: 'login', component: LoginRegisterComponent },
    { path: 'standard-form', component: standardForm_component_1.StandardForm },
    { path: 'user', component: user_component_1.UserComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    // LoginRegisterComponent,
    user_component_1.UserComponent,
    result_component_1.ResultComponent,
    standardForm_component_1.StandardForm
];
//# sourceMappingURL=dashboard.routes.js.map