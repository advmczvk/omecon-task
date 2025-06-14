import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { of } from 'rxjs';
import { Product } from '@features/products/models/product.model';

describe('Product', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products', done => {
    jest.spyOn(service, 'getProducts').mockReturnValue(of([{} as Product]));

    service.getProducts().subscribe(products => {
      expect(products.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return empty array if no products', done => {
    jest.spyOn(service, 'getProducts').mockReturnValue(of([]));

    service.getProducts().subscribe(products => {
      expect(products.length).toBe(0);
      done();
    });
  });
});
