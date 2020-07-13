import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidatedDialogComponent } from './liquidated-dialog.component';

describe('LiquidatedDialogComponent', () => {
  let component: LiquidatedDialogComponent;
  let fixture: ComponentFixture<LiquidatedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidatedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
