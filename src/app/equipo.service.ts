import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo: any[] = [
    {
      nombre: 'Claudio',
      especialidad: 'HTML',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus alias quaerat doloribus veritatis dignissimos esse ratione similique consectetur dolorum consequatur voluptatum fugiat perspiciatis, quasi assumenda, illum, eveniet quam iste distinctio?'
    },
    {
      nombre: 'Andre',
      especialidad: 'CSS',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus alias quaerat doloribus veritatis dignissimos esse ratione similique consectetur dolorum consequatur voluptatum fugiat perspiciatis, quasi assumenda, illum, eveniet quam iste distinctio?'
    }
  ]

  constructor() {
    console.log("Servicio OK");
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUno(i){
    return this.equipo[i];
  }
}
