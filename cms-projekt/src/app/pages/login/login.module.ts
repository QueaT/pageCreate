import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login-component/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { MaterialModule } from "../../modules/material--module/material.module";
import { LoginWalidationComponent } from './login-component/login-walidation/login-walidation.component';
import { UserFormModule } from 'src/app/shared/user-form/user-form.module';




@NgModule({
  declarations: [LoginComponent, LoginWalidationComponent],
  imports: [CommonModule, LoginRoutingModule, MaterialModule,UserFormModule],
  exports: []
})
export class LoginModule {}
