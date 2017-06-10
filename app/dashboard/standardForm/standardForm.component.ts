import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'standard-form-camp',
    moduleId: module.id,
    templateUrl: 'standardForm.component.html'
})

export class StandardForm implements OnInit{
    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
        $.getScript('../../../../assets/js/plugins/jquery.tagsinput.js');
    }
}
