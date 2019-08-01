import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BlockValues } from "src/app/types/blockValues.interface";

@Component({
  selector: 'app-block-aligment',
  templateUrl: './block-aligment.component.html',
  styleUrls: ['./block-aligment.component.scss']
})
export class VerticalAligmentComponent implements OnInit {
  @Input() block:BlockValues;
  @Input() alignType: string;
  @Output() emitBlockValue = new EventEmitter();
   
  constructor() { }

  ngOnInit() {

  }
  updateObject(event:string, key:string){
    this.emitBlockValue.emit({event,key});
    }

}
