import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepostpageComponent } from './createpostpage.component';

describe('CreatepostpageComponent', () => {
  let component: CreatepostpageComponent;
  let fixture: ComponentFixture<CreatepostpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepostpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepostpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
