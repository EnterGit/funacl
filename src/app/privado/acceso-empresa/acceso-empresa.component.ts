import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-acceso-empresa',
  templateUrl: './acceso-empresa.component.html',
  styleUrls: ['./acceso-empresa.component.css']
})
export class AccesoEmpresaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

        //Toggle Click Function
        $("#menu-toggle").click(function (e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
        });
  }

}
