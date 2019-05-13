import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from '../models/problem';

import config from '../config/api.json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http : HttpClient
  ) { }

  newClientRequest(problem : Problem) {
    return this.http.post<any>(`${config.api.url}/problem`, {'problem' : problem})
    .pipe(map(response => {
      return response;
    }));
  }
}
