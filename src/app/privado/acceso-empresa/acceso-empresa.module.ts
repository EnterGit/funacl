import { AuthguardGuard } from './../../core/authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccesoEmpresaComponent } from './acceso-empresa.component';
import {EvaluarempleadoComponent} from '../empresa/evaluarempleado/evaluarempleado.component'
import {BuscarempleadoComponent} from '../empresa/buscarempleado/buscarempleado.component';
import {ConsultarempleadoComponent} from '../empresa/consultarempleado/consultarempleado.component';

const routes: Routes= [
  {path: 'accesoEmpresa', component: AccesoEmpresaComponent,
  children: [
    {path: 'BuscarEmpleado', component: BuscarempleadoComponent},
    {path: 'EvaluarEmpleado', component:EvaluarempleadoComponent},
    {path: 'ConsultarEmpleado', component: ConsultarempleadoComponent}
  ]}  
];



@NgModule({
  declarations: [
    AccesoEmpresaComponent,
    BuscarempleadoComponent,
    ConsultarempleadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule, RouterModule.forRoot(routes),
  
  ]
})
export class AccesoEmpresaModule { }