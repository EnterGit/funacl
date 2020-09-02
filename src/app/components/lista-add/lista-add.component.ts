import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  item:any = {
    name:''
  }

  constructor(private service:ConexionService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.service.agregarItem(this.item);
    this.item.name = '';
  }

}
