import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientrequestComponent } from './clientrequest.component';

describe('ClientrequestComponent', () => {
  let component: ClientrequestComponent;
  let fixture: ComponentFixture<ClientrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
