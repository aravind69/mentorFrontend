import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import {GlobalConstants} from 'GlobalConstants'

import { User } from 'app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GlobalConstants} from 'GlobalConstants'

import { User } from 'app/_models';
import { RequestOptions } from '@angular/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {
        // const yourHeader: HttpHeaders = new HttpHeaders({
        //     Authorization: 'Bearer JWT-token'
        // });
      
     }
      
>>>>>>> 1153608bcb747cc8301a8747e89d3db38581f278
    getAll() {
        return this.http.get<User[]>(`${GlobalConstants.apiURL}/mentorUsers`);
    }

    register(user: User) {
        debugger;
        return this.http.post(`${GlobalConstants.apiURL}/mentorUsers/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${GlobalConstants.apiURL}/mentorUsers/${id}`);
    }
<<<<<<< HEAD
=======
    updateUser(user: User,id) {
        debugger
    //     let header = new Headers({ 'Authorization': `Bearer ${id}` });
    // const options = new RequestOptions({
    //    headers: header,
    // });
        return this.http.put(`${GlobalConstants.apiURL}/mentorUsers/${id}`, user);
    }
>>>>>>> 1153608bcb747cc8301a8747e89d3db38581f278
}