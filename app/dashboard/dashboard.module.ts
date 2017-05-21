import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { EqualValidator} from '../_validators/equal-validator.directive';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        FormsModule,
        CommonModule
    ],
    declarations: [ MODULE_COMPONENTS, EqualValidator ],
    providers: [  ]
})

export class DashboardModule{}
