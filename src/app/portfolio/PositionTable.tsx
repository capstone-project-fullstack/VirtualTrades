'use client';

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Input,
  CardBody,
  Avatar,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatPrice, customSort } from '../utils/utils';
import { useRouter } from 'next/navigation';

interface PortfolioData {
  shares: number;
  average_price: number;
  total_equity: number;
  gain: number;
  Stock: {
    symbol: string;
    name: string;
    icon_url: string;
    current_price: number;
  };
}

export default function PositionTable() {
  const [tableRows, setTableRows] = useState<PortfolioData[]>([]);
  const [searchStock, setSearchStock] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

  const router = useRouter();

  useEffect(() => {
    axios
      .get('/api/positions')
      .then((res) => {
        console.log(res.data);
        setTableRows(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {

  // })

  const filterStock = tableRows.filter((row) => {
    return (
      row.Stock.symbol.toLowerCase().includes(searchStock.toLowerCase()) ||
      row.Stock.name.toLowerCase().includes(searchStock.toLowerCase())
    );
  });

  const tableHead = [
    { header: 'Symbol', sortKey: 'symbol' },
    { header: 'Stock Price', sortKey: 'price' },
    { header: 'Shares', sortKey: 'shares' },
    { header: 'Average Price', sortKey: 'averagePrice' },
    { header: 'Total Equity', sortKey: 'totalEquity' },
    { header: 'Gain', sortKey: 'gain' },
  ];

  return (
    <Card className=" w-full bg-dark-black border overflow-auto border-white rounded">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded bg-dark-black"
      >
        <div className=" flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="white">
              Current Positions
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
              See information about all open positions
            </Typography>
          </div>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              color="white"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              crossOrigin={'anonymous'}
              value={searchStock}
              onChange={(e) => {
                const { value } = e.currentTarget;
                if (value) setSearchStock(value);
                else setSearchStock('');
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row"></div>
      </CardHeader>
      <CardBody className="overflow-auto px-0">
        <table className="w-full min-w-max table-auto text-center  ">
          <thead>
            <tr>
              {tableHead.map((head, index) => (
                <th
                  align="center"
                  key={index}
                  className="cursor-pointer border-y text-center  p-2 transition-colors border-cell"
                >
                  <Typography
                    variant="h6"
                    color="white"
                    className="flex items-center justify-center gap-2 font-normal leading-none opacity-70"
                    onClick={() => {
                      if (sortOrder === null || sortOrder === 'desc') {
                        setSortOrder('asc');
                      } else {
                        setSortOrder('desc');
                      }
                      customSort(
                        head.sortKey,
                        tableRows,
                        setTableRows,
                        sortOrder
                      );
                    }}
                  >
                    {head.header}
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterStock.map((row, index) => {
              const classes =
                'py-2 border-b border-blue-gray-50 text-center border-cell';
              const {
                Stock: { icon_url, current_price, name, symbol },
                gain,
                shares,
                average_price,
                total_equity,
              } = row;
              return (
                <tr key={index}>
                  <td className={classes}>
                    <div
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => router.push(`/stock/${symbol}`)}
                    >
                      <Avatar
                        src={icon_url}
                        alt={name}
                        size="sm"
                        className="ml-2"
                      />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal"
                        >
                          {symbol}
                        </Typography>
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal opacity-70"
                        >
                          {name}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td align="center" className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {formatPrice(Number(current_price))}
                      </Typography>
                    </div>
                  </td>
                  <td align="center" className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {shares}
                      </Typography>
                    </div>
                  </td>
                  <td align="center" className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {formatPrice(Number(average_price))}
                      </Typography>
                    </div>
                  </td>
                  <td align="center" className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {formatPrice(Number(total_equity))}
                      </Typography>
                    </div>
                  </td>
                  <td align="center" className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {formatPrice(Number(gain))}
                      </Typography>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
