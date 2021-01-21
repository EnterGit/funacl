import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {registroempleado} from '../../../core/empresa/registroempleado';
import {environment} from '../../../../environments/environment';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistroempleadoService {
  baseUrl = environment.baseUrl
  constructor(private http:HttpClient) { }

  addEvaluacionEmpleado(EvaluacionEmpleado: registroempleado) {
    alert("ejecuto por aqui ");
    return this.http.post(`${this.baseUrl}/postEvaluarEmpleado.php`, EvaluacionEmpleado);
  }


}
