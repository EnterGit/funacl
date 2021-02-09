import { Lregiones } from './../../core/parametros/regiones.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LisregionesService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getRegiones() {
    console.log("RUTA :" + this.baseUrl);
    return this.http.get(`${this.baseUrl}/parametros/getRegiones.php`);
  }

  getComunas(id: string | number) {
    return this.http.get(`${this.baseUrl}/parametros/getComunas.php?region=${id}`);
  }


}
