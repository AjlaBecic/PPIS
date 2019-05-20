import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerproblemsComponent } from './managerproblems.component';

describe('ManagerproblemsComponent', () => {
  let component: ManagerproblemsComponent;
  let fixture: ComponentFixture<ManagerproblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerproblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
