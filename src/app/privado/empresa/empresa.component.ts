import { Users } from './../../core/users';
import { ApiService } from './../../services/login/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(apiservice : ApiService) { }

  ngOnInit(): void {

    console.log(localStorage.getItem('token'));

    console.log(Users);
   
  }

}
