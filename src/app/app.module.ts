import { ApiPostulanteService } from './services/login/apiPostulante.service';
import { ApiService } from './services/login/api.service';

import { Globals } from './globals';
import { AccesoAdminModule } from './privado/acceso-admin/acceso-admin.module';
import { AccesoEmpresaModule } from './privado/acceso-empresa/acceso-empresa.module';
import { AccesoPostulanteModule } from './privado/acceso-postulante/acceso-postulante.module';


import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ConexionService } from './services/conexion.service';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Servicios II
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
import { UsuarioResolver } from './usuario/usuario.resolver';
// import { RegistroComponent } from './registro/registro.component';
// import { GuardiasComponent } from './publica/guardias/guardias.component';
import { PostulaComponent } from './publica/postula/postula.component';
import { PublicidadComponent } from './publica/publicidad/publicidad.component';
import { PortalEmpleoComponent } from './publica/portal-empleo/portal-empleo.component';



// publicidad
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// servicio Api
import { ApiuserService } from './services/apiuser.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPersonaComponent } from './login-persona/login-persona.component';
import { RegistoPostulanteComponent } from './registo-postulante/registo-postulante.component';
import { AuthguardGuard } from './core/authguard.guard';


//Mensaje
import { DialogoconfirmacionComponent } from './dialogoconfirmacion/dialogoconfirmacion.component';
//Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
//import {MatSort} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetallemisevaluacionesComponent } from './privado/empresa/detallemisevaluaciones/detallemisevaluaciones.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import { CifrarComponent } from './components/cifrar/cifrar.component';

import { RutModule } from 'rut-chileno';



const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'loginPersona', component: LoginPersonaComponent, canActivate: [AuthGuard] },
  { path: 'inicio', component: InicioComponent },
  { path: 'usuario', component: UsuarioComponent, resolve: { data: UsuarioResolver } },
  { path: 'postula', component: PostulaComponent },
  { path: 'nosotros', component: NosotrosComponent, canActivate: [AuthguardGuard] },
  { path: 'publicaaqui', component: PublicidadComponent },
  { path: 'portal', component: PortalEmpleoComponent },
  { path: 'registroPostulante', component: RegistoPostulanteComponent },
  // {path: 'empresas', component: EmpresaComponent},

  // { path: 'guardias/:id', component: GuardiasComponent },
  // {path: 'registro', component: RegistroComponent},
  { path: 'lista', component: ListaComponent, resolve: { data: UsuarioResolver } },
  { path: 'lista-add', component: ListaAddComponent, resolve: { data: UsuarioResolver } },
  { path: 'cifrar', component: CifrarComponent },


  { path: 'equipo/:id', component: EquipoComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }

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
    // GuardiasComponent,
    PostulaComponent,
    PublicidadComponent,
    PortalEmpleoComponent,
    LoginPersonaComponent,
    RegistoPostulanteComponent,
    DialogoconfirmacionComponent,

    DetallemisevaluacionesComponent,
 
 
    

    CifrarComponent
    //ReferirempleadoComponent
    // EvaluarempleadoComponent,
    // BuscarempleadoComponent,
    // ConsultarempleadoComponent
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
    CarouselModule, BrowserAnimationsModule,
    HttpClientModule,
    AccesoEmpresaModule,
    AccesoAdminModule,
    AccesoPostulanteModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,

    //MatPaginatorModule,
    //MatPaginator,
    //MatSort,

    MatPaginatorModule,
    RutModule

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
    ApiService,
    ApiPostulanteService
  ],
  exports: [
    ReactiveFormsModule
    // CifrarComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
// ccurin