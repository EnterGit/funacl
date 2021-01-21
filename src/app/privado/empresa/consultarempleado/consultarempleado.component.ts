import { Component, OnInit } from '@angular/core';
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
  selector: 'app-consultarempleado',
  templateUrl: './consultarempleado.component.html',
  styleUrls: ['./consultarempleado.component.css']
})
export class ConsultarempleadoComponent implements OnInit {
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
  
  ) { 
    faConfig.defaultPrefix = 'far';
    library.addIcons(faUser, faHandPaper, faBellSlash);
    //this.ingresarEvaluacion();

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
  

}

}