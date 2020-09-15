import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from '../services/conexion.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

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
    this.createForm();
  }


  ngOnInit(): void {

  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      idUsuario: [''],
      name: [''],
      direccion: [''],
      nombre: ['']
    });
  }

  tryRegister(value) {

    console.log("REGISTRO " + value);
    this.authService.doRegister(value)
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
      });
  }


  onLogout() {
    this.afsAuth.auth.signOut();
  }

}
