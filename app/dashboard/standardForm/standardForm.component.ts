import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
declare  let initDatetimepickers:any;
declare  let validity: any;
@Component({
    selector: 'standard-form-camp',
    moduleId: module.id,
    templateUrl: 'standardForm.component.html'
})

export class StandardForm implements OnInit{
    formModel: any;
    constructor(private http: Http){

    }
    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
        $.getScript('../../../../assets/js/plugins/jquery.tagsinput.js');
        $.getScript('../../../../assets/js/plugins/bootstrap-datetimepicker.js');
        //initDatetimepickers();
        this.initForm();
        this.formModel = {};
        this.formModel.workPreference = {};
        this.formModel.importantNearMe ={};
        this.formModel.settlement ={};
        this.formModel.locationPreference = {};
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
