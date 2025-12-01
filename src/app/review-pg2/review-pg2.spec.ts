import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPg2 } from './review-pg2';

describe('ReviewPg2', () => {
  let component: ReviewPg2;
  let fixture: ComponentFixture<ReviewPg2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewPg2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPg2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
