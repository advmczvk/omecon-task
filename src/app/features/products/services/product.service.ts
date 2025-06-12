import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import products from '@mock/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(products).pipe(delay(500));
  }
}
