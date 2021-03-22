
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-registo-postulante',
  templateUrl: './registo-postulante.component.html',
  styleUrls: ['./registo-postulante.component.css']
})
export class RegistoPostulanteComponent implements OnInit {

  titulo: string;
  imagen: string;
  curso: string;

  formRegPostulantes: FormGroup;

  constructor( 
    private fb: FormBuilder
    ) {
    this.titulo = "Formulario de Registro";
    this.imagen = "https://media.istockphoto.com/vectors/online-registration-form-vector-id1199278357";
    this.curso = "OS-10";

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

  creaFormPostulantes() {
    this.formRegPostulantes = this.fb.group({
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



  }
}
