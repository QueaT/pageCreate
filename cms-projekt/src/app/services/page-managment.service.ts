import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageManagmentService {

  constructor() { }

  public createArray<T>(rows:number): T[]{
    const arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
      arr[i] = [];
    }
    return arr;
  }
  
}