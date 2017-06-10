import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');

declare var $:any;

@Component({
    selector: 'result-cmp',
    moduleId: module.id,
    templateUrl: 'result.component.html'
})

export class ResultComponent implements OnInit{
    public counties = [];
    constructor(){
        this.counties = [
            {id:0, name:"Harju County"},
            {id:1, name:"Hiiu County"},
            {id:2, name:"Ida-Viru County"},
            {id:3, name:"Jõgeva County"},
            {id:4, name:"Järva County"},
            {id:5, name:"Lääne County"},
            {id:6, name:"Lääne-Viru County"},
            {id:7, name:"Põlva County"},
            {id:8, name:"Pärnu County"},
            {id:9, name:"Rapla County"},
            {id:10, name:"Saare County"},
            {id:11, name:"Tartu County"},
            {id:12, name:"Valga County"},
            {id:13, name:"Viljandi County"},
            {id:14, name:"Võru County"},
        ]
    }
    ngOnInit(){
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
    }
}
