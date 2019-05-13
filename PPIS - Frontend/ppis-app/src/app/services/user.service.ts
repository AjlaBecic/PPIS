import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import config from '../config/api.json';
import { User } from '../models/user.js';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject : BehaviorSubject<User>;
  currentUser : Observable<User>;
  constructor(private http : HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();

   }

  login(username : string, password : string) {
    return this.http.post<any>(`${config.api.url}/user/login`, {username, password})
          .pipe(map(response => {
            if (response.statusCode == 200) {
              var user = response.data;
              if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                this.currentUserSubject.next(user); 
              }
            }

            return response;
          }));
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}
