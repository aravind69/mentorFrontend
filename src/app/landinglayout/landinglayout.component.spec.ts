import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinglayoutComponent } from './landinglayout.component';

describe('LandinglayoutComponent', () => {
  let component: LandinglayoutComponent;
  let fixture: ComponentFixture<LandinglayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandinglayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandinglayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
