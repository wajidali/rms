import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AuthenticationService } from './_services/authentication.service';
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
        HttpModule
    ],
    declarations: [ AppComponent, DashboardComponent ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AuthenticationService, AuthGuard],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
