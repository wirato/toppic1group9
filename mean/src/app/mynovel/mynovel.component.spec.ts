import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynovelComponent } from './mynovel.component';

describe('MynovelComponent', () => {
  let component: MynovelComponent;
  let fixture: ComponentFixture<MynovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
