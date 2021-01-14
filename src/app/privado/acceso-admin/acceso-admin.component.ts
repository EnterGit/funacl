import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-acceso-admin',
  templateUrl: './acceso-admin.component.html',
  styleUrls: ['./acceso-admin.component.css']
})
export class AccesoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
            //Toggle Click Function
            $("#menu-toggle").click(function (e) {
              e.preventDefault();
              $("#wrapper").toggleClass("toggled");
            });
  }

}
