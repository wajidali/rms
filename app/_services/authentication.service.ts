/**
 * Created by Wajid on 5/19/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import {Router} from '@angular/router';

import { User } from '../_modals/user';
import {config} from '../config';

@Injectable()
export class AuthenticationService {

    loggedIn:boolean;
    API_URL = "";
    constructor(private http: Http, private router: Router) {
        this.API_URL = config.getEnvironmentVariable().endPoint;
        this.loggedIn = localStorage.getItem('currentUser') ? true: false;
    }

    login(email: string, password: string) {

        var url = this.API_URL + 'api/users/aut';

        return this.http.post(
            url
            , JSON.stringify({ email: email, password: password })
            , this.jwt())
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response);
                let user: User = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({}));
                    this.loggedIn = true;
                }
            });
    }

    register(user:User){
        var url  = this.API_URL + 'api/users/post';

        return this.http.post(
            url
            , JSON.stringify(user)
            , this.jwt())
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response);
                let user: User = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({}));
                    this.loggedIn = true;
                }
            });
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