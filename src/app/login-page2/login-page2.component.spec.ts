import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage2Component } from './login-page2.component';

describe('LoginPage2Component', () => {
  let component: LoginPage2Component;
  let fixture: ComponentFixture<LoginPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
