import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSample4Component } from './obs-sample4.component';

describe('ObsSample4Component', () => {
  let component: ObsSample4Component;
  let fixture: ComponentFixture<ObsSample4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsSample4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsSample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
