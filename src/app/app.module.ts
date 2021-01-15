import { ApiService } from './services/login/api.service';
import { Globals } from './globals';
import { AccesoAdminModule } from './privado/acceso-admin/acceso-admin.module';
import { AccesoEmpresaModule } from './privado/acceso-empresa/acceso-empresa.module';


import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ConexionService } from './services/conexion.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


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
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioResolver} from './usuario/usuario.resolver';
// import { RegistroComponent } from './registro/registro.component';
import { GuardiasComponent }  from './publica/guardias/guardias.component'
import { PostulaComponent }  from './publica/postula/postula.component';
import { ListaPostulantesComponent } from './privado/lista-postulantes/lista-postulantes.component'
// import { PublicidadComponent } from './publica/publicidad/publicidad.component'
import { PortalEmpleoComponent } from './publica/portal-empleo/portal-empleo.component';
// import { EmpresaComponent } from './privado/empresa/empresa.component';


//publicidad
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// servicio Api
import { ApiuserService } from './services/apiuser.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginPersonaComponent } from './login-persona/login-persona.component';
import { RegistoPostulanteComponent } from './registo-postulante/registo-postulante.component';
import { AuthguardGuard } from './core/authguard.guard';


const routes: Routes= [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'loginPersona', component: LoginPersonaComponent, canActivate: [AuthGuard]},
  {path: 'inicio', component: InicioComponent},
  {path: 'listaPostulantes', component: ListaPostulantesComponent, canActivate: [AuthguardGuard]},
  {path: 'usuario', component: UsuarioComponent, resolve: {data: UsuarioResolver}},
  {path: 'postula', component: PostulaComponent, canActivate: [AuthguardGuard]},
  {path: 'nosotros', component: NosotrosComponent, canActivate: [AuthguardGuard]},
  // {path: 'publicaaqui', component: PublicidadComponent},
  {path: 'portal', component: PortalEmpleoComponent},
  {path: 'registroPostulante', component: RegistoPostulanteComponent},
  // {path: 'empresas', component: EmpresaComponent},

  {path: 'guardias/:id', component: GuardiasComponent, canActivate: [AuthguardGuard]},
  // {path: 'registro', component: RegistroComponent},
  {path: 'lista', component: ListaComponent, resolve: {data: UsuarioResolver}},
  {path: 'lista-add', component: ListaAddComponent, resolve: {data: UsuarioResolver}},


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
    // RegistroComponent,
    GuardiasComponent,
    PostulaComponent,
    ListaPostulantesComponent,
    // PublicidadComponent,
    PortalEmpleoComponent,
    LoginPersonaComponent,
    RegistoPostulanteComponent
    // EmpresaComponent,

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule, FontAwesomeModule, NgbModule,
    CarouselModule,BrowserAnimationsModule,
    HttpClientModule,
    AccesoEmpresaModule,
    AccesoAdminModule
  ],
  providers: [
    AuthService,
    UserService,
    UsuarioResolver,
    AuthGuard,
    EquipoService,
    ConexionService,
    ApiuserService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    Globals,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
