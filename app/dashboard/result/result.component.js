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
var initDemo = require("../../../assets/js/charts.js");
var ResultComponent = (function () {
    function ResultComponent() {
        this.counties = [];
        this.counties = [
            { id: 0, name: "Harju County" },
            { id: 1, name: "Hiiu County" },
            { id: 2, name: "Ida-Viru County" },
            { id: 3, name: "Jõgeva County" },
            { id: 4, name: "Järva County" },
            { id: 5, name: "Lääne County" },
            { id: 6, name: "Lääne-Viru County" },
            { id: 7, name: "Põlva County" },
            { id: 8, name: "Pärnu County" },
            { id: 9, name: "Rapla County" },
            { id: 10, name: "Saare County" },
            { id: 11, name: "Tartu County" },
            { id: 12, name: "Valga County" },
            { id: 13, name: "Viljandi County" },
            { id: 14, name: "Võru County" },
        ];
    }
    ResultComponent.prototype.ngOnInit = function () {
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    core_1.Component({
        selector: 'result-cmp',
        moduleId: module.id,
        templateUrl: 'result.component.html'
    }),
    __metadata("design:paramtypes", [])
], ResultComponent);
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map