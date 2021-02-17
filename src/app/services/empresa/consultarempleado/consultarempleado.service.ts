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

getEvaluacionEmpresaEmpleado(rutEmpleado: string | number, rutEmpresa: string | number)
{
  console.log("Servicio MisReferidos, Rut empleado" + rutEmpleado);
  console.log("Servicio MisReferidos, Rut empresa" +  rutEmpresa);

  return this.http.get(`${this.baseUrl}/Empresa/misevaluaciones/getListarMisEvaluacionesEmpleado.php?empleado=${rutEmpleado}&empresa=${rutEmpresa}`);
}

  getListaEvaluacionEmpleado(rutEmpleado: string | number) {
    console.log("Servicio ConsultarEmpleado" + rutEmpleado);
    return this.http.get(`${this.baseUrl}/Empresa/consultarempleado/getListarEvaluacionEmpleado.php?empleado=${rutEmpleado}`);

    
  }
  
}
