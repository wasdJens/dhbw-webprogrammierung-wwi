import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSample2Component } from './obs-sample2.component';

describe('ObsSample2Component', () => {
  let component: ObsSample2Component;
  let fixture: ComponentFixture<ObsSample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsSample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
