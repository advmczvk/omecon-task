import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list.component';
import { firstValueFrom, Observable, of } from 'rxjs';
import { Product } from '@features/products/models/product.model';
import { SpinnerComponent } from '@shared/components/spinner.component';
import { StockPipe } from '@shared/pipes/stock/stock.pipe';
import { StockEnum } from '@shared/enums/stock.enum';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;
  let products$: Observable<Product[]>;

  beforeEach(async () => {
    products$ = of([
      {
        id: 1,
        name: 'Test Product',
        price: 100,
        stock: 50,
      },
      {
        id: 2,
        name: 'Another Product',
        price: 200,
        stock: 30,
      },
      {
        id: 3,
        name: 'Third Product',
        price: 150,
        stock: 20,
      },
      {
        id: 4,
        name: 'Fourth Product',
        price: 250,
        stock: 10,
      },
      {
        id: 5,
        name: 'Fifth Product',
        price: 300,
        stock: 0,
      },
      {
        id: 6,
        name: 'Sixth Product',
        price: 400,
        stock: 5,
      },
      {
        id: 7,
        name: 'Seventh Product',
        price: 350,
        stock: 15,
      },
      {
        id: 8,
        name: 'Eighth Product',
        price: 450,
        stock: 25,
      },
      {
        id: 9,
        name: 'Ninth Product',
        price: 500,
        stock: 35,
      },
      {
        id: 10,
        name: 'Tenth Product',
        price: 550,
        stock: 45,
      },
      {
        id: 11,
        name: 'Eleventh Product',
        price: 600,
        stock: 55,
      },
      {
        id: 12,
        name: 'Twelfth Product',
        price: 650,
        stock: 65,
      },
      {
        id: 13,
        name: 'Thirteenth Product',
        price: 700,
        stock: 75,
      },
      {
        id: 14,
        name: 'Fourteenth Product',
        price: 750,
        stock: 85,
      },
      {
        id: 15,
        name: 'Fifteenth Product',
        price: 800,
        stock: 95,
      },
      {
        id: 16,
        name: 'Sixteenth Product',
        price: 850,
        stock: 105,
      },
      {
        id: 17,
        name: 'Seventeenth Product',
        price: 900,
        stock: 115,
      },
      {
        id: 18,
        name: 'Eighteenth Product',
        price: 950,
        stock: 125,
      },
      {
        id: 19,
        name: 'Nineteenth Product',
        price: 1000,
        stock: 135,
      },
      {
        id: 20,
        name: 'Twentieth Product',
        price: 1050,
        stock: 145,
      },
    ]);

    await TestBed.configureTestingModule({
      imports: [ProductList, SpinnerComponent, StockPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    component.products$ = products$;
    fixture.detectChanges();
    component.ngOnChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Pagination tests', () => {
    it('should display the correct number of products per page', async () => {
      const page = await firstValueFrom(component.page$!);
      expect(page.length).toBe(5);
    });

    it('should calculate the total number of pages', async () => {
      const totalPages = await firstValueFrom(component.totalPages$!);
      expect(totalPages).toBe(4); // 20 products, 5 per page
    });

    it('should update the page when the page state changes', async () => {
      component.pageState$.next({ page: 2, size: 5 });

      fixture.detectChanges();
      const page = await firstValueFrom(component.page$!);

      expect(page.length).toBe(5);
      expect(page[0].id).toBe(6);
    });

    it('should handle empty products array', async () => {
      component.products$ = of([]);
      component.ngOnChanges();

      fixture.detectChanges();
      const page = await firstValueFrom(component.page$!);

      expect(page.length).toBe(0);
    });
  });

  describe('Filter tests', () => {
    describe('Search tests', () => {
      it('should filter products by search term', async () => {
        component.onSearch('Test');
        fixture.detectChanges();

        const filtered = await firstValueFrom(component.filtered$!);
        expect(filtered.length).toBe(1);
        expect(filtered[0].name).toBe('Test Product');
      });

      it('should reset page when search term changes', async () => {
        component.onSearch('Another');
        fixture.detectChanges();

        const { page } = await firstValueFrom(component.pageState$!);

        expect(page).toBe(1);
      });

      it('should handle no products matching search term', async () => {
        component.onSearch('Nonexistent');
        fixture.detectChanges();

        const products = await firstValueFrom(component.page$!);
        expect(products.length).toBe(0);
      });

      it('should recalculate total pages after search', async () => {
        component.onSearch('First');
        fixture.detectChanges();

        const totalPages = await firstValueFrom(component.totalPages$!);
        expect(totalPages).toBe(1); // 1 product should match
      });
    });

    describe('Stock select tests', () => {
      it('should filter products by stock status', async () => {
        component.stock$.next(StockEnum.IN_STOCK);
        fixture.detectChanges();

        const filtered = await firstValueFrom(component.filtered$!);

        expect(filtered.length).toBe(5); // Every product with stock >= 100
      });

      it('should reset page when stock filter changes', async () => {
        component.onStockSelected(StockEnum.IN_STOCK);
        fixture.detectChanges();

        const { page } = await firstValueFrom(component.pageState$!);

        expect(page).toBe(1);
      });

      it('should recalculate total pages when stock filter changes', async () => {
        component.onStockSelected(StockEnum.OUT_OF_STOCK);
        fixture.detectChanges();

        const totalPages = await firstValueFrom(component.totalPages$!);
        expect(totalPages).toBe(1); // 1 product should match
      });
    });
  });
});
