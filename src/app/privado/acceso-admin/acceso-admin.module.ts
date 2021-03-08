import { RegistroComponent } from './../administrador/registro/registro.component';
import { GestionarEmpleoComponent } from '../administrador/gestionar-empleo/gestionar-empleo.component';
import { GestionarPublicidadComponent } from '../administrador/gestionar-publicidad/gestionar-publicidad.component';
import { AutorizarFunaComponent } from '../administrador/autorizar-funa/autorizar-funa.component';
import { AccesoAdminComponent } from './acceso-admin.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EditPublicidadComponent } from '../administrador/edit-publicidad/edit-publicidad.component';

import { AuthguardGuard } from './../../core/authguard.guard';
import { RutModule } from 'rut-chileno';
import { EditRegistroComponent } from '../administrador/edit-registro/edit-registro.component';
import { EditEmpleoComponent } from '../administrador/edit-empleo/edit-empleo.component';

const routes: Routes = [
  // { path: '**', redirectTo: '/portal', pathMatch: 'full' },
  {
    path: 'accesoAdmin', component: AccesoAdminComponent, canActivate: [AuthguardGuard],
    children: [
      { path: 'RegistrarEmpresa/:id', component: RegistroComponent, canActivate: [AuthguardGuard] },
      { path: 'AutorizarFuna', component: AutorizarFunaComponent, canActivate: [AuthguardGuard] },
      { path: 'GestionarPublicidad/:id', component: GestionarPublicidadComponent, canActivate: [AuthguardGuard] },
      { path: 'GestionarEmpleo/:id', component: GestionarEmpleoComponent, canActivate: [AuthguardGuard] },
      { path: 'EditPublicidad/:id', component: EditPublicidadComponent, canActivate: [AuthguardGuard] },
      { path: 'EditRegistro/:idRegistro', component: EditRegistroComponent, canActivate: [AuthguardGuard] },
      { path: 'EditEmpleo/:idEmpleo', component: EditEmpleoComponent, canActivate: [AuthguardGuard] }
      // ,
      // { path: '**', redirectTo: '/404', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    AccesoAdminComponent,
    RegistroComponent,
    AutorizarFunaComponent,
    GestionarPublicidadComponent,
    GestionarEmpleoComponent,
    EditPublicidadComponent,
    EditRegistroComponent,
    EditEmpleoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RutModule
  ]
})
export class AccesoAdminModule { }
