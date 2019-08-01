import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ConfirmPasswordValidator } from "../../../validators/password-validation";
import { Router } from "@angular/router";
import { RegisterService } from "src/app/services/register.service";
import { DialogMessageService } from "src/app/services/dialog-message.service";
import { AuthUser } from "src/app/types/auth-interface";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  @Input() registerMode: boolean;
  @Input() config: {};
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private dialogMessage: DialogMessageService
  ) {}

  ngOnInit() {
    this.setValidators();
  }

  public setValidators() {
    this.loginForm = this.fb.group(
      this.config,
      this.registerMode
        ? { validators: ConfirmPasswordValidator.MatchPassword }
        : null
    );
  }
  get name() {
    return this.loginForm.get("nick");
  }
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  get passwordChecker() {
    return this.registerMode ? this.loginForm.get("confirm_password") : null;
  }
  public checkIfUserExist() {
    this.registerMode ? this.registerUser() : this.loginUser();
  }

  private registerUser() {
    delete this.loginForm.value.confirm_password;
    this.registerService.register_user(this.loginForm.value).subscribe(
      (response: AuthUser) => {
        this.dialogMessage.displayMessage(response.message, "succes-snackbar");
        this.router
      },
      errorMessage => {
        this.dialogMessage.displayMessage(errorMessage, "error-snackbar");
      }
    );
  }
  private loginUser() {
    this.registerService.login_user(this.loginForm.value).subscribe(
      (response: AuthUser) => {
        this.dialogMessage.displayMessage(response.message, "succes-snackbar");
        this.router.navigate(["page-creator"]);
      },
      errorMessage => {
        this.dialogMessage.displayMessage(errorMessage, "error-snackbar");
      }
    );
  }
}
