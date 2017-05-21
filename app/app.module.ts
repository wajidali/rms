import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AuthenticationService } from './_services/authentication.service';
import { SpeciesService } from './_services/species.service';
import { UsersService } from './_services/users.service';
import { AnimalsService } from './_services/animals.service';
import { AuthGuard } from './_guards/auth.guard';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
    imports:      [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        RouterModule.forRoot([]),
        HttpModule,
        FormsModule
    ],
    declarations: [ AppComponent, DashboardComponent ],
    providers: [ AuthenticationService, AnimalsService, SpeciesService, UsersService, AuthGuard],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
