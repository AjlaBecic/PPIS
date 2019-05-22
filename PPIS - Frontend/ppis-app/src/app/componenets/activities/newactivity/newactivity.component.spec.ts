import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewactivityComponent } from './newactivity.component';

describe('NewactivityComponent', () => {
  let component: NewactivityComponent;
  let fixture: ComponentFixture<NewactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
