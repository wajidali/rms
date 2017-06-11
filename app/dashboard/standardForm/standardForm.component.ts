import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Occupation} from "../../_modals/occupation";
import {Speciality} from "../../_modals/speciality";
import {DataService} from "../../_services/dataservice";
import forEach = require("core-js/fn/array/for-each");
declare  let initDatetimepickers:any;
declare  let validity: any;


@Component({
    selector: 'standard-form-camp',
    moduleId: module.id,
    templateUrl: 'standardForm.component.html'
})

export class StandardForm implements OnInit{
    formModel: any;
    mySettings: any;
    languages:any;
    selectedOccupation:Occupation = new Occupation(0, 'Pakistan');
    occupations: Occupation[];
    specialities: any[];
    @ViewChild('imagePicker') imagePicker;
    constructor(private http: Http, private _dataService: DataService){
        this.occupations = this._dataService.getOccupations();
    }
    onSelect(occupationId) {
        this.specialities = this._dataService.getSpecialities().filter((item)=> item.occupationId == occupationId);
    }
    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');

        $.getScript('../../../../assets/js/plugins/bootstrap-datetimepicker.js');
        //initDatetimepickers();
        this.initForm();
        this.formModel = {};
        this.formModel.workPreference = {};
        this.formModel.importantNearMe ={};
        this.formModel.settlement ={};
        this.formModel.locationPreference = {};
        this.formModel.specialities = [];
        this.languages = [
            { id: 'English', name: 'English' },
            { id: 'Estonian', name: 'Estonian' },
            { id: 'Russian', name: 'Russian' },

        ];
        this.mySettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 11,
            //displayAllSelectedText: true
        };
        //$(this.imagePicker.nativeElement).imagepicker({show_label: true})
    }
    ngAfterViewInit(){
        this.formModel.specialities = [];
    }
    onSpecialityChange(event) {


        var self = this;

        $.each(this.specialities, function(i, v){
            $.each(event, function (index, value) {
                if(v.id == value){
                    self.formModel.specialities.push(v);
                }

            })
        })
    }

    postForm(){
        console.log(this.formModel);
        $.post('https://test.n8rth.online/api/add',this.formModel, function (res) {
            console.log(res);
        })
    }


    initForm(){
        $(".img-check").click(function(){
            $(this).toggleClass("check");
        });
            var navListItems = $('div.setup-panel div a'),
                allWells = $('.setup-content'),
                allNextBtn = $('.nextBtn'),
                allPrevBtn = $('.prevBtn');

            allWells.hide();

            navListItems.click(function (e) {
                e.preventDefault();
                var $target = $($(this).attr('href')),
                    $item = $(this);

                if (!$item.hasClass('disabled')) {
                    navListItems.removeClass('btn-primary').addClass('btn-default');
                    $item.addClass('btn-primary');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
            });

            allPrevBtn.click(function(){
                var curStep = $(this).closest(".setup-content"),
                    curStepBtn = curStep.attr("id"),
                    prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

                prevStepWizard.removeAttr('disabled').trigger('click');
            });

            allNextBtn.click(function(){
                var curStep = $(this).closest(".setup-content"),
                    curStepBtn = curStep.attr("id"),
                    nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                    curInputs = curStep.find("input[type='text'],input[type='url']"),
                    isValid = true;

                $(".form-group").removeClass("has-error");
                for(var i=0; i<curInputs.length; i++){
                    // if (!<HTMLInputElement>curInputs[i].validity.valid){
                    //     isValid = false;
                    //     $(curInputs[i]).closest(".form-group").addClass("has-error");
                    // }
                }

                if (isValid)
                    nextStepWizard.removeAttr('disabled').trigger('click');
            });

            $('div.setup-panel div a.btn-primary').trigger('click');

    }

    private jwt() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return options;
    }

}
