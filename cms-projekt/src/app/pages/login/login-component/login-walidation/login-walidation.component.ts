import { Component, OnInit, NgZone } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router"



@Component({
  selector: "app-login-walidation",
  templateUrl: "./login-walidation.component.html",
  styleUrls: ["./login-walidation.component.scss"]
})
export class LoginWalidationComponent implements OnInit {
  loginForm: FormGroup;
   loginConfig = { nick: ["", [Validators.required, Validators.minLength(3)]],
   email: ["", [Validators.required, Validators.email]],
   password: ["", [Validators.required]]
   }
   text = 'ok';
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
  }
  public redirectToRegister(){
    this.router.navigate(["/register"])
  }
}
