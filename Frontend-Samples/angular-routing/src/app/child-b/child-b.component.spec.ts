import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBComponent } from './child-b.component';

describe('ChildBComponent', () => {
  let component: ChildBComponent;
  let fixture: ComponentFixture<ChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
