import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmreservationComponent } from './confirmreservation.component';

describe('ConfirmreservationComponent', () => {
  let component: ConfirmreservationComponent;
  let fixture: ComponentFixture<ConfirmreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
