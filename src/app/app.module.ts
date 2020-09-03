
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ConexionService } from './services/conexion.service'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

//Servicios II
import { EquipoService } from './equipo.service';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { EquipoComponent } from './equipo/equipo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioResolver} from './usuario/usuario.resolver';
import { RegistroComponent } from './registro/registro.component'


const routes: Routes= [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'inicio', component: NosotrosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'usuario', component: UsuarioComponent, resolve: {data: UsuarioResolver}},
  {path: 'registro', component: RegistroComponent, canActivate: [AuthGuard]},

  {path: 'equipo/:id', component: EquipoComponent},
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path: '**', redirectTo : 'inicio', pathMatch: 'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    FooterComponent,
    EquipoComponent,
    NosotrosComponent,
    InicioComponent,
    ListaComponent,
    ListaAddComponent,
    UsuarioComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule, FontAwesomeModule
  ],
  providers: [
    AuthService,
    UserService,
    UsuarioResolver,
    AuthGuard,
    EquipoService,
    ConexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
