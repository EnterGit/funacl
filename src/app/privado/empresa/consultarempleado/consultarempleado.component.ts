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


@Component({
  selector: 'app-consultarempleado',
  templateUrl: './consultarempleado.component.html',
  styleUrls: ['./consultarempleado.component.css']
})
export class ConsultarempleadoComponent implements OnInit {
  public rutConsultado;
  public  empleados: consultarempleado[] = [ 
    new  consultarempleado ("1111","pruea", "11111", "empresa x", "2021-02-02", "2021-02-02","", "articulo", "","inciso","observacion", "si", "si")
  ];
  
  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private servicioConsulta:ConsultarempleadoService,
    private dialogo: MatDialog,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.obtenerConsultado();
  }
  obtenerConsultado(){
    console.log("Ejecuto" + this.rutConsultado);
      return this.servicioConsulta.
      getListaEvaluacionEmpleado(this.rutConsultado).
      subscribe((empleados: consultarempleado[]) => this.empleados = empleados);
    }

}
