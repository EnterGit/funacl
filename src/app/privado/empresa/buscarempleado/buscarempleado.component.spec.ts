import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {buscarperfil} from '../../../core/empresa/buscarperfil';
import {environment} from '../../../../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarempleadoService {
  
  baseUrl = environment.baseUrl
  constructor(private http:HttpClient) { }

  addEvaluacionEmpleado(PerfilBuscado: buscarperfil) {
    alert("ejecuto por aqui ");
    return this.http.post(`${this.baseUrl}/getAll.php`, PerfilBuscado);
  }
}
