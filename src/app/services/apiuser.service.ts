import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiuserService {

  constructor(protected http: HttpClient) { }


  getUsers() {
    // return this.http.get('https://randomuser.me/api/?results=25');
    return this.http.get('http://localhost:8080/restapi/v1/auto');
  }

}
