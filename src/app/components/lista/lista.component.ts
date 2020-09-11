import { ConexionService, Item } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  items: any;

  // items: Observable<any[]>;

  editarItem: any = {
    name: ''
  }

  constructor(private conexion: ConexionService) {

    // this.conexion.col$('items', ref => this.querys(ref, true)).subscribe(item => {
    //   this.items = item;
    //   console.log(this.items);
    // this.conexion.listaItem().subscribe(item=>{
    //   this.items = item;
    //   console.log(this.items);

    // })
  }


  ngOnInit(): void {
      // this.conexion.listaItem().subscribe(item=>{
      // this.items = item;
      // console.log(this.items);
      // })

    this.search();
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
    console.log("Eliminado" + item);
    this.conexion.eliminarItem(item);
  }

  editar(item) {
    this.editarItem = item;
  }

  agregarItemEditado() {
    console.log("Editado :" + this.editarItem);
    this.conexion.editarItem(this.editarItem);
  }
}
