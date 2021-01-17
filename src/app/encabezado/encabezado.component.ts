import { Router } from '@angular/router';
import { ApiService } from '../services/login/api.service';
import { UserService } from './../core/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(
    private authService: AuthService,
    private afsAuth: AngularFireAuth,
    protected dataService: ApiService,
    private router: Router
  ) {

  }

  public app_name: string = 'App';
  public isLogged: boolean = false;



  ngOnInit() {
    // this.getCurrentUser();

    this.dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      this.loginbtn = false;
      this.logoutbtn = true;
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false;
    }

  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        console.log();
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.afsAuth.auth.signOut();
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
    this.logoutbtn = false;
    this.loginbtn = true;
    window.location.reload();
  }

}
