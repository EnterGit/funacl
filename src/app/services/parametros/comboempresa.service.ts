import { Injectable } from '@angular/core';
import {Larticulos,Lcausal,Linciso} from '../../core/empresa/comboempresa.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComboempresaService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getListaArticulos() {
    console.log("RUTA :" + this.baseUrl);
        return this.http.get(`${this.baseUrl}/Empresa/comboempresa/getListaArticulos.php`);

  }

  getListaIncisos(id: string | number) {
    console.log("Servicio Inciso" + id);
    return this.http.get(`${this.baseUrl}/Empresa/comboempresa/getListaInciso.php?articulo=${id}`);

    
  }
  getListaCausal(id: string | number) {
    //return this.http.get(`${this.baseUrl}/Empresa/evaluarEmpleado/getListaInciso.php?idarticulo=${id}`);
  }
}
