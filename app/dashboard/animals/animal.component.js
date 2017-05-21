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
var animals_service_1 = require('../../_services/animals.service');
var AnimalComponent = (function () {
    function AnimalComponent(animalService) {
        this.animalService = animalService;
    }
    AnimalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animalService.getAnimals().subscribe(function (response) {
            _this.animals = response;
        });
    };
    AnimalComponent = __decorate([
        core_1.Component({
            selector: 'animal-cmp',
            moduleId: module.id,
            templateUrl: 'animal.component.html'
        }), 
        __metadata('design:paramtypes', [animals_service_1.AnimalsService])
    ], AnimalComponent);
    return AnimalComponent;
}());
exports.AnimalComponent = AnimalComponent;
//# sourceMappingURL=animal.component.js.map