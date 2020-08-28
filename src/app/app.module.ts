import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes= [
  {path: 'login', component: LoginComponent},
  {path: 'mi-componente', component: MiComponenteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    LoginComponent,
    EncabezadoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
