import { Globals } from './../globals';
import { Router } from '@angular/router';
import { ApiService } from '../services/login/api.service';
// import { UserService } from './../core/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  loginbtn: boolean;
  logoutbtn: boolean;
  perfilAdmin: boolean = false;
  perfilEmpresa: boolean = false;
  perfilPostulante: boolean = false;

  nombre: string;

  pruebasalida

  constructor(
    protected dataService: ApiService,
    private router: Router,
    public globals: Globals
  ) {

  }

  public app_name: string = 'App';
  public isLogged: boolean = false;


  ngOnInit() {

    this.perfilAdmin = false;
    this.perfilEmpresa = false;
    this.perfilPostulante = false;

    this.dataService.getLoggedInName.subscribe(name => this.changeName(name));
    this.dataService.getLoggedInPerfil.subscribe(name => this.changePerfil(name));

  
    this.globals.perfil = this.dataService.getPerfil();
    this.globals.email = this.dataService.getEmail();
    this.globals.rutEmpresa = this.dataService.getRutEmpresa();

    if (this.dataService.isLoggedIn()) {

      this.loginbtn = false;
      this.logoutbtn = true;

      if (this.globals.perfil === "1") {
        this.perfilEmpresa = false;
        this.perfilPostulante = false;
        this.perfilAdmin = true;
      }

      if (this.globals.perfil === "2") {
        this.perfilEmpresa = true;
        this.perfilAdmin = false;
        this.perfilPostulante = false;
      }

      if (this.globals.perfil === "3") {
        this.perfilPostulante = true;
        this.perfilAdmin = false;
        this.perfilEmpresa = false;
      }



    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false;
      this.perfilAdmin = false;
      this.perfilEmpresa = false;
      this.perfilPostulante = false;
    }

  }


  private changeName(name: boolean): void {
    console.log("name");
    console.log(name);
    this.logoutbtn = name;
    this.loginbtn = !name;
    
    this.globals.perfil = this.dataService.getPerfil();

    if (this.globals.perfil === "1") {
      this.perfilEmpresa = false;
      this.perfilPostulante = false;
      this.perfilAdmin = true;
    }

    if (this.globals.perfil === "2") {
      this.perfilEmpresa = true;
      this.perfilAdmin = false;
      this.perfilPostulante = false;
    }

    if (this.globals.perfil === "3") {
      this.perfilPostulante = true;
      this.perfilAdmin = false;
      this.perfilEmpresa = false;
    }
  }


  private changePerfil(name: boolean): void {
    console.log("name");
    console.log(name);
    this.globals.perfil = this.dataService.getPerfil();

    if (this.globals.perfil === "1") {
      this.perfilEmpresa = true;
      this.perfilAdmin = false;
      this.perfilPostulante = false;
    }

    if (this.globals.perfil === "2") {
      this.perfilEmpresa = true;
      this.perfilAdmin = false;
      this.perfilPostulante = false;
    }

    if (this.globals.perfil === "3") {
      this.perfilPostulante = true;
      this.perfilAdmin = false;
      this.perfilEmpresa = false;
    }
  }


  logout() {
    this.dataService.deleteToken();
    // window.location.href = window.location.href;
    this.logoutbtn = false;
    this.loginbtn = true;
    this.perfilAdmin = false;
    this.perfilEmpresa = false;
    this.perfilPostulante = false;

    this.router.navigate(['/inicio']);
    // window.location.reload();
  }

}
