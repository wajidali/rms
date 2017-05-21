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
var species_service_1 = require("../../_services/species.service");
var AnimalComponent = (function () {
    function AnimalComponent(animalService, speciesService) {
        this.animalService = animalService;
        this.speciesService = speciesService;
        this.animal = { Age: 0, Id: 0, YearOfBirth: 0, Name: "", Species: null, SpeciesFK: 0 };
    }
    AnimalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animalService.getAnimals().subscribe(function (response) {
            _this.animals = response;
        });
        this.speciesService.getSpecies().subscribe(function (response) {
            _this.species = response;
        });
    };
    AnimalComponent.prototype.editAnimal = function (id) {
        var _this = this;
        this.animalService.getAnimal(id).subscribe(function (response) {
            _this.animal = response;
            _this.showAnimalsForm();
            setTimeout(function () {
                $('.modal').appendTo("body");
                $('#animalsModal').modal('show');
            }, 230);
        });
    };
    AnimalComponent.prototype.deleteAnimal = function (id) {
        this.animalService.deleteAnimal(id).subscribe(function (res) {
            $('#animalsModal').modal('hide');
        });
    };
    AnimalComponent.prototype.removeAnimal = function (id) {
        var _this = this;
        this.animalService.getAnimal(id).subscribe(function (response) {
            _this.animal = response;
            _this.showConfirmForm();
            setTimeout(function () {
                $('.modal').appendTo("body");
                $('#animalsModal').modal('show');
            }, 230);
        });
    };
    AnimalComponent.prototype.showConfirmForm = function () {
        $('.animalsBox').fadeOut('fast', function () {
            $('.confirmBox').fadeIn('fast');
            $('.animals-footers').fadeOut('fast', function () {
                $('.confirm-footers').fadeIn('fast');
            });
            $('.modal-title').html('Confirm');
        });
        $('.error').removeClass('alert alert-danger').html('');
    };
    AnimalComponent.prototype.showAnimalsForm = function () {
        $('#animalsModal .confirmBox').fadeOut('fast', function () {
            $('.animalsBox').fadeIn('fast');
            $('.confirm-footers').fadeOut('fast', function () {
                $('.animals-footers').fadeIn('fast');
            });
            $('.modal-title').html('Edit Animal');
        });
        $('.error').removeClass('alert alert-danger').html('');
    };
    AnimalComponent = __decorate([
        core_1.Component({
            selector: 'animal-cmp',
            moduleId: module.id,
            templateUrl: 'animal.component.html'
        }), 
        __metadata('design:paramtypes', [animals_service_1.AnimalsService, species_service_1.SpeciesService])
    ], AnimalComponent);
    return AnimalComponent;
}());
exports.AnimalComponent = AnimalComponent;
//# sourceMappingURL=animal.component.js.map