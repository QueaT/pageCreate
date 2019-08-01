import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWalidationComponent } from './login-walidation.component';

describe('LoginWalidationComponent', () => {
  let component: LoginWalidationComponent;
  let fixture: ComponentFixture<LoginWalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWalidationComponent ],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
