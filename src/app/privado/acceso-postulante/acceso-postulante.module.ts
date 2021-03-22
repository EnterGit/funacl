import { AuthPostulanteguardGuard } from './../../core/authpostulanteguard.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/core/authguard.guard';

import { AccesoPostulanteComponent } from './acceso-postulante.component';
import { GuardiasComponent } from '../postulantes/guardias/guardias.component';

const routes: Routes = [
  {
    path: 'accesoPostulante', component: AccesoPostulanteComponent, canActivate: [AuthguardGuard],
    children: [
      { path: 'guardias/:id', component: GuardiasComponent },
    ],
  }
];

@NgModule({
  declarations: [
    AccesoPostulanteComponent,
    GuardiasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AccesoPostulanteModule { }
