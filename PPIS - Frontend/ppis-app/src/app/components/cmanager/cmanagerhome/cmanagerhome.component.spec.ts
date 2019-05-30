import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmanagerhomeComponent } from './cmanagerhome.component';

describe('CmanagerhomeComponent', () => {
  let component: CmanagerhomeComponent;
  let fixture: ComponentFixture<CmanagerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmanagerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmanagerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
