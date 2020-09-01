
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import { EquipoService } from './equipo.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { EquipoComponent } from './equipo/equipo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes= [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: NosotrosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'equipo/:id', component: EquipoComponent},
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path: '**', redirectTo : 'nosotros', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    FooterComponent,
    EquipoComponent,
    NosotrosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
