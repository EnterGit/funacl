import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;

  constructor(private conexion:ConexionService) {

    this.conexion.listaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items);
    })
   }

  ngOnInit(): void {
  }

}
