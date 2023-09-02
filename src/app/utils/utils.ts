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

export const parseTimestamp = (timestamp: Date) => {
  const dateObj = new Date(timestamp);

  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');
  const year = dateObj.getFullYear().toString().slice(-2);

  const hours = dateObj.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${month}/${day}/${year}`;
  const formattedTime = `${formattedHours}:${minutes} ${ampm}`;

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

export const convertMarketCap = (marketCap: number) => {
  const multiplyByMillion = marketCap * 1_000_000;
  if (multiplyByMillion > 100_0000_000) {
    return `${(multiplyByMillion / 1_000_000_000).toFixed(2)}B`;
  } else if (multiplyByMillion > 1000_000) {
    return `${(multiplyByMillion / 1_000_000).toFixed(2)}M`;
  } else {
    return `${multiplyByMillion}`;
  }
};
