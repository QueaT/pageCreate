import { Component, OnInit, NgZone, OnDestroy,Input } from '@angular/core';
import { interval } from "rxjs";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-session-time',
  templateUrl: './session-time.component.html',
  styleUrls: ['./session-time.component.scss'],
})
export class SessionTimeComponent implements OnInit,OnDestroy {
  @Input() mobileMode: boolean = false;
  timeObject:number = 0;
  private subscription = new Subscription();
  constructor(private zone:NgZone,private authService: AuthService) { }

  ngOnInit() {
     this.tokenExpireTime();
}
  public tokenExpireTime(){
   this.subscription.add(this.authService.sendAccualTime.subscribe((value :any)=>{
      if(value === null) return;
      const timer = interval(1000);
      this.subscription.add(timer.subscribe(()=>{
        this.timeObject = value.checkIfTokenIsValid();
        console.log(this.timeObject ,'component')
        if(this.timeObject <= 0){
          this.authService.logOutUserWhenTokenIsInvalid();
        }
      }))
    }));
}
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

}
