import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from '../services/conexion.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  item:any = {
    name:''
  }

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private service:ConexionService
  ) { 
    this.createForm();
  }


  ngOnInit(): void {

  }
  
  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required],
      name:['']
    });
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Cuenta ha sido creada !!";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    });

    this.service.agregarItem(this.item);
    //this.item.name = '';
  }
}
