import { Component, OnInit, Input } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-portal-empleo',
  templateUrl: './portal-empleo.component.html',
  styleUrls: ['./portal-empleo.component.css']
})
export class PortalEmpleoComponent implements OnInit {

  title = 'app';

  constructor () { }

  getRut(rut: string): void {
    console.log(rut);
  }

  ngOnInit(): void {

    $(document).ready(function () {

      alert('we call alert from JQuery');

    });

  }
}
