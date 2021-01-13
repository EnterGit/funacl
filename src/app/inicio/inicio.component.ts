import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'
//publicidad
import { OwlOptions } from 'ngx-owl-carousel-o';

// servicio
import { Publicidad } from './../empleos';
import { EmpleosService } from '../services/publicidad/empleos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public publicidades: Publicidad[] = [
    new Publicidad("1","")
  ];

  items: Observable<any[]>;

  constructor(private db: AngularFirestore, private empleoService: EmpleosService) {
    // this.items = db.collection('items').valueChanges();
  }

  ngOnInit(): void {
    // this.db.collection('items').valueChanges()
    // .subscribe(val => console.log(val));
    // this.db.collection('items',ref => ref.where('name','==','test2')).subscribe(Response => console.log(Response));
    this.obtenerPublicidad();

  }

  obtenerPublicidad(){
    return this.empleoService
    .getPublicidad()
    .subscribe((publicidad: Publicidad[]) => this.publicidades = publicidad);
  }



  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
