import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanMatch, CanMatchFn, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanMatch,CanActivate {

    public checkAuthStatus():boolean{
        if(!localStorage.getItem('LUS_CLAVE'))
        {
            this.router.navigate(['/auth']);
            return false
        }
        return true
    }

    constructor(private router:Router,) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       
        return this.checkAuthStatus();
    }
    canMatch(route: Route, segments: UrlSegment[]): boolean {
        return this.checkAuthStatus();
    }
    
}