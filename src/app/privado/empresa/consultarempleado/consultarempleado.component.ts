import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash, faHandPaper, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt, faTh, faCalendar, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import * as $ from 'jquery';

//Material
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogoconfirmacionComponent } from '../../../dialogoconfirmacion/dialogoconfirmacion.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogConfig } from '@angular/material/dialog';
// import {MatTableModule} from '@angular/material/table';
// import {MatSortModule} from '@angular/material/sort';
// import {MatPaginatorModule} from '@angular/material/paginator';


//Servicios
import { consultarempleado } from '../../../core/empresa/consultarempleado';
import { ConsultarempleadoService } from '../../../services/empresa/consultarempleado/consultarempleado.service';
import { DetallemisevaluacionesComponent } from '../../empresa/detallemisevaluaciones/detallemisevaluaciones.component';


@Component({
  selector: 'app-consultarempleado',
  templateUrl: './consultarempleado.component.html',
  styleUrls: ['./consultarempleado.component.css']
})
export class ConsultarempleadoComponent implements OnInit {
  public disableTextbox;
  public rutConsultado;
  public showSpinner = false;

  public empleados: consultarempleado[] = [
    new consultarempleado("11111", "pruea", "11111", "empresa x", "2021-02-02", "2021-02-02", "", "articulo", "", "inciso", "observacion", "si", "si")
  ];


  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private servicioConsulta: ConsultarempleadoService,
    private dialogo: MatDialog,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,


  ) { }

  ngOnInit(): void {
    this.obtenerConsultado();
  }





  // obtenerConsultado(){
  //  console.log("Ejecuto" + this.rutConsultado);
  //  return this.servicioConsulta.getListaEvaluacionEmpleado(this.rutConsultado).
  //   subscribe((empleado:consultarempleado[])=> this.empleado = empleado);
  // }

  //  return this.servicioConsulta.getListaEvaluacionEmpleado(this.rutConsultado).subscribe((articulomodel:Larticulos[]) => this.articulomodel = articulomodel);

  onChange(enable: boolean) {

    if (enable) {
      this.rutConsultado = "";
      this.rutConsultado = "Traer Todos los evaluados";
      this.disableTextbox = true;

      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
      }, 5000
      )

      return this.servicioConsulta.ListarTodosLosEvaluados().
        subscribe((empleados: consultarempleado[]) => this.empleados = empleados);

    }
    else {
      this.disableTextbox = false;
      console.log("luego b" + this.disableTextbox);
      this.rutConsultado = "";


    }

  }


  onSubmit() {

  }


  verDetalle() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "800px";
    dialogConfig.height = "600px";

    this.dialog.open(DetallemisevaluacionesComponent, dialogConfig);

    //  this.dialog.open(DetallemisevaluacionesComponent, {
    //    height: '400px',
    //    width: '600px',
    // });
  }

  obtenerConsultado() {

    console.log("Ejecuto" + this.rutConsultado);
    return this.servicioConsulta.ConsultarEmpleado(this.rutConsultado).
      subscribe((empleados: consultarempleado[]) => this.empleados = empleados);



  }

}
