import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintQrCodeDialogComponent } from './print-qr-code-dialog.component';

describe('PrintQrCodeDialogComponent', () => {
  let component: PrintQrCodeDialogComponent;
  let fixture: ComponentFixture<PrintQrCodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintQrCodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintQrCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
