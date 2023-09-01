'use client';

import { Card, Typography } from '@material-tailwind/react';
import { TradeHistory } from '../../../typings';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TABLE_HEAD = ['Time', 'Symbol', 'Price', 'Shares', 'Type'];

export default function TradeHistory() {
  const [tableRows, setTableRows] = useState<TradeHistory[]>([]);

  useEffect(() => {
    axios
      .get('/api/tradeHistory')
      .then((res) => {
        setTableRows(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card className="w-full max-h-[600px] bg-dark-black border overflow-auto no-scrollbar border-custom3 ">
      <table className="w-full min-w-max table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="text-center p-2 transition-colors border-cell"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map(({ date, time, symbol, price, type, shares }, index) => {
            return (
              <tr key={index}>
                <td align="center" className="p-2 border-cell">
                  <div>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {time}
                    </Typography>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </div>
                </td>
                <td align="center" className="p-2 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {symbol}
                  </Typography>
                </td>
                <td align="center" className="p-2 border-cell">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {price}
                  </Typography>
                </td>
                <td align="center" className="p-2 border-cell">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="white"
                    className="font-medium"
                  >
                    {shares}
                  </Typography>
                </td>
                <td align="center" className="p-2 border-cell">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="white"
                    className="font-medium"
                  >
                    {type}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
