import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash, faHandPaper, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt, faTh, faCalendar, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import * as $ from 'jquery';

import { MatDialog } from '@angular/material/dialog';
import { DialogoconfirmacionComponent } from "../../../dialogoconfirmacion/dialogoconfirmacion.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';





import {consultarempleado} from '../../../core/empresa/consultarempleado';
import {ConsultarempleadoService} from '../../../services/empresa/consultarempleado/consultarempleado.service';



export const validarQueSeanIguales: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const rut = control.get("rut")

  return rut.value.rut()
    ? null
    : { noSonIguales: true }
}

declare var $: any;
declare var jQuery: any;

export interface PeriodicElement {
  rut: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
} 
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


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, rut: '15259193-4',name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, rut: '15259193-4', name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, rut: '15259193-4', name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, rut: '15259193-4', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, rut: '15259193-4', name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, rut: '15259193-4', name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7,rut: '15259193-4',  name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8,rut: '15259193-4',  name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9,rut: '15259193-4', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, rut: '15259193-4', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];




@Component({
  selector: 'app-consultarempleado',
  templateUrl: './consultarempleado.component.html',
  styleUrls: ['./consultarempleado.component.css']
})



export class ConsultarempleadoComponent implements OnInit,  AfterViewInit{
  

  public empleado: consultarempleado[] = [new consultarempleado("1111111-1","JuanPerez","33333-3","empresa 1", "2012-11-01", "2013-10.12","1","necesidades empresa", "1","articulo","Sin obs", "Si", "Si")];
 

public rutConsultado;
  // public empleado: consultarempleado[]= [
  //   new consultarempleado("1111111-1","JuanPerez","33333-3","empresa 1", "2012-11-01", "2013-10.12","1","necesidades empresa", "1","articulo","Sin obs", "Si", "Si")
  // ];

  displayedColumns: string[] = ['id', 'rut', 'nombreCompleto', 'rutEmpresa','nombreEmpresa', 'fechaIngreso','fechaFin','nombreArticulo','nombreInciso', 'observacion' ];
  //dataSource = ELEMENT_DATA2;
  dataSource = new MatTableDataSource<EmpleadoTST>(ELEMENT_DATA2);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

//  this.dataSource.paginator = this.paginator;
  formConsultarEmpleado: FormGroup;
  
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faCofee = faCoffee;
  faTh = faTh;
  faCalendar = faCalendar;
  faCalendarAlt = faCalendarAlt;

  Consultado: any = {}

  constructor(
    faConfig: FaConfig,
    library: FaIconLibrary,
    private ruta: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private servicioConsulta:ConsultarempleadoService,
    private dialogo: MatDialog,
    private snackBar: MatSnackBar
 
  ) { 
    faConfig.defaultPrefix = 'far';
    library.addIcons(faUser, faHandPaper, faBellSlash);
    //this.ingresarEvaluacion();
  

  }

  ngOnInit(): void {

  let  rutEmpleadoRe =  this.ruta.snapshot.paramMap.get("id");
  if (rutEmpleadoRe === "0") {
    this.rutConsultado = "";

  } else {
    this.rutConsultado = rutEmpleadoRe;
    //LLAMAR al evento del servicio
  }
console.log("valor entrada:" +  rutEmpleadoRe);


    this.obtenerConsultado();
    //   $(document).ready(function () {
    //   $("input#rut").rut({ formatOn: 'keyup', validateOn: 'keyup' }).on('rutInvalido', function () { 
    //     $(".rutError").addClass("alert alert-danger")
    //     $(".rutError").text("Rut inválido");
    //    }).on('rutValido', function () {
    //        $(".rutError").removeClass("alert alert-danger ")
    //        $(".rutError").empty();
    //       });
    // })

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

onSubmit() {

}
obtenerConsultado(){
 console.log("Ejecuto" + this.rutConsultado);
 return this.servicioConsulta.getListaEvaluacionEmpleado(this.rutConsultado).
  subscribe((empleado:consultarempleado[])=> this.empleado = empleado);

  
//  return this.servicioConsulta.getListaEvaluacionEmpleado(this.rutConsultado).subscribe((articulomodel:Larticulos[]) => this.articulomodel = articulomodel);



  }

 

}