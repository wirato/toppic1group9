import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveleditComponent } from './noveledit.component';

describe('NoveleditComponent', () => {
  let component: NoveleditComponent;
  let fixture: ComponentFixture<NoveleditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoveleditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoveleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
