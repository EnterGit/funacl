import { AuthguardGuard } from './../../core/authguard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AccesoEmpresaComponent } from './acceso-empresa.component';
import { ReferirempleadoComponent } from '../empresa/referirempleado/referirempleado.component';
import { ConsultarempleadoComponent } from '../empresa/consultarempleado/consultarempleado.component';
import { MisevaluacionesComponent } from '../empresa/misevaluaciones/misevaluaciones.component';
import { BuscarempleadoComponent } from '../empresa/buscarempleado/buscarempleado.component';

import {DetallemisevaluacionesComponent} from '../empresa/detallemisevaluaciones/detallemisevaluaciones.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
// import {MatSortModule} from '@angular/material/sort';



const routes: Routes= [
  {path: 'accesoEmpresa', component: AccesoEmpresaComponent, canActivate: [AuthguardGuard],
  children: [
    {path: 'BuscarEmpleado', component: BuscarempleadoComponent, canActivate: [AuthguardGuard]},
    {path: 'ReferirEmpleado/:id', component:ReferirempleadoComponent, canActivate: [AuthguardGuard]},
    {path: 'ConsultarEmpleado', component: ConsultarempleadoComponent, canActivate: [AuthguardGuard]},
    {path: 'MisEvaluaciones/:id', component: MisevaluacionesComponent, canActivate: [AuthguardGuard]},
    {path: 'Detallemisevaluaciones/:id', component: DetallemisevaluacionesComponent, canActivate: [AuthguardGuard]}
  ]}  

];

@NgModule({
  declarations: [
    AccesoEmpresaComponent,
    BuscarempleadoComponent,
    ConsultarempleadoComponent,
    MisevaluacionesComponent,
    ReferirempleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserModule,

    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
     RouterModule.forRoot(routes),
     MatDatepickerModule,
     MatProgressSpinnerModule,
     MatProgressBarModule,
     MatGridListModule,
    //  MatSortModule


  ]
})
export class AccesoEmpresaModule { }
