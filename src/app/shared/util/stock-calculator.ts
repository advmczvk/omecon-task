import { StockEnum } from '@shared/enums/stock.enum';

export const stockCalculator = (stock: number): string => {
  if (stock === 0) {
    return StockEnum.OUT_OF_STOCK;
  } else if (stock < 20) {
    return StockEnum.ALMOST_OUT_OF_STOCK;
  } else if (stock < 100) {
    return StockEnum.LOW_STOCK;
  } else {
    return StockEnum.IN_STOCK;
  }
};
