import { Component, OnInit } from '@angular/core';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoader = false;
  constructor(private authService: AuthService,private registerService: RegisterService){
  }
  ngOnInit(): void {
    this.authService.autoLogIn();
    this.registerService.toggleLoader.subscribe((value: boolean )=> {
      this.showLoader = value 
    })
  }
}
