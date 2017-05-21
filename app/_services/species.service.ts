/**
 * Created by Wajid on 5/21/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {config} from "../config";
import { Observable } from 'rxjs/Observable';
import {Species} from "../_modals/species";

@Injectable()
export class SpeciesService {
    API_URL = "";
    constructor(private http: Http) {
        this.API_URL = config.getEnvironmentVariable().endPoint;
    }

    getSpecies(): Observable<Species[]>{
        return this.http.get(this.API_URL + 'api/species').map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return options;
    }

}