import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { colTypes } from "../../../../../types/data-col";


@Component({
  selector: 'app-column-modify-dialog',
  templateUrl: './column-modify-dialog.component.html',
  styleUrls: ['./column-modify-dialog.component.scss']
})
export class ColumnModifyDialogComponent implements OnInit {
 

  constructor( public dialogRef: MatDialogRef<colTypes>,
    @Inject(MAT_DIALOG_DATA) public data: colTypes) { }

  ngOnInit() {
  }

}
