
import { ApiService } from './../../services/login/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Globals } from './../../globals';

@Component({
  selector: 'app-acceso-empresa',
  templateUrl: './acceso-empresa.component.html',
  styleUrls: ['./acceso-empresa.component.css']
})
export class AccesoEmpresaComponent implements OnInit {
  public role: string;


  constructor(
    private router: Router, 
    private apiservice: ApiService,
    public globals: Globals
    ) { }


  ngOnInit(): void {

    this.role = this.apiservice.getToken();

    this.globals.role = this.role;

    console.log("SESSION 22  " + this.role);

    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }



}
