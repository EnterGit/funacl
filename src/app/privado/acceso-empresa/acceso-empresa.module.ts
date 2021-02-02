import { AuthguardGuard } from './../../core/authguard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AccesoEmpresaComponent } from './acceso-empresa.component';
import {EvaluarempleadoComponent} from '../empresa/evaluarempleado/evaluarempleado.component'
import {BuscarempleadoComponent} from '../empresa/buscarempleado/buscarempleado.component';
import {ConsultarempleadoComponent} from '../empresa/consultarempleado/consultarempleado.component';

const routes: Routes= [
  {path: 'accesoEmpresa', component: AccesoEmpresaComponent, canActivate: [AuthguardGuard],
  children: [
    {path: 'BuscarEmpleado', component: BuscarempleadoComponent, canActivate: [AuthguardGuard]},
    {path: 'EvaluarEmpleado', component:EvaluarempleadoComponent, canActivate: [AuthguardGuard]},
    {path: 'ConsultarEmpleado', component: ConsultarempleadoComponent, canActivate: [AuthguardGuard]}
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
