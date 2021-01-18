import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-empleo',
  templateUrl: './gestionar-empleo.component.html',
  styleUrls: ['./gestionar-empleo.component.css']
})
export class GestionarEmpleoComponent implements OnInit {

  titulo: string;
  imagenTitulo: string;
  curso: string;

  constructor() { 
    this.titulo = "Gestión Empleo";
    this.imagenTitulo = "https://pyme.emol.com/wp-content/uploads/2020/06/apoyo-al-empleo.jpg";
    this.curso = "OS-10";
  }

  ngOnInit(): void {
  }

}
