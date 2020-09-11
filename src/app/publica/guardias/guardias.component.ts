import { Component, OnInit } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash, faHandPaper, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt, faTh } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-guardias',
  templateUrl: './guardias.component.html',
  styleUrls: ['./guardias.component.css'],
  providers: [FaConfig],
})
export class GuardiasComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faCofee = faCoffee;
  faTh = faTh;

  titulo: string;
  imagen: string;

  constructor(
    faConfig: FaConfig,
    library: FaIconLibrary,
    private ruta: ActivatedRoute
  ) {

    faConfig.defaultPrefix = 'far';
    library.addIcons(faUser, faHandPaper, faBellSlash);

    this.ruta.params.subscribe(params => {
      console.log(params['id']);

      switch (params['id']) {
        case '1': {
          this.titulo = "Guardia de Seguridad";
          this.imagen = "http://www.diarioeldia.cl/sites/default/files/styles/flexslider_full/public/092019/ayer_a_nivel_nacional.jpg?itok=3eUNFSuZ";
          break;
        }
        case '2': {
          this.titulo = "Supervisor de Seguridad"; 
          this.imagen = "https://curso-os10.cl/wp-content/uploads/2019/01/supervisor-de-seguridad.png";
          break;
        }
        case '3': {
          this.titulo = "Conserje"; 
          this.imagen = "https://www.infogate.cl/wp-content/uploads/2019/04/empresas090401.jpg";
          break;
        }
        default: {
          this.titulo = "Guardia de Seguridad"; 
          break;
        }
      }


    })
  }

  ngOnInit(): void {
  }

}
