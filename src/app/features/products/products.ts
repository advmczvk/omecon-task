import { Component, inject } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';
import { ProductList } from './components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [ProductList],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class Products {
  protected products$: Observable<Product[]>;
  private readonly productService: ProductService = inject(ProductService);

  constructor() {
    this.products$ = this.productService.getProducts();
  }
}
