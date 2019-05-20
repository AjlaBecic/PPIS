import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianhomeComponent } from './technicianhome.component';

describe('TechnicianhomeComponent', () => {
  let component: TechnicianhomeComponent;
  let fixture: ComponentFixture<TechnicianhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
