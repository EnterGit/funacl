import { IngempresaService } from './../../../services/admin/Ingempresa/ingempresa.service';
import { PerfilEmpresa } from './../../../core/admin/perfilempresa';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../core/auth.service'
import { Observable } from 'rxjs';
import { Router, Params } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { ConexionService } from './../../../services/conexion.service';
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

  public perfilempresaModel: PerfilEmpresa = new PerfilEmpresa("", "", "", "", "", "", "", "", "", "");

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
    // public authService: AuthService,
    public http: HttpClient,
    private ingempresaService: IngempresaService,
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
      $("input#rutEmpresa").rut({ formatOn: 'keyup', validateOn: 'keyup' }).on('rutInvalido', function () {
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
      rutEmpresa: ['', Validators.required],
      nomEmpresa: ['', Validators.required],
      rutRepresentante: ['', Validators.required],
      nomRepresentante: ['', Validators.required],
      dirEmpresa: ['', Validators.required],
      telEmpresa: ['', Validators.required],
      passEmpresa: ['', Validators.required],
      passEmpresa1: ['', Validators.required],
      emailEmpresa: ['', Validators.required]
      // password: ['', Validators.required],
      // idUsuario: [''],
      // name: [''],
      // direccion: [''],
      // nombre: ['']
    });
  }


  onSubmit() {
    if (this.formRegEmpresa.valid) {
      this.ingempresaService.addEmpresa(this.formRegEmpresa.value).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          console.log("With Parsed JSON :", event.body);
          if (event.body['resultado'] === false) {
            alert("ERROR INGRESO");
          }
        }
        this.router.navigate(['/accesoAdmin/RegistrarEmpresa']);
        // this.formRegEmpresa.reset();
      })
    }
    else
    {
      alert("FAVOR COMPLETAR TODOS LOS CAMPOS ")
    }
  }



  // tryRegister(value) {

  //   if (this.formRegEmpresa.valid) {

  //     console.log(this.formRegEmpresa.value)

  //   }
  //  console.log("REGISTRO " + this.formRegEmpresa.valid);
  //   /* this.authService.doRegister(value)
  //     .then(res => {
  //        var user = firebase.auth().currentUser;
  //       console.log("RESPUESTA :" + user.uid);
  //       this.errorMessage = "";
  //       this.successMessage = "Cuenta ha sido creada !!";
  //       this.item.nombre = value.nombre;
  //       this.item.direccion = value.direccion;
  //       this.item.idUsuario = user.uid;
  //       this.service.agregarItem(this.item);
  //       //this.item.name = '';
  //     }, err => {
  //       console.log(err);
  //       this.errorMessage = err.message;
  //       this.successMessage = ""; 
  //     });*/
  // }


  onLogout() {
    this.afsAuth.auth.signOut();
  }

}