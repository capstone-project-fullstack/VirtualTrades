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
import { formatPrice } from '../utils/utils';

const TABLE_HEAD = [
  'Ticker',
  'Stock Price',
  'Shares',
  'Average Price',
  'Total Equity',
  'Gain',
];

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

  useEffect(() => {
    axios
      .get('/api/positions')
      .then((res) => {
        setTableRows(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row"></div>
      </CardHeader>
      <CardBody className="overflow-auto px-0">
        <table className="w-full min-w-max table-auto text-center  ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  align="center"
                  key={index}
                  className="cursor-pointer border-y text-center  p-2 transition-colors border-cell"
                >
                  <Typography
                    variant="h6"
                    color="white"
                    className="flex items-center justify-center gap-2 font-normal leading-none opacity-70"
                  >
                    {head}
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => {
              const classes =
                'py-2 border-b border-blue-gray-50 text-center border-cell';

              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={row.Stock.icon_url}
                        alt={row.Stock.name}
                        size="sm"
                        className="ml-2"
                      />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal"
                        >
                          {row.Stock.symbol}
                        </Typography>
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal opacity-70"
                        >
                          {row.Stock.name}
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
                        ${formatPrice(row.Stock.current_price)}
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
                        {row.shares}
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
                        ${formatPrice(row.average_price)}
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
                        ${formatPrice(row.total_equity)}
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
                        ${formatPrice(row.gain)}
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
