import { Component, OnInit,Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu-desktop-element',
  templateUrl: './menu-desktop-element.component.html',
  styleUrls: ['./menu-desktop-element.component.scss']
})
export class MenuDesktopElementComponent implements OnInit  {
  @Input()  menuValues;
  openChild = false;
  constructor() { }

  ngOnInit() {
  }
  displayChildren(child){
    if (child.children) {
      this.openChild = !this.openChild
    }
  }

}
