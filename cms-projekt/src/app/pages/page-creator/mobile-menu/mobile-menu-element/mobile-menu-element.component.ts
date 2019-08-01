import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mobile-menu-element",
  templateUrl: "./mobile-menu-element.component.html",
  styleUrls: ["./mobile-menu-element.component.scss"]
})
export class MobileMenuElementComponent implements OnInit {
  @Input() menuValues;
  openChild = false;
  constructor() {}

  ngOnInit() {}
  public displayChildren(child) {
    if (child.children) {
      this.openChild = !this.openChild
    }
  }
}
