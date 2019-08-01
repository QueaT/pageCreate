import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../tools/mocks/menu-elements';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss']
})
export class MenuDesktopComponent implements OnInit {
  menuItems = MenuItems

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public logOut(){
    localStorage.removeItem('user-data');
    this.router.navigate(['login']);
  }

}
