import { Empleo } from './../empleos';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleosService {
  baseUrl = environment.baseUrl



  constructor(private http: HttpClient) { }

  getEmpleos() {
    console.log("RUTA :" + this.baseUrl);
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getEmpleo(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idEmpleo=${id}`);
  }

  addEmpleo(empleo: Empleo) {
    return this.http.post(`${this.baseUrl}/post.php`, empleo);
  }

  deleteEmpleo(empleo: Empleo) {
    return this.http.delete(`${this.baseUrl}/delete.php?idEmpleo=${empleo.idEmpleo}`);
  }

  updateEmpleo(empleo: Empleo) {
    return this.http.put(`${this.baseUrl}/update.php`, empleo);
  }

  getPublicidad() {
    console.log("RUTA :" + this.baseUrl);
    return this.http.get(`${this.baseUrl}/getAllBanner.php`);
  }


}