import { ConexionService, Item } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista-postulantes',
  templateUrl: './lista-postulantes.component.html',
  styleUrls: ['./lista-postulantes.component.css'],
})
export class ListaPostulantesComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;

  items: any;

  editarItem: any = {
    id: '',
    name: ''
  }


  constructor(
    private conexion: ConexionService) 
  { }


  ngOnInit(): void {
      this.conexion.listaPostulantes().subscribe(postulantes=>{
      this.items = postulantes;
      console.log(this.items);
      })
  }

  search() {

    this.conexion.col$('items', ref => this.querys(ref, true)).subscribe(item => {
      this.items = item;
      console.log(this.items);
    })
  }

  querys(ref, value: boolean) {
    var user = firebase.auth().currentUser;
    if (user) {
      console.log("usuario:" + user.uid);
      if (value)
        return ref.where('idUsuario', '==', user.uid); //.where('name', '==', 'claudio');
      else
        return ref.where('name', '==', 'Test 2');
    } else {
      return ref.where('name', '==', 'HOLA');
    }
  }

  eliminar(item) {
    console.log("Eliminar Postulante  " + item);
    this.conexion.eliminarPostulante(item);
    }

  editar(postulante) {
    this.editarItem = postulante;
     console.log(this.editarItem);
  }

  agregarItemEditado() {
    console.log("Editado :" + this.editarItem);
    // this.conexion.editarItem(this.editarItem);
  }

 
}