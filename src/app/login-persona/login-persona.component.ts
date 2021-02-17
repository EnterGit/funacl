import { Globals } from './../globals';
import { ApiService } from '../services/login/api.service';
import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-persona',
  templateUrl: './login-persona.component.html',
  styleUrls: ['./login-persona.component.css']
})
export class LoginPersonaComponent implements OnInit {

  angForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private dataService: ApiService, 
    private router: Router,
    public globals: Globals
    ) 
    {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  
  }

  postdata(angForm1) {
    this.dataService.userlogin(angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {          
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/accesoEmpresa';
          this.router.navigate([redirect]);      
        },
        error => {
          alert("User name or password is incorrect")
        });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
}
