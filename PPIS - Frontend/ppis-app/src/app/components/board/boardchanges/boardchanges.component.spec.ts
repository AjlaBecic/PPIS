import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardchangesComponent } from './boardchanges.component';

describe('BoardchangesComponent', () => {
  let component: BoardchangesComponent;
  let fixture: ComponentFixture<BoardchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
