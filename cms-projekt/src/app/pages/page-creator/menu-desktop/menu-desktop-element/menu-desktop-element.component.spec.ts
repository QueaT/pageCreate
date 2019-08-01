import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesktopElementComponent } from './menu-desktop-element.component';

describe('MenuDesktopElementComponent', () => {
  let component: MenuDesktopElementComponent;
  let fixture: ComponentFixture<MenuDesktopElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDesktopElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDesktopElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
