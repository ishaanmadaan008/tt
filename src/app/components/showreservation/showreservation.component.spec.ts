import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreservationComponent } from './showreservation.component';

describe('ShowreservationComponent', () => {
  let component: ShowreservationComponent;
  let fixture: ComponentFixture<ShowreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
