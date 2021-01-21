import { GestionarEmpleoComponent } from './../gestionar-empleo/gestionar-empleo.component';
import { GestionarPublicidadComponent } from './../gestionar-publicidad/gestionar-publicidad.component';
import { AutorizarFunaComponent } from './../autorizar-funa/autorizar-funa.component';
import { AccesoAdminComponent } from './acceso-admin.component';
import { RegistroComponent } from './../../registro/registro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthguardGuard } from './../../core/authguard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes= [
  {path: 'accesoAdmin', component: AccesoAdminComponent, canActivate: [AuthguardGuard],
  children: [
    {path: 'RegistrarEmpresa', component: RegistroComponent, canActivate: [AuthguardGuard]},
    {path: 'AutorizarFuna', component: AutorizarFunaComponent, canActivate: [AuthguardGuard]},
    {path: 'GestionarPublicidad/:id', component: GestionarPublicidadComponent, canActivate: [AuthguardGuard]},
    {path: 'GestionarEmpleo', component: GestionarEmpleoComponent, canActivate: [AuthguardGuard]}
  ]}  
];

@NgModule({
  declarations: [
    AccesoAdminComponent,
    RegistroComponent,
    AutorizarFunaComponent,
    GestionarPublicidadComponent,
    GestionarEmpleoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule
  ]
})
export class AccesoAdminModule { }
