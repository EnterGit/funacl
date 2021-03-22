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
 
   // console.log("Valor desde Servicio:" + EvaluacionEmpleado);
    //return this.http.post(`${this.baseUrl}/Empresa/evaluarEmpleado/postEvaluarEmpleado.php`, EvaluacionEmpleado);
    return this.http.post(`${this.baseUrl}/Empresa/evaluarEmpleado/postEvaluarEmpleado.php`, EvaluacionEmpleado,{observe: 'events'});
    
  }

  ActualizarEvaluacion(EvaluacionEmpleado: registroempleado) {
  
    return this.http.post(`${this.baseUrl}/Empresa/evaluarEmpleado/postActualizarEvaluacion.php`, EvaluacionEmpleado,{observe: 'events'});

  }

//Se utiliza, cuando se requiere editar la evaluación
getEditarEvaluacion(IDevaluacion: string | number) {
  console.log("Servicio Editar" + IDevaluacion);
  return this.http.get(`${this.baseUrl}/Empresa/evaluarEmpleado/getEditarEvaluacion.php?IDevaluacion=${IDevaluacion}`);

  
}
}
