export const formatPrice = (price: number) =>
  price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export const customSort = (
  sortBy: string,
  array: any,
  setState: any,
  sortOrder: string
) => {
  const isAscending = sortOrder === 'asc';
  array.sort((a: any, b: any) => {
    let comparison = 0;
    if (sortBy === 'symbol') {
      comparison = a.Stock.symbol.localeCompare(b.Stock.symbol);
    } else if (sortBy === 'price') {
      comparison = a.Stock.current_price - b.Stock.current_price;
    } else if (sortBy === 'gain') {
      comparison = a.gain - b.gain;
    } else if (sortBy === 'averagePrice') {
      comparison = a.average_price - b.average_price;
    } else if (sortBy === 'totalEquity') {
      comparison = a.total_equity - b.total_equity;
    } else if (sortBy === 'shares') {
      comparison = a.shares - b.shares;
    }

    return isAscending ? comparison : -comparison; // Reverse the comparison if descending
  });

  setState([...array]);
};
