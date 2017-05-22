/**
 * Created by Wajid on 5/21/2017.
 */
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnimalsService } from '../../_services/animals.service';
import {Animal} from "../../_modals/animal";
import {Species} from "../../_modals/species";
import {SpeciesService} from "../../_services/species.service";
import {isUndefined} from "util";


declare var $:any;

@Component({
    selector: 'animal-cmp',
    moduleId: module.id,
    templateUrl: 'animal.component.html'
})

export class AnimalComponent implements OnInit{
    animals: Animal[];
    error : '';
    averageAge:number =0;
    animal: Animal = {Age: 0, Id: 0, YearOfBirth: 0, Name:"", Species: null, SpeciesFK: 0};
    species: Species[];
    constructor(public animalService: AnimalsService, public speciesService: SpeciesService){}
    ngOnInit(){
        this.refreshAnimals();
        this.speciesService.getSpecies().subscribe((response)=> {
            this.species = response;
        });
    }

    refreshAnimals(){
        this.animalService.getAnimals().subscribe((response)=> {
            this.animals = response;
            this.animals.forEach(p=> this.averageAge+= p.Age);
            this.averageAge = this.averageAge/ this.animals.length;

        });
    }

    editAnimal(id: number){
        this.animalService.getAnimal(id).subscribe((response)=>{
            this.animal = response;
            this.showAnimalsForm();
            setTimeout(function(){
                $('.modal').appendTo("body");
                $('#animalsModal').modal('show');
            }, 230);
        })
    }

    addNewAnimal(){
        this.animal = { Name: '', YearOfBirth: null, Id: 0, Age: null, SpeciesFK: null, Species:null };
        this.showAnimalsForm();
        setTimeout(function(){
            $('.modal').appendTo("body");
            $('#animalsModal').modal('show');
        }, 230);
    }

    saveAnimal(model, isValid){
        if(isValid){
            if(model.Id !== 0) {
                this.animalService.putAnimal(model).subscribe((response) => {
                    $('#animalsModal').modal('hide');
                    model.reset();
                    this.refreshAnimals();
                }, (error2) => {
                    this.error = error2;
                });
            }
            else{
                this.animalService.postAnimal(model).subscribe((response) => {
                    $('#animalsModal').modal('hide');
                    model.reset();
                    this.refreshAnimals();
                }, (error2) => {
                    this.error = error2;
                });
            }

        }
    }

    deleteAnimal(id: number){
        this.animalService.deleteAnimal(id).subscribe((res)=>{
            $('#animalsModal').modal('hide');
            this.animals = this.animals.filter(p=> p.Id != res.Id);
        }, (error2) => {
            this.error = error2;
        });
    }

    removeAnimal(id: number){
        this.animalService.getAnimal(id).subscribe((response)=>{
            this.animal = response;
            this.showConfirmForm();
            setTimeout(function(){
                $('.modal').appendTo("body");
                $('#animalsModal').modal('show');
            }, 230);
        })

    }

    showConfirmForm(){
        $('.animalsBox').fadeOut('fast',function(){
            $('.confirmBox').fadeIn('fast');
            $('.animals-footers').fadeOut('fast',function(){
                $('.confirm-footers').fadeIn('fast');
            });
            $('.modal-title').html('Confirm');
        });
        $('.error').removeClass('alert alert-danger').html('');

    }
    showAnimalsForm(){
        $('#animalsModal .confirmBox').fadeOut('fast',function(){
            $('.animalsBox').fadeIn('fast');
            $('.confirm-footers').fadeOut('fast',function(){
                $('.animals-footers').fadeIn('fast');
            });

            $('.modal-title').html('Edit Animal');
        });
        $('.error').removeClass('alert alert-danger').html('');
    }

}
