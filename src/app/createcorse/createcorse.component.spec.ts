import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecorseComponent } from './createcorse.component';

describe('CreatecorseComponent', () => {
  let component: CreatecorseComponent;
  let fixture: ComponentFixture<CreatecorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
