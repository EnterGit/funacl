import { PostEmpleos } from './../../../core/admin/empleos';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PubempleosService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  addEmpleos(empleos: PostEmpleos) {
    return this.http.post(`${this.baseUrl}/empleos/postEmpleos.php`, empleos ,{observe: 'events'});
  }

  listadoEmpleos() {
    console.log("RUTA :" + this.baseUrl);
    return this.http.get(`${this.baseUrl}/empleos/getAllEmpleos.php`);
  }

  getOneEmpleo(id: string | number) {
    console.log("llama empleo" + id);
    return this.http.get(`${this.baseUrl}/empleos/getOneEmpleo.php?idempleo=${id}`);
  }

  updateEmpleo(empleo: PostEmpleos) {
    return this.http.put(`${this.baseUrl}/empleos/updateEmpleos.php`, empleo);
  }

  deleteEmpleo(empleo: PostEmpleos) {
    return this.http.delete(`${this.baseUrl}/empleos/deleteEmpleo.php?idEmpleos=${empleo}`);
  }

}
