import { Globals } from './../../globals';
import { Empleo } from '../../core/admin/empleos';
import { PublicidadService } from '../../services/publicidad/publicidad.service';
import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ConstantPool } from '@angular/compiler';


declare var $: any;
@Component({
  selector: 'app-portal-empleo',
  templateUrl: './portal-empleo.component.html',
  styleUrls: ['./portal-empleo.component.css']
})
export class PortalEmpleoComponent implements OnInit {

  public empleos: Empleo[] = [
    new Empleo("1","2","3", "1111", "1111")
  ];

  
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  

  title = 'app';

  constructor (
    private publicidadService: PublicidadService,
    public globals: Globals
  ) { }

  getRut(rut: string): void {
    console.log("wwwwww" + rut);
  }

  ngOnInit(): void {

    console.log("PORTAL EMPLEOS");
    console.log(this.globals.email);

    this.obtenerEmpleos();
    // $(document).ready(function () {
    //   alert('we call alert from JQuery');
    // });


  }

  obtenerEmpleos(){
    return this.publicidadService
    .getEmpleos()
    .subscribe((empleos: Empleo[]) => this.empleos = empleos);
  }

  editar(id: string | number){
    console.log("Llama al numero " + id);

  }

}
