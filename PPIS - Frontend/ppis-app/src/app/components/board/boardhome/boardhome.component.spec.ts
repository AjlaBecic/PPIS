import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardhomeComponent } from './boardhome.component';

describe('BoardhomeComponent', () => {
  let component: BoardhomeComponent;
  let fixture: ComponentFixture<BoardhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
