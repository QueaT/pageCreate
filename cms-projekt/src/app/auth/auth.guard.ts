import { Injectable } from '@angular/core';
import { RouterStateSnapshot,ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
    constructor(private authUser: AuthService,private router: Router){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(!this.authUser.tokenState.value){
           return  this.router.parseUrl('');
        }else{
              return true;
        }
    }
}