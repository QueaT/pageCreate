import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TokenExpireTime } from "../types/tokenExpire";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnDestroy {
  public tokenState = new BehaviorSubject(null);
  public sendAccualTime = new BehaviorSubject(null);

  private subscription = new Subscription();

  constructor(private router: Router) {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public assignUserData<T extends {token: string} >(data: T): void {
    this.tokenState.next(data.token);
    this.expireToken(30);
    this.saveTokenInStorage(data.token);
  }

  public autoLogIn(): void {
    const userData: { token: string; disableTime: Date } = JSON.parse(
      localStorage.getItem("user-data")
    );

    if (userData === null) return;

    const tokenCheckClass = new TokenExpireTime(userData.disableTime);
    const tokenTimeIsValid:
      | number
      | boolean = tokenCheckClass.checkIfTokenIsValid();
    if (tokenTimeIsValid) {
      this.tokenState.next(userData.token);
      this.sendAccualTime.next(tokenCheckClass);
      this.expireToken(tokenTimeIsValid);
    } else {
      this.tokenState.next(null);
    }
  }
  private saveTokenInStorage(token: string): void {
    const tokenObject = {
      token,
      disableTime: new Date()
    };
    localStorage.setItem("user-data", JSON.stringify(tokenObject));
    this.autoLogIn();
  }

  private expireToken(timeLeft: number): void {
    const time = 1000 * 60 * timeLeft;
    console.log(timeLeft);
    setTimeout(() => {
      this.logOutUserWhenTokenIsInvalid();
    }, time);
  }
  public logOutUserWhenTokenIsInvalid(){
    localStorage.removeItem("user-data");
    this.tokenState.next(null);
    this.router.navigate(["login"]);
  }
}
