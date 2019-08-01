import { Component, OnInit } from '@angular/core';
import { MenuMobileConnectorService } from 'src/app/services/menu-mobile-connector.service';

@Component({
  
  selector: 'app-page-creator',
  templateUrl: './page-creator.component.html',
  styleUrls: ['./page-creator.component.scss'],

})
export class PageCreatorComponent implements OnInit {

  constructor(private mobileMenu: MenuMobileConnectorService) { }
  ngOnInit() {
  }
  openMenu(){
    this.mobileMenu.toggleMenu.next(true);
  }
}
