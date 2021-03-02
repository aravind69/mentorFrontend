﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'app/_models';
import { GlobalConstants } from 'GlobalConstants';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get userValue(): User {
        return this.currentUserSubject.value;
    }
    public getToken(): string {
        debugger;
         let user =  JSON.parse(localStorage.getItem('currentUser'));
         return user.token;
      }
      public isAuthenticated(): any {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
       // return tokenNotExpired(null, token);
      }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(userName, password) {
        debugger;
        return this.http.post<any>(`${GlobalConstants.apiURL}/mentorUsers/authenticate`, { userName, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}