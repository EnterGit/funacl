import { Lregiones, Lcomuna } from './../../core/parametros/regiones.model';

import { LisregionesService } from './../../services/parametros/lisregiones.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-empleo',
  templateUrl: './gestionar-empleo.component.html',
  styleUrls: ['./gestionar-empleo.component.css']
})
export class GestionarEmpleoComponent implements OnInit {

  titulo: string;
  imagenTitulo: string;
  curso: string;
  formGestionaEmpleos: FormGroup;

  public regionesModel: Lregiones[] = [new Lregiones(0, "prueba")];
  public comunaModel: Lcomuna[] = [new Lcomuna(0, "")];


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private regionService: LisregionesService,
  ) {
    this.creaFormEmpleo();

  }

  ngOnInit(): void {
    this.titulo = "Gestión Empleo";
    this.imagenTitulo = "https://pyme.emol.com/wp-content/uploads/2020/06/apoyo-al-empleo.jpg";
    this.curso = "OS-10";
    this.obtenerRegiones();
   }


  creaFormEmpleo() {
    this.formGestionaEmpleos = this.fb.group({
      cargoEmpleo: ['', Validators.required],
      profesion: ['', Validators.required],
      vacantes: ['', Validators.required],
      empresa: ['', Validators.required],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      dirección: ['', Validators.required],
      fecPostulacion: ['', Validators.required],
      jornada: ['', Validators.required],
      sueldo: ['', Validators.required],
      educacion: ['', Validators.required],
      experiencia: ['', Validators.required],
      tipoContrato: ['', Validators.required],
      descEmpleo: ['', Validators.required],
    })
  }

  obtenerRegiones() {
    return this.regionService.getRegiones().subscribe((regionesModel: Lregiones[]) => this.regionesModel = regionesModel);
  }

  onChangeComuna(value) {
    return this.regionService.getComunas(value).subscribe((comunaModel: Lcomuna[]) => this.comunaModel = comunaModel);
  }

}


