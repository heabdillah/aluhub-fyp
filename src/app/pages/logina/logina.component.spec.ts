import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginaComponent } from './logina.component';

describe('LoginaComponent', () => {
  let component: LoginaComponent;
  let fixture: ComponentFixture<LoginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
