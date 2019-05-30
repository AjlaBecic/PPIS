import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmanagerchangesComponent } from './cmanagerchanges.component';

describe('CmanagerchangesComponent', () => {
  let component: CmanagerchangesComponent;
  let fixture: ComponentFixture<CmanagerchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmanagerchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmanagerchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
