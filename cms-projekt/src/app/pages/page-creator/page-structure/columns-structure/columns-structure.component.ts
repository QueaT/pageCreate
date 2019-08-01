import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { colTypes } from "../../../../types/data-col";
import {
  CdkDragDrop,
} from "@angular/cdk/drag-drop";
import { MatDialog } from '@angular/material/dialog';
import { ColumnModifyDialogComponent } from '../dialogs/column-modify-dialog/column-modify-dialog.component';


@Component({
  selector: 'app-columns-structure',
  templateUrl: './columns-structure.component.html',
  styleUrls: ['../page-structure.component.scss','./columns-structure.component.scss']
})
export class ColumnsStructureComponent implements OnInit {
 @Input() dataClass: colTypes[];
 @Output() dropEmitter: EventEmitter<CdkDragDrop<string>> = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit(){
  }
  public removeColumn(index:number):void{
    this.dataClass.splice(index,1);
  }

  drop(event: CdkDragDrop<string>):void{
    this.dropEmitter.emit(event);
  }
  trackByFn(index:number):number {
    return index;
  }
  openColumnConfig(item:colTypes):void{
    this.dialog.open(ColumnModifyDialogComponent,{
      width: '1050px',
      data: item
    });
  }
}
