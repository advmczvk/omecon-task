import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { Product } from '../../models/product.model';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  shareReplay,
  startWith,
} from 'rxjs';
import { StockPipe } from '@shared/pipes/stock/stock.pipe';
import { SpinnerComponent } from '@shared/components/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockEnum } from '@shared/enums/stock.enum';
import { stockCalculator } from '@shared/util/stock-calculator';

@Component({
  selector: 'app-product-list',
  imports: [
    CurrencyPipe,
    AsyncPipe,
    StockPipe,
    SpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductList implements OnChanges {
  @Input({ required: true }) products$!: Observable<Product[]>;

  readonly pageState$ = new BehaviorSubject({
    page: 1,
    size: 5,
  });
  readonly search$ = new BehaviorSubject<string>('');
  readonly stock$ = new BehaviorSubject<StockEnum>(StockEnum.ALL_STOCK);

  page$!: Observable<Product[]>;
  totalPages$!: Observable<number>;
  filtered$!: Observable<Product[]>;
  pagination$!: Observable<number[]>;

  protected loading$!: Observable<boolean>;

  protected readonly StockEnum = StockEnum;

  ngOnChanges(): void {
    this.filtered$ = combineLatest([
      this.products$,
      this.search$,
      this.stock$,
    ]).pipe(
      map(([products, searchParam, stockParam]) => {
        return products.filter(
          p =>
            p.name.toLowerCase().includes(searchParam.trim().toLowerCase()) &&
            (stockParam === StockEnum.ALL_STOCK ||
              stockParam === stockCalculator(p.stock))
        );
      }),
      shareReplay(1)
    );

    this.loading$ = this.filtered$.pipe(
      map(() => false),
      startWith(true)
    );

    this.page$ = combineLatest([this.filtered$, this.pageState$]).pipe(
      map(([products, { page, size }]) =>
        products.slice((page - 1) * size, page * size)
      ),
      shareReplay(1)
    );

    this.totalPages$ = combineLatest([this.filtered$, this.pageState$]).pipe(
      map(([products, { size }]) =>
        Math.max(1, Math.ceil(products.length / size))
      ),
      shareReplay(1)
    );

    this.pagination$ = combineLatest([this.totalPages$, this.pageState$]).pipe(
      map(([total, { page }]) => {
        if (total <= 5) {
          return Array.from({ length: total }, (_, i) => i + 1);
        }

        if (page <= 3) {
          return [1, 2, 3, 4, 5];
        }

        if (page >= total - 2) {
          return Array.from({ length: 5 }, (_, i) => total - 4 + i);
        }

        return [page - 2, page - 1, page, page + 1, page + 2];
      })
    );
  }

  onSearch(term: string): void {
    this.search$.next(term);
    this.resetPage();
  }

  onStockSelected(stock: string): void {
    this.stock$.next(stock as StockEnum);
    this.resetPage();
  }

  next(): void {
    this.pageState$.next({
      ...this.pageState$.value,
      page: this.pageState$.value.page + 1,
    });
  }

  prev(): void {
    this.pageState$.next({
      ...this.pageState$.value,
      page: this.pageState$.value.page - 1,
    });
  }

  goToPage(n: number): void {
    this.pageState$.next({
      ...this.pageState$.value,
      page: n,
    });
  }

  private resetPage(): void {
    const { size } = this.pageState$.value;
    this.pageState$.next({
      page: 1,
      size,
    });
  }
}
