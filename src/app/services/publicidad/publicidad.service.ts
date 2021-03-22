import { PostPublicidad } from '../../core/admin/empleos';
import { Empleo } from '../../core/admin/empleos';
import { Publicidad } from '../../core/admin/empleos';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PublicidadService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getEmpleos() {
    console.log("RUTA :" + this.baseUrl);
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getEmpleo(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idpublicidad=${id}`);
  }

  addEmpleo(empleo: PostPublicidad) {
    console.log(empleo);
    return this.http.post(`${this.baseUrl}/post.php`, empleo);
  }

  deletePublicidad(empleo: Publicidad) {
    return this.http.delete(`${this.baseUrl}/delete.php?idpublicidad=${empleo}`);
  }

  updatePublicidad(empleo: PostPublicidad) {
    return this.http.put(`${this.baseUrl}/update.php`, empleo);
  }

  getPublicidad() {
    return this.http.get(`${this.baseUrl}/getAllBanner.php`);
  }


}