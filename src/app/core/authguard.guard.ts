import { ApiService } from '../services/login/api.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
    constructor(
        private dataService: ApiService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const routeurl: string = state.url;
        return this.isLogin(routeurl);
    }

    isLogin(routeurl: string) {
        if (this.dataService.isLoggedIn()) {
            return true;
        }
        this.dataService.redirectUrl = routeurl;
        console.log(routeurl);
        this.router.navigate(['/loginPersona'], { queryParams: { returnUrl: routeurl } });
    }

    isAuth() {
        if (this.dataService.isLoggedIn()) {
            console.log("YA AUTORIZADO");
            return true;
        }
    }
}