import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()

export class AuthInterceptorService implements HttpInterceptor{
    constructor(private authService: AuthService){}

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        if(!this.authService.tokenState.value){
            return next.handle(req);
        }
        const appendHeader = req.clone({
            headers: req.headers.append('token',this.authService.tokenState.value )
        })
        return next.handle(appendHeader);
    }

}

