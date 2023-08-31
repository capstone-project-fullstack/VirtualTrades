"use client";

import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Symbol", "Name", "Price", "% Change", "Prev Close", "Open", "High", "Low", "High52", "Low52"];
 
const TABLE_ROWS = [
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$1,000",
    change: "+$100",
    prevClose: "$900",
    open: "$1,100",
    high: "$1,200",
    low: "$900",
    high52: "100",
    low52: "100",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$1,000",
    change: "+$100",
    prevClose: "$900",
    open: "$1,100",
    high: "$1,200",
    low: "$900",
    high52: "100",
    low52: "100",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$1,000",
    change: "+$100",
    prevClose: "$900",
    open: "$1,100",
    high: "$1,200",
    low: "$900",
    high52: "100",
    low52: "100",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$1,000",
    change: "+$100",
    prevClose: "$900",
    open: "$1,100",
    high: "$1,200",
    low: "$900",
    high52: "100",
    low52: "100",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$1,000",
    change: "+$100",
    prevClose: "$900",
    open: "$1,100",
    high: "$1,200",
    low: "$900",
    high52: "100",
    low52: "100",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$1,000",
    change: "+$100",
    prevClose: "$900",
    open: "$1,100",
    high: "$1,200",
    low: "$900",
    high52: "100",
    low52: "100",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$1,000",
    change: "+$100",
    prevClose: "$900",
    open: "$1,100",
    high: "$1,200",
    low: "$900",
    high52: "100",
    low52: "100",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$1,000",
    change: "+$100",
    prevClose: "$900",
    open: "$1,100",
    high: "$1,200",
    low: "$900",
    high52: "100",
    low52: "100",
  }
];
 
export default function TableWithStripedRows() {
  return (
    <Card className="h-full w-full ">
      <table className="w-full min-w-max table-auto text-center bg-black">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-4 w-5 bg-blue-gray-100">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ symbol, name, price, change, prevClose, open, high, low, high52, low52 }, index) => (
            <tr key={name} className="even:bg-dark-gray-50/50 w-5">
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {symbol}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {price}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {change}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {prevClose}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {open}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {high}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {low}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {high52}
                </Typography>
              </td>
              <td className="p-4 border-cell">
                <Typography variant="small" color="white" className="font-normal">
                  {low52}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}