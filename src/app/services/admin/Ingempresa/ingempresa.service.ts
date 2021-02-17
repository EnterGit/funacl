import { PerfilEmpresa } from './../../../core/admin/perfilempresa';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngempresaService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  addEmpresa(empresa: PerfilEmpresa) {
    return this.http.post(`${this.baseUrl}/ingEmpresa/postEmpresa.php`, empresa ,{observe: 'events'});
  }

  listadoEmpresa() {
    console.log("RUTA :" + this.baseUrl);
    return this.http.get(`${this.baseUrl}/ingEmpresa/getEmpresa.php`);
  }

  deleteEmpresa(idEmpresa: PerfilEmpresa) {
    return this.http.delete(`${this.baseUrl}/ingEmpresa/deleteEmpresa.php?idEmpresa=${idEmpresa}`);
  }


}
