import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianChangesComponent } from './technician-changes.component';

describe('TechnicianChangesComponent', () => {
  let component: TechnicianChangesComponent;
  let fixture: ComponentFixture<TechnicianChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
