import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupContentComponent } from './signup-content.component';

describe('SignupContentComponent', () => {
  let component: SignupContentComponent;
  let fixture: ComponentFixture<SignupContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupContentComponent]
    });
    fixture = TestBed.createComponent(SignupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
