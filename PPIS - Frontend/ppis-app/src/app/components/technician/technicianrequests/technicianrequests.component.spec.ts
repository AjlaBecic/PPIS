import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianrequestsComponent } from './technicianrequests.component';

describe('TechnicianrequestsComponent', () => {
  let component: TechnicianrequestsComponent;
  let fixture: ComponentFixture<TechnicianrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
