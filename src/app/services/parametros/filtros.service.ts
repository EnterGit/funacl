import { Lcargo,Lcursos,Lturnos } from './../../core/parametros/filtros.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
  baseUrl = environment.baseUrl
 
  constructor(private http: HttpClient) { }

  getListarCargo() {
    console.log("RUTA :" + this.baseUrl);
    return this.http.get(`${this.baseUrl}/Empresa/comboempresa/getListarCargo.php`);
  }
  
  

  getListaCursos(id: string | number) {
    console.log("Servicio Inciso" + id);
    return this.http.get(`${this.baseUrl}/Empresa/comboempresa/getListarCurso.php?cursos=${id}`);
    
  }

  getListarTurno() {
    return this.http.get(`${this.baseUrl}/Empresa/comboempresa/getListarTurnos.php`);
  }



}
