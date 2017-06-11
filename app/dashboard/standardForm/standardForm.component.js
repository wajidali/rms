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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var occupation_1 = require("../../_modals/occupation");
var dataservice_1 = require("../../_services/dataservice");
var StandardForm = (function () {
    function StandardForm(http, _dataService) {
        this.http = http;
        this._dataService = _dataService;
        this.selectedOccupation = new occupation_1.Occupation(0, 'Pakistan');
        this.occupations = this._dataService.getOccupations();
    }
    StandardForm.prototype.onSelect = function (occupationId) {
        this.specialities = this._dataService.getSpecialities().filter(function (item) { return item.occupationId == occupationId; });
    };
    StandardForm.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/material-dashboard.js');
        $.getScript('../../../../assets/js/plugins/bootstrap-datetimepicker.js');
        //initDatetimepickers();
        this.initForm();
        this.formModel = {};
        this.formModel.workPreference = {};
        this.formModel.importantNearMe = {};
        this.formModel.settlement = {};
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
        };
        //$(this.imagePicker.nativeElement).imagepicker({show_label: true})
    };
    StandardForm.prototype.ngAfterViewInit = function () {
        this.formModel.specialities = [];
    };
    StandardForm.prototype.onSpecialityChange = function (event) {
        var self = this;
        $.each(this.specialities, function (i, v) {
            $.each(event, function (index, value) {
                if (v.id == value) {
                    var exist_1 = false;
                    $.each(self.formModel.specialities, function (k, j) {
                        if (v.id == j.id) {
                            exist_1 = true;
                        }
                    });
                    if (!exist_1) {
                        self.formModel.specialities.push(v);
                    }
                }
            });
        });
    };
    StandardForm.prototype.postForm = function () {
        console.log(this.formModel);
        $.post('https://settlebetter.eu/api/add', this.formModel, function (res) {
            console.log(res);
            window.location.hash = '#/result/';
        }.bind(window));
    };
    StandardForm.prototype.onChange = function () {
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
        function updateProgress(pageId) {
            var width = pageId / 4 * 100;
            $('#pages_progress').css('width', width + '%');
        }
        allPrevBtn.click(function () {
            var curStep = $(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
            prevStepWizard.removeAttr('disabled').trigger('click');
            updateProgress(parseInt(curStepBtn.replace('step-', ''), 10));
        });
        allNextBtn.click(function () {
            var curStep = $(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"), curInputs = curStep.find("input[type='text'],input[type='url']"), isValid = true;
            updateProgress(parseInt(curStepBtn.replace('step-', ''), 10));
            $(".form-group").removeClass("has-error");
            for (var i = 0; i < curInputs.length; i++) {
                // if (!<HTMLInputElement>curInputs[i].validity.valid){
                //     isValid = false;
                //     $(curInputs[i]).closest(".form-group").addClass("has-error");
                // }
            }
            if (isValid)
                nextStepWizard.removeAttr('disabled').trigger('click');
        });
        $('div.setup-panel div a.btn-primary').trigger('click');
        $('.location-selector img').click(function () {
            $('.location-selector img').removeClass('selectedImg');
            $(this).addClass('selectedImg');
        });
    };
    StandardForm.prototype.jwt = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    return StandardForm;
}());
__decorate([
    core_1.ViewChild('imagePicker'),
    __metadata("design:type", Object)
], StandardForm.prototype, "imagePicker", void 0);
StandardForm = __decorate([
    core_1.Component({
        selector: 'standard-form-camp',
        moduleId: module.id,
        templateUrl: 'standardForm.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, dataservice_1.DataService])
], StandardForm);
exports.StandardForm = StandardForm;
var _a;
//# sourceMappingURL=standardForm.component.js.map