import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianrequestComponent } from './technicianrequest.component';

describe('TechnicianrequestComponent', () => {
  let component: TechnicianrequestComponent;
  let fixture: ComponentFixture<TechnicianrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
