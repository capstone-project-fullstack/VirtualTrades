'use client';

import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = [
  'Symbol',
  'Name',
  'Price',
  'Change',
  '% Change',
  'Prev Close',
  'Open',
  'High',
  'Low',
  'High52',
  'Low52',
];

const TABLE_ROWS = [
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$1,000',
    change: '+$100',
    changePercent: "+10%",
    prevClose: '$900',
    open: '$1,100',
    high: '$1,200',
    low: '$900',
    high52: '100',
    low52: '100',
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$1,000',
    change: '+$100',
    changePercent: "+10%",
    prevClose: '$900',
    open: '$1,100',
    high: '$1,200',
    low: '$900',
    high52: '100',
    low52: '100',
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$1,000',
    change: '+$100',
    changePercent: "+10%",
    prevClose: '$900',
    open: '$1,100',
    high: '$1,200',
    low: '$900',
    high52: '100',
    low52: '100',
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$1,000',
    change: '+$100',
    changePercent: "+10%",
    prevClose: '$900',
    open: '$1,100',
    high: '$1,200',
    low: '$900',
    high52: '100',
    low52: '100',
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$1,000',
    change: '+$100',
    changePercent: "+10%",
    prevClose: '$900',
    open: '$1,100',
    high: '$1,200',
    low: '$900',
    high52: '100',
    low52: '100',
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$1,000',
    change: '+$100',
    changePercent: "+10%",
    prevClose: '$900',
    open: '$1,100',
    high: '$1,200',
    low: '$900',
    high52: '100',
    low52: '100',
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$1,000',
    change: '+$100',
    changePercent: "+10%",
    prevClose: '$900',
    open: '$1,100',
    high: '$1,200',
    low: '$900',
    high52: '100',
    low52: '100',
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$1,000',
    change: '+$100',
    changePercent: "+10%",
    prevClose: '$900',
    open: '$1,100',
    high: '$1,200',
    low: '$900',
    high52: '100',
    low52: '100',
  },
];

export default function TableWithStripedRows() {
  return (
    <Card className="h-full w-full text-white overflow-auto bg-black">
      <table className="w-full min-w-max text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="py-4 text-center bg-dark-gray-100 border-cell">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            (
              {
                symbol,
                name,
                price,
                change,
                changePercent,
                prevClose,
                open,
                high,
                low,
                high52,
                low52,
              },
              index
            ) => (
              <tr key={name} className="text-center text-white">
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {symbol}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {price}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {change}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {changePercent}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {prevClose}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {open}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {high}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {low}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {high52}
                  </Typography>
                </td>
                <td className="p-4 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {low52}
                  </Typography>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}
