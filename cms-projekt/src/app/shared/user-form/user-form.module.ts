import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form-component/user-form.component';
import { MaterialModule } from 'src/app/modules/material--module/material.module';
import { FormsModuleShared } from 'src/app/modules/forms--module/FormsShared.module';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,MaterialModule,FormsModuleShared
  ],
  exports:[UserFormComponent],
})
export class UserFormModule { }
