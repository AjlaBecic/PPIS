import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmyrequestsComponent } from './clientmyrequests.component';

describe('ClientmyrequestsComponent', () => {
  let component: ClientmyrequestsComponent;
  let fixture: ComponentFixture<ClientmyrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientmyrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmyrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
