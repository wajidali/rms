/**
 * Created by Wajid on 5/21/2017.
 */
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import {Species} from "../../_modals/species";
import {SpeciesService} from "../../_services/species.service";


declare var $:any;

@Component({
    selector: 'species-cmp',
    moduleId: module.id,
    templateUrl: 'species.component.html'
})

export class SpeciesComponent implements OnInit{
    species: Species[];
    constructor(public speciesService: SpeciesService){}
    ngOnInit(){
        this.speciesService.getSpecies().subscribe((response)=>{
            this.species = response;
        })
    }
}
