import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnewproblemComponent } from './adminnewproblem.component';

describe('AdminnewproblemComponent', () => {
  let component: AdminnewproblemComponent;
  let fixture: ComponentFixture<AdminnewproblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnewproblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnewproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
