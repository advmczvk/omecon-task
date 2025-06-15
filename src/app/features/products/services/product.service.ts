import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http: HttpClient = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('/assets/mock/products.json')
      .pipe(delay(500));
  }
}
