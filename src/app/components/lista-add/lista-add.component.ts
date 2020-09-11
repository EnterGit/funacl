import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseUserModel } from 'src/app/core/user.model';
import { UserService } from 'src/app/core/user.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';


@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  item: any = {
    name: '',
    idUsuario: '',
    email: ''
  }

  user: FirebaseUserModel = new FirebaseUserModel();

  constructor(
    private service: ConexionService,
    public userService: UserService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  agregar() {
    var user = firebase.auth().currentUser;
    if (user) {
      this.item.idUsuario = user.uid;
      this.item.email = user.email;
      this.service.agregarItem(this.item);
      this.item.name = '';
    } else {
      // No user is signed in.
      console.log("error");

    }
  };
}
