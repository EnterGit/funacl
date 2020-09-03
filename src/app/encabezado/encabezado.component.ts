import { Component, OnInit } from '@angular/core';
import { FirebaseUserModel } from '../core/user.model';
import { Location } from '@angular/common';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  user: FirebaseUserModel = new FirebaseUserModel();
  

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}
