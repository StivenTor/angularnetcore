import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCollectionDialogComponent } from './request-collection-dialog.component';

describe('RequestCollectionDialogComponent', () => {
  let component: RequestCollectionDialogComponent;
  let fixture: ComponentFixture<RequestCollectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCollectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCollectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
