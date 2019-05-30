import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmanagerchangeComponent } from './cmanagerchange.component';

describe('CmanagerchangeComponent', () => {
  let component: CmanagerchangeComponent;
  let fixture: ComponentFixture<CmanagerchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmanagerchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmanagerchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
