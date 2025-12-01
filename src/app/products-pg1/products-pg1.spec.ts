import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPg1 } from './products-pg1';

describe('ProductsPg1', () => {
  let component: ProductsPg1;
  let fixture: ComponentFixture<ProductsPg1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPg1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPg1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
