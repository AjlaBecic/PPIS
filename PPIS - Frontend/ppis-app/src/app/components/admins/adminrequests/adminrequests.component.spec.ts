import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrequestsComponent } from './adminrequests.component';

describe('AdminrequestsComponent', () => {
  let component: AdminrequestsComponent;
  let fixture: ComponentFixture<AdminrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
