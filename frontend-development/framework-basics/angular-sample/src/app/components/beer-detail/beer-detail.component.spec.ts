import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailComponent } from './beer-detail.component';

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
