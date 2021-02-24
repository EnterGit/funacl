import { Router } from '@angular/router';
import { ApiService } from './../../services/login/api.service';
import { Globals } from './../../globals';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-acceso-empresa',
  templateUrl: './acceso-empresa.component.html',
  styleUrls: ['./acceso-empresa.component.css']
})
export class AccesoEmpresaComponent implements OnInit {
  private role: string;

  constructor(
    public globals: Globals,
    public apiservice: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.globals.perfil === "2") {

      //Toggle Click Function
      this.role = this.apiservice.getToken();
      this.globals.role = this.role;

      $(".btn-toggle-menu").click(function () {
        $("#wrapper").toggleClass("toggled");
      });
    }
    else {
      this.router.navigate(['/']);
    }

  }
}