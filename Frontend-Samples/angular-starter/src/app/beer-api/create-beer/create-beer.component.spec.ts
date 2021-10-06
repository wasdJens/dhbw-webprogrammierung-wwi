import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBeerComponent } from './create-beer.component';

describe('CreateBeerComponent', () => {
  let component: CreateBeerComponent;
  let fixture: ComponentFixture<CreateBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
