import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAligmentComponent } from './block-aligment.component';

describe('VerticalAligmentComponent', () => {
  let component: VerticalAligmentComponent;
  let fixture: ComponentFixture<VerticalAligmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalAligmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalAligmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
