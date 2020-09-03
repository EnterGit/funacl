import { ConexionService, Item } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  items:any;

  editarItem: any = {
    name: ''
  }

  constructor(private conexion:ConexionService) {
   

    this.conexion.listaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items);
    })
   }

  ngOnInit(): void {
  }

  eliminar(item){
    this.conexion.eliminarItem(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.conexion.editarItem(this.editarItem);
  }
}
