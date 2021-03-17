import { PostulantesModel } from './../../../core/publico/postulantes.model';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostulantesService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  addPostulantes(empleos: PostulantesModel) {
    return this.http.post(`${this.baseUrl}/postulantes/postPostulantes.php`, empleos, { observe: 'events' });
  }

  listadoPostulantes() {
    console.log("RUTA :" + this.baseUrl);
    return this.http.get(`${this.baseUrl}/postulantes/getAllPostulantes.php`);
  }

  getOnePostulantes(id: string | number) {
    console.log("llama Postulante  " + id);
    return this.http.get(`${this.baseUrl}/postulantes/getOnePostulante.php?Rut=${id}`);
  }

  updatePostulantes(empleo: PostulantesModel) {
    return this.http.put(`${this.baseUrl}/postulantes/updatePostulantes.php`, empleo);
  }

  deletePostulantes(empleo: PostulantesModel) {
    return this.http.delete(`${this.baseUrl}/postulantes/deletePostulantes.php?idPostulantes=${empleo}`);
  }

  verificaRutPostulante(rutPostulante: string) {
    console.log("LLAMA A CONSULTAR RUT :" + rutPostulante);
    return this.http.get(`${this.baseUrl}/postulantes/verificaRutPostulante.php?rutPostulante='${rutPostulante}'`);
  }
}
