import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WecSelectComponent } from './wec-select.component';

describe('WecSelectComponent', () => {
  let component: WecSelectComponent;
  let fixture: ComponentFixture<WecSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WecSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WecSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
