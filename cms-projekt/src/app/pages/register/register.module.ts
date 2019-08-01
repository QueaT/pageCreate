import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterValidationComponent } from './register-page/register-validation/register-validation.component';
import { MaterialModule } from 'src/app/modules/material--module/material.module';
import { UserFormModule } from 'src/app/shared/user-form/user-form.module';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [RegisterPageComponent, RegisterValidationComponent,],
  imports: [
    CommonModule, MaterialModule,UserFormModule,RegisterRoutingModule
  ]
})
export class RegisterModule { }
