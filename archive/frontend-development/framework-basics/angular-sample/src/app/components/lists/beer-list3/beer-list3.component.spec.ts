import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerList3Component } from './beer-list3.component';

describe('BeerList3Component', () => {
  let component: BeerList3Component;
  let fixture: ComponentFixture<BeerList3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerList3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeerList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
