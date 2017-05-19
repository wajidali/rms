/**
 * Created by Wajid on 5/19/2017.
 */
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Router} from '@angular/router';
// import { LocalStorageService } from 'angular-2-local-storage';
import { ROUTES } from '../sidebar/sidebar-routes.config';
import {isUndefined} from "util";

// import { appSettings } from '../app.module';
// import { User } from '../_models/index';
import {config} from '../config';

@Injectable()
export class AuthenticationService {
    public menuItems: any[];
    loggedIn:boolean = false;
     configData: any;
    constructor(private http: Http, private router: Router) {
        this.configData = config.getEnvironmentVariable();
    }


    login(username: string, password: string) {
        this.http.get(this.configData.endpoint+"api/default").subscribe((r)=> {console.log(r);});
       // var API_URL = appSettings.settings.serviceApiUrl + '/api/user/authenticate';

        // return this.http.post(
        //     API_URL
        //     , JSON.stringify({ UserName: username, Password: password })
        //     , this.jwt())
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user: User = response.json();
        //         if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({}));
                    this.loggedIn = true;

            //     }
            // });
    }



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedIn = false;
        this.router.navigate(['/login']);
    }

    getLoggedIn() {
        return JSON.parse(localStorage.getItem('currentUser').toString())
    }

    private jwt() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}