import { Empleo } from '../../core/admin/empleos';
import { EmpleosService } from '../../services/publicidad/empleos.service';
import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

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
    private empleoService: EmpleosService
  ) { }

  getRut(rut: string): void {
    console.log("wwwwww" + rut);
  }

  ngOnInit(): void {


    this.obtenerEmpleos();
    // $(document).ready(function () {
    //   alert('we call alert from JQuery');
    // });



  }

  obtenerEmpleos(){
    return this.empleoService
    .getEmpleos()
    .subscribe((empleos: Empleo[]) => this.empleos = empleos);
  }

  editar(id: string | number){
    console.log("Llama al numero " + id);

  }

}
