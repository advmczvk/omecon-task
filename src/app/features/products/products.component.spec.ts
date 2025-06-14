import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductService } from '@features/products/services/product.service';
import { of } from 'rxjs';
import { ProductList } from '@features/products/components/product-list/product-list.component';

describe('Products', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let serviceMock: jest.Mocked<ProductService>;
  beforeEach(async () => {
    serviceMock = {
      getProducts: jest.fn().mockReturnValue(of([])),
    } as unknown as jest.Mocked<ProductService>;

    await TestBed.configureTestingModule({
      imports: [ProductsComponent, ProductList],
      providers: [{ provide: ProductService, useValue: serviceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('powinien wywołać productService.getProducts()', async () => {
      expect(serviceMock.getProducts).toHaveBeenCalledTimes(1);
    });
  });
});
