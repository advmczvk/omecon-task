import { Pipe, PipeTransform } from '@angular/core';
import { stockCalculator } from '@shared/util/stock-calculator';

@Pipe({
  name: 'stock',
})
export class StockPipe implements PipeTransform {
  transform(value: number): string {
    return stockCalculator(value);
  }
}
