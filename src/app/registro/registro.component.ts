import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from '../services/conexion.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import * as $ from 'jquery';



declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegEmpresa: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  titulo: string;
  imagen: string;
  curso: string;


  item: any = {
    name: '',
    id: ''
  }

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private service: ConexionService,
    private afsAuth: AngularFireAuth
  ) {

    this.titulo = "Formulario de Registro Empresa";
    this.imagen = "https://media.istockphoto.com/vectors/online-registration-form-vector-id1199278357";
    this.curso = "OS-10";

    this.createForm();
  }


  ngOnInit(): void {

    $(document).ready(function () {
      $("input#rutempresa").rut({ formatOn: 'keyup', validateOn: 'keyup' }).on('rutInvalido', function () { 
        $(".rutErrorEmp").addClass("alert alert-danger")
        $(".rutErrorEmp").text("Rut inválido");
       }).on('rutValido', function () {
           $(".rutErrorEmp").removeClass("alert alert-danger ")
           $(".rutErrorEmp").empty();
          });
 
    $("input#rutRepresentante").rut({ formatOn: 'keyup', validateOn: 'keyup' }).on('rutInvalido', function () { 
      $(".rutErrorRep").addClass("alert alert-danger")
      $(".rutErrorRep").text("Rut inválido");
     }).on('rutValido', function () {
         $(".rutErrorRep").removeClass("alert alert-danger ")
         $(".rutErrorRep").empty();
        });
  })

  }

  createForm() {
    this.formRegEmpresa = this.fb.group({
      rutempresa: ['', Validators.required],
      nombreEmpresa: ['', Validators.required],
      rutRepresentante : ['', Validators.required],
      nombreRepresentante: ['', Validators.required],
      direccionEmp: ['', Validators.required],
      telefonoEmp: ['', Validators.required],
      Contrasenia:  ['', Validators.required],
      RepetirContrasenia:  ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      idUsuario: [''],
      name: [''],
      direccion: [''],
      nombre: ['']
    });
  }

  tryRegister(value) {

    console.log("REGISTRO " + this.formRegEmpresa.value);
    /* this.authService.doRegister(value)
      .then(res => {
        var user = firebase.auth().currentUser;
        console.log("RESPUESTA :" + user.uid);
        this.errorMessage = "";
        this.successMessage = "Cuenta ha sido creada !!";
        this.item.nombre = value.nombre;
        this.item.direccion = value.direccion;
        this.item.idUsuario = user.uid;
        this.service.agregarItem(this.item);
        //this.item.name = '';
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = ""; 
      });*/
  }


  onLogout() {
    this.afsAuth.auth.signOut();
  }

}