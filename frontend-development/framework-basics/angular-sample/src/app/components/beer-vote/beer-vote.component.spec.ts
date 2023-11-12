import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerVoteComponent } from './beer-vote.component';

describe('BeerVoteComponent', () => {
  let component: BeerVoteComponent;
  let fixture: ComponentFixture<BeerVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerVoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeerVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
