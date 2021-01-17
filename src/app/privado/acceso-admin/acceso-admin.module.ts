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
  {path: 'accesoAdmin', component: AccesoAdminComponent,
  children: [
    {path: 'RegistrarEmpresa', component: RegistroComponent},
    {path: 'AutorizarFuna', component: AutorizarFunaComponent, canActivate: [AuthguardGuard]},
    {path: 'GestionarPublicidad', component: GestionarPublicidadComponent, canActivate: [AuthguardGuard]}
  ]}  
];

@NgModule({
  declarations: [
    AccesoAdminComponent,
    RegistroComponent,
    AutorizarFunaComponent,
    GestionarPublicidadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule
  ]
})
export class AccesoAdminModule { }