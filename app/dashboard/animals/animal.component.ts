/**
 * Created by Wajid on 5/21/2017.
 */
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnimalsService } from '../../_services/animals.service';
import {Animal} from "../../_modals/animal";


declare var $:any;

@Component({
    selector: 'animal-cmp',
    moduleId: module.id,
    templateUrl: 'animal.component.html'
})

export class AnimalComponent implements OnInit{
    animals: Animal[];
    constructor(public animalService: AnimalsService){}
    ngOnInit(){
        this.animalService.getAnimals().subscribe((response)=> {
            this.animals = response;
        });
    }
}
