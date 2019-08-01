import { Component, OnInit, Input, } from '@angular/core';
import { BlockValues } from 'src/app/types/blockValues.interface';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public indexOfBlock = 0;
  @Input() colName:string;
  public block:BlockValues[] = [this.setConfig(this.indexOfBlock)];
  public blockCopy:BlockValues[] = [];
  public blockArrayOfSettings = [];
  constructor() { }

  ngOnInit() {
  
  }
  test(){
    this.indexOfBlock++;
    this.blockCopy.push(this.setConfig(this.indexOfBlock));
    this.block.push(this.setConfig(this.indexOfBlock))
  }
  trackByFn(index:number) {
    return index
  }
  changeBlockIndex(index:number){
      this.indexOfBlock = index;
  }
  setConfig(index:number){
    const  config = {
      width:'0',
      height:'0',
      backgroundColor:'#562134',
      borderRadius:'0',
      text: 'Wpisz zawartosc bloku',
      justifyContent:'none',
      alignItems:'none',
      index,
     }
     return config
  }
  
  updateObject(event:string,key:string):void{
      this.blockCopy[this.indexOfBlock] = Object.assign({},this.block[this.indexOfBlock]);
    if(key !== 'text' && key !== 'backgroundColor'  && key !== 'justifyContent' && key !== 'alignItems'){
      this.blockCopy[this.indexOfBlock][key] = event + '%';
    }else{
      this.blockCopy[this.indexOfBlock][key] = event
    }
  }
}
