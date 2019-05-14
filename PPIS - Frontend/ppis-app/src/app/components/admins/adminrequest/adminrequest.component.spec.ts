import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrequestComponent } from './adminrequest.component';

describe('AdminrequestComponent', () => {
  let component: AdminrequestComponent;
  let fixture: ComponentFixture<AdminrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
