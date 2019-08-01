import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuElementComponent } from './mobile-menu-element.component';

describe('MobileMenuElementComponent', () => {
  let component: MobileMenuElementComponent;
  let fixture: ComponentFixture<MobileMenuElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
