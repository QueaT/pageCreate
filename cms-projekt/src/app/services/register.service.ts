import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthUser } from "../types/auth-interface";
import { tap, catchError } from "rxjs/operators";
import { throwError, Subject } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  toggleLoader = new Subject();

  constructor(private http: HttpClient,private authService: AuthService) {
  }

  public register_user(config: AuthUser) {
    this.setNextValueToLoader(true);
    return this.http
      .post("https://angular-node-app-queat.herokuapp.com/register", config)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        tap((data: AuthUser) => {
          console.log('ok')
         this.authService.assignUserData(data);
         this.setNextValueToLoader(false);
        })
      );
  }

  public login_user(config: AuthUser) {
    this.setNextValueToLoader(true);
    return this.http
      .post("https://angular-node-app-queat.herokuapp.com/login", config)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        tap((data: AuthUser) => {
          this.authService.assignUserData(data);
          this.setNextValueToLoader(false);
        })
      );
  }

  private errorHandler(err: HttpErrorResponse) {
    this.setNextValueToLoader(false);
    let errorMessage = `Error: ${err.error.error}`;
    return throwError(errorMessage);
  }
  private setNextValueToLoader(state: boolean) {
    return this.toggleLoader.next(state);
  }
}
