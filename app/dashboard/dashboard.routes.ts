import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { UserComponent } from './user/user.component';


import { LoginRegisterComponent } from './login-register/login-register.component'
import { AuthGuard } from '../_guards/auth.guard';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent},
    // { path: 'login', component: LoginRegisterComponent },


    { path: 'user', component: UserComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    // LoginRegisterComponent,
    UserComponent,
    ResultComponent,

]
