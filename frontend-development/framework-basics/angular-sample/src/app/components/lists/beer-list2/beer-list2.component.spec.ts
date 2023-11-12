import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerList2Component } from './beer-list2.component';

describe('BeerList2Component', () => {
  let component: BeerList2Component;
  let fixture: ComponentFixture<BeerList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerList2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeerList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
