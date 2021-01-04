import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-persona',
  templateUrl: './login-persona.component.html',
  styleUrls: ['./login-persona.component.css']
})
export class LoginPersonaComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router : Router ) {
    }

  ngOnInit(): void {
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/usuario']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  btnRegPostulante(){
    this.router.navigateByUrl('/registroPostulante')
  }

}
