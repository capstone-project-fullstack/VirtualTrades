'use client';

import { Typography, Spinner } from '@material-tailwind/react';
import { TradeHistory } from '../../../typings';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TABLE_HEAD = ['Time', 'Symbol', 'Price', 'Shares', 'Type'];

export default function TradeHistory() {
  const [tableRows, setTableRows] = useState<TradeHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('/api/tradeHistory')
      .then((res) => {
        setTableRows(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full bg-dark-black border overflow-auto no-scrollbar border-custom3 rounded-xl h-[500px]">
      {loading && (
        <div className="relative top-1/2 left-[48%] h-0 w-0">
          <Spinner />
        </div>
      )}
      <div className="bg-dark-black my-9">
        <Typography variant="h5" color="white" className="text-center">
          Trade History
        </Typography>
      </div>
      <table className="w-full min-w-max table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y text-center py-4 transition-colors border-cell max-w-[165px]"
              >
                <Typography
                  variant="h6"
                  color="white"
                  className="flex items-center justify-center gap-2 font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        {!loading && !tableRows.length && (
          <td colSpan={5} className="text-center pt-5">
            No trade history
          </td>
        )}
        <tbody>
          {tableRows.map(
            ({ date, time, symbol, price, type, shares }, index) => {
              return (
                <tr
                  key={index}
                  className={`${
                    type === 'BUY' ? 'bg-green-600' : 'bg-red-600'
                  } bg-opacity-80`}
                >
                  <td align="center" className="p-2 border-cell ">
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
                      {Number(price).toFixed(2)}
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
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
