import { RegistroComponent } from './../administrador/registro/registro.component';
import { GestionarEmpleoComponent } from '../administrador/gestionar-empleo/gestionar-empleo.component';
import { GestionarPublicidadComponent } from '../administrador/gestionar-publicidad/gestionar-publicidad.component';
import { AutorizarFunaComponent } from './../autorizar-funa/autorizar-funa.component';
import { AccesoAdminComponent } from './acceso-admin.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthguardGuard } from './../../core/authguard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditPublicidadComponent } from '../administrador/edit-publicidad/edit-publicidad.component';



const routes: Routes= [
  {path: 'accesoAdmin', component: AccesoAdminComponent, canActivate: [AuthguardGuard],
  children: [
    {path: 'RegistrarEmpresa', component: RegistroComponent, canActivate: [AuthguardGuard]},
    {path: 'AutorizarFuna', component: AutorizarFunaComponent, canActivate: [AuthguardGuard]},
    {path: 'GestionarPublicidad/:id', component: GestionarPublicidadComponent, canActivate: [AuthguardGuard]},
    {path: 'GestionarEmpleo', component: GestionarEmpleoComponent, canActivate: [AuthguardGuard]},
    {path: 'EditPublicidad/:id', component: EditPublicidadComponent, canActivate: [AuthguardGuard]}
   
  ]}  
];

@NgModule({
  declarations: [
    AccesoAdminComponent,
    RegistroComponent,
    AutorizarFunaComponent,
    GestionarPublicidadComponent,
    GestionarEmpleoComponent,
    EditPublicidadComponent 
  ],
  imports: [
    CommonModule,
    BrowserModule, RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,FontAwesomeModule
  ]
})
export class AccesoAdminModule { }
