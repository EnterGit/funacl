import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash, faHandPaper, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt, faTh, faCalendar, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
import * as $ from 'jquery';

//Modelo
import {buscarperfil} from '../../../core/empresa/buscarperfil';
import {consultarperfil} from '../../../core/empresa/consultarperfil';
import { Lregiones, Lcomuna } from '../../../core/parametros/regiones.model';
import {Lturnos,Lcargo,Lcursos, LSexo} from '../../../core/parametros/filtros.model';
import {perfil} from  '../../../core/empresa/perfil';
//Servicio
import {BuscarempleadoService} from "../../../services/empresa/buscarempleado/buscarempleado.service";
import { LisregionesService } from '../../../services/parametros/lisregiones.service';
import {FiltrosService} from '../../../services/parametros/filtros.service';
//Material
import { MatDialog } from '@angular/material/dialog';
import { DialogoconfirmacionComponent } from "../../../dialogoconfirmacion/dialogoconfirmacion.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { importType } from '@angular/compiler/src/output/output_ast';

Component({
  selector: 'app-buscarempleado',
  templateUrl: './buscarempleado.component.html',
  styleUrls: ['./buscarempleado.component.css']
})

@Component({
  selector: 'app-buscarempleado',
  templateUrl: './buscarempleado.component.html',
  styleUrls: ['./buscarempleado.component.css']
})


export class BuscarempleadoComponent implements OnInit {
  formBuscar: FormGroup;
  titulo: string;
  imagenTitulo: string;
  curso: string;

  //Valores Seleccionados
  public idCargo: string;
  public idCurso: string;
  public idSexo: string;
  public idRegion: string;
  public idComuna: string;
  public idTurno: string;

  public regionesModel: Lregiones[] = [new Lregiones(0, "prueba")];
  public comunaModel: Lcomuna[] = [new Lcomuna(0, "algo")];
  public cursoModel: Lcursos[] = [new Lcursos(0, "prueba", "")];
  public cargoModel: Lcargo[] = [new Lcargo(0, "prueba", "")];
  public turnoModel: Lturnos[] = [new Lturnos(0, "prueba", "")];
  public SexoModel: LSexo[] = [new LSexo(0, "prueba", "")];
  public buscarperfil: perfil[] = [
      new perfil(
          '1',
          '1-7',
          'Juan Perez',
          'Guardia',
          'OS-10',
          'Masculino',
          'Media',
          'basico',
          'Estacion Central',
          'Completo',
          'Más de 5 años',
          'emaiñ@email.com',
          '222222',
      ),

      new perfil(
          '1',
          '1-9',
          'Juan Perez',
          'Guardia',
          'OS-10',
          'Masculino',
          'Media',
          'basico',
          'Estacion Central',
          'Completo',
          'Más de 5 años',
          'emaiñ@email.com',
          '222222',
      ),
      new perfil(
          '2',
          '1-9',
          'Juan Perez',
          'Guardia',
          'OS-10',
          'Masculino',
          'Media',
          'basico',
          'Estacion Central',
          'Completo',
          'Más de 5 años',
          'emaiñ@email.com',
          '222222',
      ),
      new perfil(
          '3',
          '1-9',
          'Juan Perez',
          'Guardia',
          'OS-10',
          'Masculino',
          'Media',
          'basico',
          'Estacion Central',
          'Completo',
          'Más de 5 años',
          'emaiñ@email.com',
          '222222',
      ),

  ];

  



  displayedColumns: string[] = [
      'idEvaluacion',
      'rutempleado',
      'nombreempleado',
      'cargo',
      'cursos',
      'sexo',
      'educacion',
      'nivelcomputacional',
      'comuna',
      'turno',
      'experiencia',
      'email',
      'telefono'
  ];



  constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private regionService: LisregionesService,
      private buscarPerfilServices: BuscarempleadoService,
      private comboService: FiltrosService,
      private dialogo: MatDialog,
      private snackBar: MatSnackBar
  ) {
      this.creaFormBuscarPerfil();
  }

  ngOnInit(): void {
      this.obtenerRegiones();
      this.obtenerCargo();
      this.obtenerCursos();
      this.obtenerSexo();
      this.obtenerTurno();
  }


  creaFormBuscarPerfil() {
      this.formBuscar = this.fb.group({
          // idcardo: ['', Validators.required],
          // idcurso: ['', Validators.required],
          // idsexo: ['', Validators.required],
          // idregion: ['', Validators.required],
          // idcomuna: ['', Validators.required],
          // idturno: ['', Validators.required],

      })
  }

  obtenerRegiones() {
      return this.regionService.getRegiones().subscribe((regionesModel: Lregiones[]) => this.regionesModel = regionesModel);
  }
  onChangeComuna(value) {
      this.idRegion = value;
      console.log("valor region" + this.idRegion);
      return this.
      regionService.getComunas(value).subscribe((comunaModel: Lcomuna[]) => this.comunaModel = comunaModel);
  }

  obtenerCargo() {
      return this.regionService.getParametros("4").subscribe((cargoModel: Lcargo[]) => this.cargoModel = cargoModel);

  }
  obtenerCursos() {
      return this.regionService.getParametros("5").subscribe((cursoModel: Lcursos[]) => this.cursoModel = cursoModel);

  }

  obtenerSexo() {
      return this.regionService.getParametros("6").subscribe((SexoModel: LSexo[]) => this.SexoModel = SexoModel);

  }


  obtenerTurno() {
      return this.regionService.getParametros("3").subscribe((turnoModel: Lturnos[]) => this.turnoModel = turnoModel);

  }
  // onChangeCurso(value) {
  //   return this.comboService.getListaCursos(value).subscribe((cursoModel: Lcursos[]) => this.cursoModel = cursoModel);
  // }

  ListarPerfiles() {

  }
  //Valores seleciconados
  onChangecargo(value) {
      this.idCargo = value;
      console.log("Valor del cargo" + this.idCargo);
  }

  onChangecurso(value) {
      this.idCurso = value;
      console.log("Valor del idCurso" + this.idCurso);
  }

  onChangesexo(value) {
      this.idSexo = value;
      console.log("Valor del idSexo" + this.idSexo);
  }

  onChangecomuna(value) {
      this.idComuna = value;
      console.log("Valor del idComuna" + this.idComuna);
  }

  onChangeturno(value) {
      this.idTurno = value;
      console.log("Valor del idTurno" + this.idTurno);
  }




  onSubmit() {



if (this.idCargo = "0") 
{
    this.idCargo = "0";
}
if (this.idCurso = "0") 
{
    this.idCurso = "0";
}
if (this.idSexo = "0") 
{
    this.idSexo = "0";
}
if (this.idRegion =  "0") 
{
    this.idRegion= "0";
}
if (this.idComuna = "0") 
{
    this.idComuna = "0";
}

if (this.idTurno = "0") 
{
    this.idTurno = "0";
}

console.log("cargo:"  + this.idCargo);
console.log("curso:"  + this.idCurso);
console.log("sexo:"  + this.idSexo);
console.log("region:"  + this.idRegion);
console.log("comuna:"  + this.idComuna);
console.log("turno:"  + this.idTurno);

// public idCargo:string;
      // public idCurso:string;
      // public idSexo:string;
      // public idRegion:string;
      // public idComuna:string;
      // public idTurno:string;

      return this.buscarPerfilServices.getBuscarEmpleado(this.idCargo,this.idCurso,this.idSexo,this.idRegion, this.idComuna, this.idTurno).
          subscribe((buscarperfil: perfil[]) => this.buscarperfil = buscarperfil);
  }




}
