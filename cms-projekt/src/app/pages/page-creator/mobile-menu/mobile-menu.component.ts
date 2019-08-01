import { Component, OnInit } from '@angular/core';
import { MenuMobileConnectorService } from 'src/app/services/menu-mobile-connector.service';
import { MenuItems } from '../../../tools/mocks/menu-elements';




@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  toggleMenu:boolean;
  menuItems = MenuItems


  constructor(private mobileMenu: MenuMobileConnectorService) { 
  }
  ngOnInit() {
    this.mobileMenu.toggleMenu.subscribe((toggle:boolean) =>{
       this.toggleMenu = toggle;
       console.log(this.menuItems);
    })
  }
  closeMenu(){
    this.toggleMenu = false;
  }

}
