import { Component, OnInit } from '@angular/core';
import {CountryI, CityI} from '../../../core/empresa/model.interface';
import {registroempleado} from '../../../core/empresa/registroempleado';
import {RegistroempleadoService} from '../../../services/empresa/registroempleado/registroempleado.service';
import{ DataService } from '../../../services/empresa/data.service';

 import { Router } from '@angular/router';
 import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
 import { faBellSlash, faHandPaper, faUser } from '@fortawesome/free-regular-svg-icons';
 import { faCoffee, faTrash, faTrashAlt, faPencilAlt, faTh, faCalendar, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
 import { ActivatedRoute } from '@angular/router';
 import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
 import { debounceTime } from 'rxjs/operators';
 import * as $ from 'jquery';

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


@Component({
  selector: 'app-evaluarempleado',
  templateUrl: './evaluarempleado.component.html',
  styleUrls: ['./evaluarempleado.component.css'],
  providers:[DataService],
})
export class EvaluarempleadoComponent implements OnInit {
  formRegistro: FormGroup;
  public selectedCountry: CountryI={id:0, name:''};
   public countries: CountryI[];
   public cities:CityI[];

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faCofee = faCoffee;
  faTh = faTh;
  faCalendar = faCalendar;
  faCalendarAlt = faCalendarAlt;


  titulo: string;
  imagen: string;
  curso: string;

  evaluacion: any = {}

  constructor(
    faConfig: FaConfig,
    library: FaIconLibrary,
    private ruta: ActivatedRoute,
    private fb: FormBuilder,
      private router: Router,
    private dataSrv:DataService,
    private service: RegistroempleadoService,
  ) { 
    faConfig.defaultPrefix = 'far';
    library.addIcons(faUser, faHandPaper, faBellSlash);
    this.ingresarEvaluacion();

  }

  ngOnInit(): void {
      $(document).ready(function () {
      $("input#rut").rut({ formatOn: 'keyup', validateOn: 'keyup' }).on('rutInvalido', function () { 
        $(".rutError").addClass("alert alert-danger")
        $(".rutError").text("Rut inválido");
       }).on('rutValido', function () {
           $(".rutError").removeClass("alert alert-danger ")
           $(".rutError").empty();
          });
    })

this.countries = this.dataSrv.getCountries();


  
  }
  onSelect(id:number):void
  {
    this.cities = this.dataSrv.getCities().filter(item => item.countryId = id);
  }



  ingresarEvaluacion() {
    this.formRegistro = this.fb.group({
      rut: ['', [Validators.required]],
      NombreEmpleado: ['', [Validators.required]],
    /*  rutEmpresa: ['', [Validators.required]],
      NombreEmpresa: ['', [Validators.required]],
      fechIngreso: ['', [Validators.required]],
      fechFin: ['', [Validators.required]],
      cbbInciso: ['', [Validators.required]],
      Observacion: ['', [Validators.required]],
      disclaimer: ['', [Validators.required]],
      Recomienda: ['', [Validators.required]],
      */
    }
    );

}


agregaEvaluacionEmpleado(value) {

  if (this.formRegistro.valid) {

  console.log(this.formRegistro.value)
  this.evaluacion.rut  = value.rut;
  this.evaluacion.NombreEmpleado = value.NombreEmpleado;

  alert("Paso por aqui ");
    /*this.formRegistro.rut = value.rut;
    this.formRegistro.NombreEmpleado = value.NombreEmpleado;
    this.formRegistro.rutEmpresa = value.rutEmpresa;
    this.formRegistro.NombreEmpresa = value.NombreEmpresa;
    this.formRegistro.fechIngreso = value.fechIngreso;
    this.formRegistro.fechFin = value.fechFin;
    this.formRegistro.cbbInciso = value.cbbInciso;
    this.formRegistro.Observacion = value.Observacion;
    this.formRegistro.disclaimer = value.disclaimer;
    this.formRegistro.Recomienda = value.Recomienda;
*/
console.log(this.evaluacion.rut);
console.log(this.evaluacion.NombreEmpleado);
    this.service.addEvaluacionEmpleado(this.evaluacion);

  }
  else {
    alert("FAVOR COMPLETAR TODOS LOS CAMPOS ")
  }

}


}
