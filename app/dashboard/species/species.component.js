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
/**
 * Created by Wajid on 5/21/2017.
 */
var core_1 = require('@angular/core');
var species_service_1 = require("../../_services/species.service");
var SpeciesComponent = (function () {
    function SpeciesComponent(speciesService) {
        this.speciesService = speciesService;
    }
    SpeciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speciesService.getSpecies().subscribe(function (response) {
            _this.species = response;
        });
    };
    SpeciesComponent = __decorate([
        core_1.Component({
            selector: 'species-cmp',
            moduleId: module.id,
            templateUrl: 'species.component.html'
        }), 
        __metadata('design:paramtypes', [species_service_1.SpeciesService])
    ], SpeciesComponent);
    return SpeciesComponent;
}());
exports.SpeciesComponent = SpeciesComponent;
//# sourceMappingURL=species.component.js.map