import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WecInputComponent } from './wec-input.component';

describe('WecInputComponent', () => {
  let component: WecInputComponent;
  let fixture: ComponentFixture<WecInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WecInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WecInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
