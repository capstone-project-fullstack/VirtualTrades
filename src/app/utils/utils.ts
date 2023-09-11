export const formatPrice = (price: number) =>
  price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export const customSortPositions = (
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

    return isAscending ? comparison : -comparison;
  });

  setState([...array]);
};

export const customSortWatchlists = (
  sortBy: string,
  array: any,
  setState: any,
  sortOrder: string
) => {
  const isAscending = sortOrder === 'asc';
  array.sort((a: any, b: any) => {
    let comparison = 0;
    if (sortBy === 'symbol' || sortBy === 'name') {
      comparison = a[sortBy].localeCompare(b[sortBy]);
    } else {
      comparison = a[sortBy] - b[sortBy];
    }
    return isAscending ? comparison : -comparison;
  });
  setState([...array]);
};

import moment from 'moment-timezone';

export const parseTimestamp = (timestamp: string) => {
  const dateObj = moment(timestamp);
  const formattedDate = dateObj.tz('America/New_York').format('MM/DD/YYYY');
  const formattedTime = dateObj.tz('America/New_York').format('hh:mm A');

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

export const unixTimestampToISO8601 = (unixTimestamp: number) => {
  const timestampInMilliseconds = unixTimestamp * 1000;
  const date = new Date(timestampInMilliseconds);
  const iso8601String = date.toISOString();
  return iso8601String;
};

export const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');
  const colorCode = `#${redHex}${greenHex}${blueHex}`;
  return colorCode;
};

export const generateRandomNumber = (len: number) => {
  return Math.floor(Math.random() * len);
};
