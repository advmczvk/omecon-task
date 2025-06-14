import { StockPipe } from './stock.pipe';

describe('StockPipe', () => {
  let pipe: StockPipe;

  beforeEach(() => {
    pipe = new StockPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "In stock" given quantity over 100', () => {
    expect(pipe.transform(101)).toBe('In stock');
  });

  it('should return "Low stock" given quantity less than 100 but more than 20', () => {
    expect(pipe.transform(50)).toBe('Low stock');
  });

  it('should return "Almost out of stock" given quantity less than 20 but more than 0', () => {
    expect(pipe.transform(15)).toBe('Almost out of stock');
  });

  it('should return "Out of stock" given quantity equal to 0', () => {
    expect(pipe.transform(15)).toBe('Almost out of stock');
  });
});
