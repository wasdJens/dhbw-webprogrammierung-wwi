import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSample3Component } from './obs-sample3.component';

describe('ObsSample3Component', () => {
  let component: ObsSample3Component;
  let fixture: ComponentFixture<ObsSample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsSample3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsSample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
