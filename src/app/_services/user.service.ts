import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalConstants} from 'GlobalConstants'

import { User } from 'app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

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
}