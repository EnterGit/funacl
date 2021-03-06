import { ApiPostulanteService } from './../services/login/apiPostulante.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthPostulanteguardGuard implements CanActivate {
    constructor(
        private dataService: ApiPostulanteService,
        private router: Router
    ) { }


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const routeurl: string = state.url;
        console.log("POSTULANTE");
        console.log(routeurl);
        
        return this.isLogin(routeurl);
    }

    isLogin(routeurl: string) {
        if (this.dataService.isLoggedIn()) {
            return true;
        }
        this.dataService.redirectUrl = routeurl;
        this.router.navigate(['/loginPersona'], { queryParams: { returnUrl: routeurl } });
    }


    isAuth() {
        if (this.dataService.isLoggedIn()) {
            console.log("YA AUTORIZADO");
            return true;
        }
    }
}