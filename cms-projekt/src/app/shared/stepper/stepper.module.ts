import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { FormsModuleShared } from 'src/app/modules/forms--module/FormsShared.module';
import { MaterialModule } from 'src/app/modules/material--module/material.module';
import { VerticalAligmentComponent } from './block-aligment/block-aligment.component';

@NgModule({
  declarations: [StepperComponent, VerticalAligmentComponent],
  imports: [
    CommonModule,FormsModuleShared,MaterialModule
  ],
  exports:[StepperComponent],
})
export class StepperModule { }
