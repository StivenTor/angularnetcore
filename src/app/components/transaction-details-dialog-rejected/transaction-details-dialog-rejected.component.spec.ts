import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsDialogRejectedComponent } from './transaction-details-dialog-rejected.component';

describe('TransactionDetailsDialogRejectedComponent', () => {
  let component: TransactionDetailsDialogRejectedComponent;
  let fixture: ComponentFixture<TransactionDetailsDialogRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsDialogRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsDialogRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
