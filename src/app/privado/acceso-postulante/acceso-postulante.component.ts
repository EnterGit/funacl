import { Router } from '@angular/router';
import { ApiService } from './../../services/login/api.service';
import { Globals } from './../../globals';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-acceso-postulante',
  templateUrl: './acceso-postulante.component.html',
  styleUrls: ['./acceso-postulante.component.css']
})
export class AccesoPostulanteComponent implements OnInit {
  private role: string;

  constructor(
    public globals: Globals,
    public apiservice: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
      // console.log("this.globals.perfil");
      // console.log(this.globals.perfil);

      // console.log("this.globals.rutEmpresa");
      // console.log(this.globals.rutEmpresa);


    if (this.globals.perfil == "3") {
      // this.role = this.apiservice.getToken();
      this.globals.role = this.apiservice.getToken(); //this.role;
      this.globals.email = this.apiservice.getEmail();

      //Toggle Click Function
      $(".btn-toggle-menu").click(function () {
        $("#wrapper").toggleClass("toggled");
      });
    }
    else {
      this.router.navigate(['/']);
    }
  }
}
