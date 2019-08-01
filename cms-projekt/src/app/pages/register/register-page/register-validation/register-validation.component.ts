import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router"



@Component({
  selector: 'app-register-validation',
  templateUrl: './register-validation.component.html',
  styleUrls: ['./register-validation.component.scss']
})
export class RegisterValidationComponent implements OnInit {
   registerCongig = { nick: ["", [Validators.required, Validators.minLength(3)]],
   email: ["", [Validators.required, Validators.email]],
   password: ["", [Validators.required]],
   confirm_password: ["",[Validators.required]]
   }
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
  }
  public redirectToLogin(){
    this.router.navigate(['/login'])
  }

}
