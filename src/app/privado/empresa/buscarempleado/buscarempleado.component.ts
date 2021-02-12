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
import { Lregiones, Lcomuna } from '../../../core/parametros/regiones.model';
import {Lturnos,Lcargo,Lcursos} from '../../../core/parametros/filtros.model';
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

export interface EmpleadoTST{
  id: string;
  rut : string,
  nombreCompleto : string,
  rutEmpresa: string,
  nombreEmpresa : string,
  fechaIngreso : string,
  fechaFin: string,
  idArticulo : string,
  nombreArticulo : string,
  idInciso : string,
  nombreInciso : string,
  observacion : string,
  autorizacion : string,
  recomienda : string

}

const ELEMENT_DATA2: EmpleadoTST[] = [
  {id: '1', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '2', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '3', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '4', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '5', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '6', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '7', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '8', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '9', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
  {id: '10', rut: '1111111-1',nombreCompleto:'JuanPerez',rutEmpresa:'33333-3',nombreEmpresa:'empresa 1', fechaIngreso:'2012-11-01', fechaFin:'2013-10.12', idArticulo:'1',nombreArticulo:'necesidades empresa', idInciso:'1', nombreInciso:'articulo', observacion:'Sin obs', autorizacion:'Si', recomienda:'Si'},
 
];

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
  
  public regionesModel: Lregiones[] = [new Lregiones(0, "prueba")];
  public comunaModel: Lcomuna[] = [new Lcomuna(0, "algo")];
  public cursoModel: Lcursos[] = [new Lcursos(0, "prueba", "")];
  public cargoModel: Lcargo[] = [new Lcargo(0, "prueba", "")];
  public turnoModel: Lturnos[] = [new Lturnos(0, "prueba", "")];

  displayedColumns: string[] = ['id', 'rut', 'nombreCompleto', 'rutEmpresa','nombreEmpresa', 'fechaIngreso','fechaFin','nombreArticulo','nombreInciso', 'observacion' ];
  dataSource = new MatTableDataSource<EmpleadoTST>(ELEMENT_DATA2);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


 


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private regionService: LisregionesService,
    private comboService: FiltrosService,
    private dialogo: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.creaFormBuscarPerfil();
   }

  ngOnInit(): void {
    this.obtenerRegiones();
  }


  creaFormBuscarPerfil() {
    this.formBuscar = this.fb.group({
      idcardo: ['', Validators.required],
      nombrecargo: ['', Validators.required],
      idcurso: ['', Validators.required],
      nombrecurso: ['', Validators.required],
      idsexo: ['', Validators.required],
      nombresexo: ['', Validators.required],
      idregion: ['', Validators.required],
      nombreregion: ['', Validators.required],
      idcomuna: ['', Validators.required],
      nombrecomuna: ['', Validators.required],
      idturno: ['', Validators.required],
      nombreturno: ['', Validators.required]
    })
  }

  obtenerRegiones() {
    return this.regionService.getRegiones().subscribe((regionesModel: Lregiones[]) => this.regionesModel = regionesModel);
  }
  onChangeComuna(value) {
    return this.regionService.getComunas(value).subscribe((comunaModel: Lcomuna[]) => this.comunaModel = comunaModel);
  }
  
  obtenerCargo() {
    return this.comboService.getListarCargo().subscribe((cargoModel: Lcargo[]) => this.cargoModel = this.cargoModel);
  }
  obtenerTurno() {
    return this.comboService.getListarTurno().subscribe((turnoModel: Lturnos[]) => this.turnoModel = this.turnoModel);
  }

  onChangeCurso(value) {
    return this.comboService.getListaCursos(value).subscribe((cursoModel: Lcursos[]) => this.cursoModel = cursoModel);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

}
