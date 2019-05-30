import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardchangeComponent } from './boardchange.component';

describe('BoardchangeComponent', () => {
  let component: BoardchangeComponent;
  let fixture: ComponentFixture<BoardchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
