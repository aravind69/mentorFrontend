import { Injectable } from '@angular/core';
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
      
    getAll() {
        return this.http.get<User[]>(`${GlobalConstants.apiURL}/mentorUsers`);
    }

    register(user: User) {
       
        return this.http.post(`${GlobalConstants.apiURL}/mentorUsers/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${GlobalConstants.apiURL}/mentorUsers/${id}`);
    }
    updateUser(user: User,id) {
        debugger
    //     let header = new Headers({ 'Authorization': `Bearer ${id}` });
    // const options = new RequestOptions({
    //    headers: header,
    // });
        return this.http.put(`${GlobalConstants.apiURL}/mentorUsers/${id}`, user);
    }
}