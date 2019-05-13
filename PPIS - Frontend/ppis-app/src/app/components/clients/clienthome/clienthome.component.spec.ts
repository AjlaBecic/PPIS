import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienthomeComponent } from './clienthome.component';

describe('ClienthomeComponent', () => {
  let component: ClienthomeComponent;
  let fixture: ComponentFixture<ClienthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
