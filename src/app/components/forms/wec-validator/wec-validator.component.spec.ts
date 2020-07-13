import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WecValidatorComponent } from './wec-validator.component';

describe('WecValidatorComponent', () => {
  let component: WecValidatorComponent;
  let fixture: ComponentFixture<WecValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WecValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WecValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
