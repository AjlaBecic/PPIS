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

  getRequestes() {
    return this.http.get<any>(`${config.api.url}/problem/allRequests`)
    .pipe(map(response => {
      return response;
    }));
  }

  getRequest(id) {
    return this.http.get<any>(`${config.api.url}/problem/request`, {params : {'id' : id}})
    .pipe(map(response => {
      return response;
    }));
  }

  markAsProblem(id) {
    return this.http.put<any>(`${config.api.url}/problem/markProblem`, {'problemId' : id})
    .pipe(map(response => {
      return response;
    }));
  }

  markAsDone(id) {
    return this.http.put<any>(`${config.api.url}/problem/done`, {'problemId' : id})
    .pipe(map(response => {
      return response;
    }));
  }
  markAsClosed(id) {
    return this.http.put<any>(`${config.api.url}/problem/closed`, {'problemId' : id})
    .pipe(map(response => {
      return response;
    }));
  }
  markAsProgress(id) {
    return this.http.put<any>(`${config.api.url}/problem/progress`, {'problemId' : id})
    .pipe(map(response => {
      return response;
    }));
  }
  dodijeliTehnicaru(id) {
    console.log("ovdje", id);
    return this.http.put<any>(`${config.api.url}/problem/dodijeliTehnicaru`, {'problemId' : id})
    .pipe(map(response => {
      return response;
    }));
  }

  getNewProblems() {
    return this.http.get<any>(`${config.api.url}/problem/new`)
    .pipe(map(response => {
      return response;
    }));
  }

  getNewProblemsTech() {
    return this.http.get<any>(`${config.api.url}/problem/tech`)
    .pipe(map(response => {
      return response;
    }));
  }
  getAllProblems() {
    return this.http.get<any>(`${config.api.url}/problem/all`)
    .pipe(map(response => {
      return response;
    }));
  }



  getProblem(id) {
    return this.http.get<any>(`${config.api.url}/problem`, {params : {'id' : id}})
    .pipe(map(response => {
      return response;
    }));
  }
}
