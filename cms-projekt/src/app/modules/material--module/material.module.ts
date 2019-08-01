import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';





@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [ MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatSlideToggleModule,
    DragDropModule,
    MatSelectModule,
    MatDialogModule,
    MatStepperModule,
    MatRadioModule
    ]
})
export class MaterialModule { }
