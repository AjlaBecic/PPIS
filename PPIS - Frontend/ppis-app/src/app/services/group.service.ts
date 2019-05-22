import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from '../config/api.json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() {
    return this.http.get<any>(`${config.api.url}/group/all`)
    .pipe(map(response => {
      console.log(response);
      return response;
    }));
  }
}
