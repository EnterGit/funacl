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




getBuscarEmpleado(idcargo: string | number, idcurso: string | number, idsexo: string | number, idregion: string | number,  idcomuna: string | number, idturno: string | number)
{
  console.log("Servicio idcargo" + idcargo);
  console.log("Servicio idcursos" +  idcurso);
  console.log("Servicio idsexo" +idsexo);
  console.log("Servicio idregion" +  idregion);
  console.log("Servicio idcomuna" + idcomuna);
  console.log("Servicio idturno" + idturno);

  return this.http.get(`${this.baseUrl}/Empresa/buscarperfil/getListarPerfil.php?idcargo=${idcargo}&idcurso=${idcurso}&idsexo=${idsexo}&idregion=${idregion}&idcomuna=${idcomuna}&idturno=${idturno}`);
}


}





