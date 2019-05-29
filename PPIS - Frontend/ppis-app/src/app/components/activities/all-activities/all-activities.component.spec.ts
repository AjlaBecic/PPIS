import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActivitiesComponent } from './all-activities.component';

describe('AllActivitiesComponent', () => {
  let component: AllActivitiesComponent;
  let fixture: ComponentFixture<AllActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
