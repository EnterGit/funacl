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

    // baseUrl: string = "http://localhost:8080/funaWS/Login/";
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    
    

    constructor(private httpClient: HttpClient) { }

    public userlogin(username, password) {
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
            .pipe(map(Users => {
                this.setToken(Users[0].name);
                this.getLoggedInName.emit(true);    

                console.log("API SERVICE " + this.getLoggedInName.emit(true));
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
    setToken(token: string) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }

    
    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) {
            return true
        }
        return false;
    }
}