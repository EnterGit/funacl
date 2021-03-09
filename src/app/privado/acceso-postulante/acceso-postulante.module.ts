import { AuthPostulanteguardGuard } from './../../core/authpostulanteguard.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AccesoPostulanteComponent } from './acceso-postulante.component';
import { AuthguardGuard } from 'src/app/core/authguard.guard';



const routes: Routes = [
  {
    path: 'accesoPostulante', component: AccesoPostulanteComponent, canActivate: [AuthguardGuard],
    children: [
      // { path: 'accesoPostulante', component: AccesoPostulanteComponent, canActivate: [AuthguardGuard] },
      // { path: '**', redirectTo: '/portal', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  declarations: [
    AccesoPostulanteComponent
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
