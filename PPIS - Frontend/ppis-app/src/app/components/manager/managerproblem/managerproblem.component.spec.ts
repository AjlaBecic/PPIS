import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerproblemComponent } from './managerproblem.component';

describe('ManagerproblemComponent', () => {
  let component: ManagerproblemComponent;
  let fixture: ComponentFixture<ManagerproblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerproblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
