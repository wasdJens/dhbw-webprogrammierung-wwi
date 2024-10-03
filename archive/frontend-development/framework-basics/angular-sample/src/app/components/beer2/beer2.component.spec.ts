import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beer2Component } from './beer2.component';

describe('Beer2Component', () => {
  let component: Beer2Component;
  let fixture: ComponentFixture<Beer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Beer2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Beer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
