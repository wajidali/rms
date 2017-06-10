"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var StandardForm = (function () {
    function StandardForm() {
    }
    StandardForm.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/material-dashboard.js');
        $.getScript('../../../../assets/js/plugins/jquery.tagsinput.js');
        $.getScript('../../../../assets/js/plugins/bootstrap-datetimepicker.js');
        //initDatetimepickers();
        this.initForm();
    };
    StandardForm.prototype.initForm = function () {
        $(".img-check").click(function () {
            $(this).toggleClass("check");
        });
        var navListItems = $('div.setup-panel div a'), allWells = $('.setup-content'), allNextBtn = $('.nextBtn'), allPrevBtn = $('.prevBtn');
        allWells.hide();
        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')), $item = $(this);
            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('btn-primary').addClass('btn-default');
                $item.addClass('btn-primary');
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
        });
        allPrevBtn.click(function () {
            var curStep = $(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
            prevStepWizard.removeAttr('disabled').trigger('click');
        });
        allNextBtn.click(function () {
            var curStep = $(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"), curInputs = curStep.find("input[type='text'],input[type='url']"), isValid = true;
            $(".form-group").removeClass("has-error");
            for (var i = 0; i < curInputs.length; i++) {
            }
            if (isValid)
                nextStepWizard.removeAttr('disabled').trigger('click');
        });
        $('div.setup-panel div a.btn-primary').trigger('click');
    };
    StandardForm = __decorate([
        core_1.Component({
            selector: 'standard-form-camp',
            moduleId: module.id,
            templateUrl: 'standardForm.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StandardForm);
    return StandardForm;
}());
exports.StandardForm = StandardForm;
//# sourceMappingURL=standardForm.component.js.map