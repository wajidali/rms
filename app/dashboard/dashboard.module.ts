import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { EqualValidator} from '../_validators/equal-validator.directive';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

// Import your library


@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        MultiselectDropdownModule

    ],
    declarations: [ MODULE_COMPONENTS, EqualValidator ],
    providers: [  ]
})

export class DashboardModule{}
