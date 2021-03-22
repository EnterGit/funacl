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

   ConsultarEmpleado(rutEmpleado: string | number) {
  return this.http.get(`${this.baseUrl}/Empresa/consultarempleado/getListarEvaluacionEmpleado.php?rutEmpleado=${rutEmpleado}`);
   
  }
//Lista todos los evaluados
  ListarTodosLosEvaluados() {
    return this.http.get(`${this.baseUrl}/Empresa/consultarempleado/getListasTodosLosEvaluados.php?`);
     
    }

//getEvaluacionEmpresaEmpleado(rutEmpleado: string | number, rutEmpresa: string | number, idarticulo: string | number, idinciso: string | number)
getEvaluacionEmpresaEmpleado(rutEmpleado: string | number, rutEmpresa: string | number, )
{
console.log("Ejecuto desde ebvaluacion empresa1234");
console.log(rutEmpresa);
console.log(rutEmpleado);
  return this.http.get(`${this.baseUrl}/Empresa/misevaluaciones/getListarMisEvaluacionesEmpleado.php?rutEmpleado=${rutEmpleado}&rutEmpresa=${rutEmpresa}`);


}

  getListaEvaluacionEmpleado(rutEmpleado: string | number) {
    console.log("Servicio ConsultarEmpleado" + rutEmpleado);
    return this.http.get(`${this.baseUrl}/Empresa/consultarempleado/getListarEvaluacionEmpleado.php?empleado=${rutEmpleado}`);
   
  }


  
  deleteEvaluacion(idEvaluacion: string | number) {
    console.log("eliminar desde servicio" +  idEvaluacion);
    return this.http.delete(`${this.baseUrl}/Empresa/evaluarEmpleado/deleteEvaluacion.php?IDevaluacion=${idEvaluacion}`);
  }

  
}
