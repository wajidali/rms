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
    animal: Animal = {Age: 0, Id: 0, YearOfBirth: 0, Name:"", Species: null, SpeciesFK: 0};
    species: Species[];
    constructor(public animalService: AnimalsService, public speciesService: SpeciesService){}
    ngOnInit(){
        this.animalService.getAnimals().subscribe((response)=> {
            this.animals = response;
        });
        this.speciesService.getSpecies().subscribe((response)=> {
            this.species = response;
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

    deleteAnimal(id: number){
        this.animalService.deleteAnimal(id).subscribe((res)=>{
            $('#animalsModal').modal('hide');
        })
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
