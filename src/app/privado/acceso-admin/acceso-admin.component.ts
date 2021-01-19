import { ApiService } from './../../services/login/api.service';
import { Globals } from './../../globals';
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-acceso-admin',
  templateUrl: './acceso-admin.component.html',
  styleUrls: ['./acceso-admin.component.css']
})
export class AccesoAdminComponent implements OnInit {

  private role: string;
  
  constructor(
    public globals: Globals,
    public apiservice : ApiService

    ) {
    
    }

  ngOnInit(): void {
            //Toggle Click Function

            this.role = this.apiservice.getToken();

            $("#menu-toggle").click(function (e) {
              e.preventDefault();
              $("#wrapper").toggleClass("toggled");
            });

            this.globals.role = this.role;
  }
  
}
