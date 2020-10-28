import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadnovelComponent } from './readnovel.component';

describe('ReadnovelComponent', () => {
  let component: ReadnovelComponent;
  let fixture: ComponentFixture<ReadnovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadnovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadnovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
