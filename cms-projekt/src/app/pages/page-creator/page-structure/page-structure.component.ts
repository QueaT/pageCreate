import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { colTypes } from "../../../types/data-col";
import { scan, takeLast, exhaustMap } from "rxjs/operators";
import { of, timer } from "rxjs";
import { PageManagmentService } from "src/app/services/page-managment.service";

@Component({
  selector: "app-page-structure",
  templateUrl: "./page-structure.component.html",
  styleUrls: ["./page-structure.component.scss"]
})
export class PageStructureComponent implements OnInit {
  columns: colTypes[] = [
    { col: "col-1", value: 1 },
    { col: "col-2", value: 2 },
    { col: "col-4", value: 4 },
    { col: "col-6", value: 6 }
  ];
  columnsToChoose = [...this.columns];
  dataClass: colTypes[] = [];
  dataStructureOfColumns = this.createArray(2);

  constructor(private pageManagment: PageManagmentService) {}

  ngOnInit() {}

  public addRow():void {
    this.dataStructureOfColumns.push(([] as colTypes[]));
  }
  public removeRow():void {
    this.dataStructureOfColumns.splice(this.dataStructureOfColumns.length - 1, 1);
  }
 public drop<T extends colTypes>(event:CdkDragDrop<T[]>):void {
    this.dataClass = event.container.data;
    this.countNumberOfColumns(this.dataClass);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  } 

  private createArray<T>(rows:number): T[] {
    return this.pageManagment.createArray(rows);
  }
  private countNumberOfColumns(data: colTypes[]):void {
    timer(50)
      .pipe(
        exhaustMap(() => {
          return of(...data);
        }),
        scan<any>((acc, curr, index) => {
          acc += curr.value;
          return acc > 12 ? this.setBackBlockToArray(index) : acc;
        }, 0),
        takeLast(1)
      )
      .subscribe();
  }
  private setBackBlockToArray(index: number):void {
    this.columns.push(...this.dataClass.splice(index, 1));
  }
}
