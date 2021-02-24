import { Globals } from './../../globals';
import { EncriptarService } from './../seguridad/encriptar.service';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../core/users';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    redirectUrl: string;
    baseUrl = environment.baseUrl + '/Login/'

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    @Output() getLoggedInPerfil: EventEmitter<any> = new EventEmitter();


    constructor(private httpClient: HttpClient,
        public encriptar: EncriptarService,
        public globals : Globals
    ) { }

    public userlogin(username, password) {
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
            .pipe(map(Users => {

                console.log(Users);


                this.setToken(Users[0].name, Users[0].email, Users[0].password, Users[0].perfil, Users[0].rutEmpresa);
                this.getLoggedInName.emit(true);

                this.globals.perfil = Users[0].perfil;
                this.globals.rutEmpresa = Users[0].rutEmpresa;

                return Users;
            }));
    }

    public userregistration(name, email, pwd) {
        return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
            .pipe(map(Users => {
                return Users;
            }));
    }


    //token
    setToken(token: string, mail: string, pass: string, perfil: string, rutEmp: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('mail', this.encriptar.encriptarDatos(mail));
        localStorage.setItem('password', this.encriptar.encriptarDatos(pass));
        localStorage.setItem('perfil', perfil);
        localStorage.setItem('rutEmpresa', rutEmp);

        // this.globals.perfil = perfil;
        // this.globals.rutEmpresa = rutEmp;

        console.log("PASOOOOOO");
        console.log(this.globals.perfil);
    }


    getPerfil() {
        return localStorage.getItem('perfil');
    }

    getRutEmpresa() {
        return localStorage.getItem('rutEmpresa');
    }

    setCookies(cookie: string) {

    }

    getToken() {
        return localStorage.getItem('token');
    }

    getEmail() {
        return this.encriptar.desencriptarDatos(localStorage.getItem('mail'));
    }

    deleteToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('mail');
        localStorage.removeItem('password');
        localStorage.removeItem('perfil');
    }

    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) {
            return true
        }
        return false;
    }

    isPerfil() {

    }
}