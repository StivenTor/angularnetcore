import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePersonalizedPaymentDialgoComponent } from './resume-personalized-payment-dialog.component';

describe('ResumePersonalizedPaymentDialgoComponent', () => {
  let component: ResumePersonalizedPaymentDialgoComponent;
  let fixture: ComponentFixture<ResumePersonalizedPaymentDialgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePersonalizedPaymentDialgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePersonalizedPaymentDialgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
