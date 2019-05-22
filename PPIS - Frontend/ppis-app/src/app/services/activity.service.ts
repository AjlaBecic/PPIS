import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../config/api.json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http : HttpClient
  ) { }

  newActivity(activity) {
    return this.http.post<any>(`${config.api.url}/activity/new`, { 'activity' : activity})
    .pipe(map(response => {
      return response;
    }));
  }

  allActivites(id) {
    return this.http.get<any>(`${config.api.url}/activity/all`, {params : {'id' : id}})
    .pipe(map(response => {
      return response;
    })); 
  }
}
