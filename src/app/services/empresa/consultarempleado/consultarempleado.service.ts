import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {consultarempleado} from '../../../core/empresa/consultarempleado';
import {environment} from '../../../../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarempleadoService {
  rutConsultado;

  baseUrl = environment.baseUrl
  constructor(private http:HttpClient) { }

   ConsultarEmpleado(rutConsultado) {
   return this.http.get(`${this.baseUrl}/get.php?rut=${rutConsultado}`);
  }
  
}
