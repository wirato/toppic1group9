import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateepComponent } from './createep.component';

describe('CreateepComponent', () => {
  let component: CreateepComponent;
  let fixture: ComponentFixture<CreateepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
