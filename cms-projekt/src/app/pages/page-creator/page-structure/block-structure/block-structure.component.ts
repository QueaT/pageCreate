import { Component, OnInit, Input } from '@angular/core';
import { colTypes } from "../../../../types/data-col";

@Component({
  selector: 'app-block-structure',
  templateUrl: './block-structure.component.html',
  styleUrls: ['./block-structure.component.scss','../page-structure.component.scss']
})
export class BlockStructureComponent implements OnInit {
 @Input() columnsToChoose: colTypes[];
 @Input() columns: colTypes[];
  constructor() { }

  ngOnInit() {
  }

  public addToColumnBox(column: colTypes) {
    this.columns.push(column);
  }

}
