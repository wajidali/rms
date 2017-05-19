import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

public menuItems: any;
    constructor(private router: Router, public authenticationService: AuthenticationService) { }
    ngOnInit() {

        $.getScript('../../assets/js/sidebar-moving-tab.js');
        // get login status
        // var user = this.authenticationService.loggedIn.subscribe((loIn) => {
        //     this.loggedIn = loIn;
        // })
        // if (user != null)
        //     this.loggedIn = true;
        this.menuItems = ROUTES.filter(i=> i);

    }


}
