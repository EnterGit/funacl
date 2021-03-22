import { Component, OnInit } from '@angular/core';
import { CountryI, CityI } from '../../../core/empresa/model.interface';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';

import { DataService } from '../../../services/empresa/articulo/data.service.service';

import { Router, Params } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash,faHandPaper, faUser} from '@fortawesome/free-regular-svg-icons';
import {faCoffee,faTrash,faTrashAlt,faPencilAlt,faTh,faCalendar,faCalendarAlt,faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators,  FormControl,ValidationErrors,ValidatorFn} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import * as $ from 'jquery';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
//Modeo
import { Larticulos,Linciso, Lcausal } from './../../../core/empresa/comboempresa.model';
import { registroempleado } from '../../../core/empresa/registroempleado';
//Servicio
import { RegistroempleadoService } from '../../../services/empresa/registroempleado/registroempleado.service';
import {ComboempresaService}  from '../../../services/parametros/comboempresa.service';
//Material
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {DialogoconfirmacionComponent} from '../../../dialogoconfirmacion/dialogoconfirmacion.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

declare var $: any;
declare var jQuery: any;
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-detallemisevaluaciones',
  templateUrl: './detallemisevaluaciones.component.html',
  styleUrls: ['./detallemisevaluaciones.component.css']
})
export class DetallemisevaluacionesComponent implements OnInit {
  
  
  datos;
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';

  //Articulos e Incisos
  public articulomodel: Larticulos[] = [new Larticulos(0, "prueba", "aaiiiii articulo")];
  public incisomodel: Linciso[] = [new Linciso(0, "Debe Seleccione Articulo", "", 0)];
  opcion1 = true;
  valor1 = null;
  //Modelo Evaluacion Empleados
  public empleadoModel: registroempleado = new registroempleado('', '', '', '', '', '', '', '', '', '', '', '');



  formListar: FormGroup;
  constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      //Servicio
      private service: RegistroempleadoService,
      private articuloService: ComboempresaService,
      //Material
      private snackBar: MatSnackBar,
      private dialogo: MatDialog,
      private router: Router,
      //Paso Parametro URL
      private ruta: ActivatedRoute,
  ) {
      this.crearForm();

  }



  ngOnInit(): void {

      //Inicializa entrada   
      this.Entrada();

      $(document).ready(function () {
          $("input#rutempleado").rut({ validateOn: 'blur' }).on('rutInvalido', function () {
              $(".rutErrorEmpl").addClass("alert alert-danger")
              $(".rutErrorEmpl").text("Rut inválido");
              $('input#rutErrorEmpl').val("");
      
            }).on('rutValido', function () {
              $(".rutErrorEmpl").removeClass("alert alert-danger ")
              $(".rutErrorEmpl").empty();
            });
       
       
          $("input#rutempresa").rut({ validateOn: 'blur' }).on('rutInvalido', function () {
            $(".rutErrorEmp").addClass("alert alert-danger")
            $(".rutErrorEmp").text("Rut inválido");
            $('input#rutEmpresa').val("");
    
          }).on('rutValido', function () {
            $(".rutErrorEmp").removeClass("alert alert-danger ")
            $(".rutErrorEmp").empty();
          });
             
        })
  }


  //Se encarga de llamar a las funcionalidades de carga
  Entrada() {

      //Carga valores y eventos
      this.ListarArticulos();
      //Valida ingreso desde mi Evaluaciones para editar
      this.EditarEvaluacion();

      //Crea campos requeridos formulario
      this.crearForm();
  }
  //1)Recibe Id Evaluacion desde mis evaluaciones, donde
  //Si biene ID, indica que debe rescatar evaluación y cargarla en pantalla
  EditarEvaluacion() {
      let valorEntrada = this.ruta.snapshot.paramMap.get("id");
      console.log(valorEntrada);
      if (valorEntrada === "0") {

      } else {
          console.log(valorEntrada);
          //Consulta Servicio, para recuperar Evaluacion
          this.service.getEditarEvaluacion(valorEntrada).subscribe((empleadoModel: registroempleado) => {
                  this.empleadoModel = empleadoModel
                  this.onChangeinciso(this.empleadoModel.idarticulo);
              }

          )


      }
  }

  //2) Carga valores de Combo Articulos
  ListarArticulos() {
      return this.articuloService.getListaArticulos().subscribe((articulomodel: Larticulos[]) => this.articulomodel = articulomodel);
  }

  //3) Crea campos requeridos formulario
  crearForm() {
      this.formListar = this.fb.group({
          rutempleado: ['', [Validators.required]],
          nombreempleado: ['', [Validators.required]],
          rutempresa: ['', [Validators.required]],
          nombreempresa: ['', [Validators.required]],
          fechaingreso: ['', [Validators.required]],
          fechatermino: ['', [Validators.required]],
          idarticulo: ['', [Validators.required]],
          idinciso: ['', [Validators.required]],
          Observacion: ['', [Validators.required]],
          autorizacion: ['', [Validators.required]],
          recomienda: ['', [Validators.required]],
      })
  }

  //Otros Eventos
  onChangeinciso(value) {
      return this.articuloService.getListaIncisos(value).subscribe((incisomodel: Linciso[]) => this.incisomodel = incisomodel);
  }

  //Guarda Evaluacion y envia a pantalla de Mis evaluaciones
  onSubmit() {
      let datoenviado;
      datoenviado = this.empleadoModel.rutempleado + "!" + this.empleadoModel.rutempresa;

        if (this.formListar.valid) {
          this.service.addEvaluacionEmpleado(this.formListar.value).subscribe(event => {
            if (event.type === HttpEventType.Response) {
              console.log("With Parsed JSON :", event.body);
              if (event.body['resultado'] === false) {
                this.dialogo.open(DialogoconfirmacionComponent, {              
                   data: `Ocurrio un error en el servicio `,
                  });
                  console.log("error");
              }
              else
              {
                this.snackBar.open('Evaluacion Guardada Correctamente', undefined, {
                  duration: 1500,
                }); 
              //Envia a mis evaluaciones
                this.router.navigate(['/accesoEmpresa/MisEvaluaciones/', datoenviado]);  
                this.formListar.reset();           
              }
            }

          })
        }
        else
        {
          this.dialogo.open(DialogoconfirmacionComponent, {
            data: `Por favor complete todos los campos`,
           });
        }


  }
}