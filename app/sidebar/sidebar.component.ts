import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public loggedIn: false;
    ngOnInit() {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        if(this.loggedIn)
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        else
            this.menuItems = ROUTES.filter(menuItem => menuItem.path === 'login');
    }
}
