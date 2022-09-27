import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterDirectivesComponent } from './starter-directives.component';

describe('StarterDirectivesComponent', () => {
  let component: StarterDirectivesComponent;
  let fixture: ComponentFixture<StarterDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
