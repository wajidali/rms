import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { UserComponent } from './user/user.component';


import { LoginRegisterComponent } from './login-register/login-register.component'
import { AuthGuard } from '../_guards/auth.guard';
import {StandardForm} from "./standardForm/standardForm.component";

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent},
    // { path: 'login', component: LoginRegisterComponent },
    { path: 'standard-form', component: StandardForm },
    { path: 'result', component: ResultComponent },

    { path: 'user', component: UserComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    // { path: 'public',
    //   redirectTo: '',
    //   children: [
    //     { path: '', redirectTo: 'standard-form', pathMatch: 'full' },
    //     { path: 'standard-form', component: StandardForm},
    //     { path: 'result', component: ResultComponent}
    //  ]
    // }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    // LoginRegisterComponent,
    UserComponent,
    ResultComponent,
    StandardForm

]
