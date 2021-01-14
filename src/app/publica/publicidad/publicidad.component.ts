import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {

  titulo: string;
  imagen: string;
  curso: string;


  constructor() {

    this.titulo = "Formulario de Contacto";
    this.imagen = "https://www.sgtpropiedades.cl/wp-content/uploads/2018/09/publicagratis.jpg";
    this.curso = "OS-10";

  }

  ngOnInit(): void {

  }

}
