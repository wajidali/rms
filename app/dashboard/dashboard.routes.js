"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var species_component_1 = require('./species/species.component');
var animal_component_1 = require('./animals/animal.component');
var login_register_component_1 = require('./login-register/login-register.component');
var auth_guard_1 = require('../_guards/auth.guard');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_register_component_1.LoginRegisterComponent },
    { path: 'species', component: species_component_1.SpeciesComponent },
    { path: 'animals', component: animal_component_1.AnimalComponent },
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    login_register_component_1.LoginRegisterComponent,
    user_component_1.UserComponent,
    animal_component_1.AnimalComponent,
    species_component_1.SpeciesComponent
];
//# sourceMappingURL=dashboard.routes.js.map