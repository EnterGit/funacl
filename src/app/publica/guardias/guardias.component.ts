import { Router } from '@angular/router';
import { ConexionService, Postulantes } from './../../services/conexion.service';
import { PostulantesModel } from '../../core/postulantes.model';
import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-guardias',
  templateUrl: './guardias.component.html',
  styleUrls: ['./guardias.component.css'],
  providers: [FaConfig],
})
export class GuardiasComponent implements OnInit {

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

  formPostulantes: FormGroup;

  postulantes: any = {}

  constructor(
    faConfig: FaConfig,
    library: FaIconLibrary,
    private ruta: ActivatedRoute,
    private fb: FormBuilder,
    private service: ConexionService,
    private router: Router
  ) {
    faConfig.defaultPrefix = 'far';
    library.addIcons(faUser, faHandPaper, faBellSlash);


    this.seteaPostulante();
    this.creaFormPostulantes();
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

  seteaPostulante() {
    this.ruta.params.subscribe(params => {
      console.log(params['id']);

      switch (params['id']) {
        case '1': {
          this.titulo = "Guardia de Seguridad";
          this.imagen = "http://www.diarioeldia.cl/sites/default/files/styles/flexslider_full/public/092019/ayer_a_nivel_nacional.jpg?itok=3eUNFSuZ";
          this.curso = "OS-10";
          break;
        }
        case '2': {
          this.titulo = "Supervisor de Seguridad";
          this.imagen = "https://curso-os10.cl/wp-content/uploads/2019/01/supervisor-de-seguridad.png";
          this.curso = "OS-10";
          break;
        }
        case '3': {
          this.titulo = "Conserje";
          this.imagen = "https://www.infogate.cl/wp-content/uploads/2019/04/empresas090401.jpg";
          this.curso = "Mayordomo";
          break;
        }
        default: {
          this.router.navigate(['/inicio']);
          this.titulo = "Guardia de Seguridad";
          break;
        }
      }
    })
  }

  creaFormPostulantes() {
    this.formPostulantes = this.fb.group({
      rut: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      educacion: ['', [Validators.required]],
      cursoAcreditacion: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      fechaAcreditacion: ['', [Validators.required]],
      nivelComputacion: ['', [Validators.required]],
      turnos: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      comuna: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      experiencia: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    }
    );

    // this.formPostulantes.valueChanges
    //   .pipe(
    //     debounceTime(500)
    //   )
    //   .subscribe(value => {
    //     console.log(value);
    //   });
  }

  agregaPostulantes(value) {

    if (this.formPostulantes.valid) {

      console.log(this.formPostulantes.value)

      this.postulantes.rut = value.rut;
      this.postulantes.nombreCompleto = value.nombre;
      this.postulantes.educacion = value.educacion;
      this.postulantes.fechaAcreditacion = value.fechaAcreditacion;
      this.postulantes.nivelComputacion = value.nivelComputacion;
      this.postulantes.turnos = value.turnos;
      this.postulantes.sexo = value.sexo;
      this.postulantes.direccion = value.direccion;
      this.postulantes.comuna = value.comuna;
      this.postulantes.telefono = value.telefono;
      this.postulantes.celular = value.celular;
      this.postulantes.experiencia = value.experiencia;
      this.postulantes.email = value.email;

      this.service.agregarPostulantes(this.postulantes);
    }
    else {
      alert("FAVOR COMPLETAR TODOS LOS CAMPOS ")
    }
  }


  checarSiSonIguales(): boolean {
    return this.formPostulantes.hasError('noSonIguales') &&
      this.formPostulantes.get('ruy').dirty;
  }

}
