import { EquipoService } from './../equipo.service';
import { Component, OnInit } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash, faHandPaper, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt, faTh, faCalendar, faCalendarAlt, faInfoCircle, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
  providers: [FaConfig],
})
export class NosotrosComponent implements OnInit {

  faquoteleft = faQuoteLeft;
  faquoteright = faQuoteRight;

  equipo: any[] = [];

  constructor(
    private _servicio: EquipoService,
    faConfig: FaConfig,
    library: FaIconLibrary
  ) {

    faConfig.defaultPrefix = 'far';
    library.addIcons(faUser, faHandPaper, faBellSlash);


    this.equipo = _servicio.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
