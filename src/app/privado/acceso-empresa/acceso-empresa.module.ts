import { AuthguardGuard } from './../../core/authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaComponent } from './../empresa/empresa.component';
import { AccesoEmpresaComponent } from './acceso-empresa.component';


const routes: Routes= [
  {path: 'accesoEmpresa', component: AccesoEmpresaComponent, canActivate: [AuthguardGuard],
  children: [
    {path: 'empresas', component: EmpresaComponent, canActivate: [AuthguardGuard]}
  ]}  
];


@NgModule({
  declarations: [
    AccesoEmpresaComponent,
    EmpresaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, RouterModule.forRoot(routes)
  ]
})
export class AccesoEmpresaModule { }
