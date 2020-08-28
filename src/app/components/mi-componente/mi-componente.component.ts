import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  public titulo: string;
  public comentario: string; 
  public year: number;

  constructor() { 
    this.titulo = "Bienvenido Claudio";
    this.comentario = "Entrando al componente";
    this.year = 2020;

    console.log("Componente funcionando");
  }

  ngOnInit(): void {
  }

}
