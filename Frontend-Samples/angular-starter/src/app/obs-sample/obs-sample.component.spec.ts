import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSampleComponent } from './obs-sample.component';

describe('ObsSampleComponent', () => {
  let component: ObsSampleComponent;
  let fixture: ComponentFixture<ObsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
