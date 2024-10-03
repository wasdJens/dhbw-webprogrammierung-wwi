import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCreateComponent } from './beer-create.component';

describe('BeerCreateComponent', () => {
  let component: BeerCreateComponent;
  let fixture: ComponentFixture<BeerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
