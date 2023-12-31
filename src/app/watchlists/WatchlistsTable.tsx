'use client';

import { Avatar, Card, Typography } from '@material-tailwind/react';
import { WatchlistData } from '../../../typings';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import {
  formatPrice,
  convertMarketCap,
  generateRandomNumber,
} from '../utils/utils';
import { customSortWatchlists } from '../utils/utils';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { API_KEYS } from '../utils/config';

const tableHead = [
  { header: 'Name', sortKey: 'name' },
  { header: 'Symbol', sortKey: 'symbol' },
  { header: 'Price', sortKey: 'price' },
  { header: 'Change', sortKey: 'change' },
  { header: 'Change %', sortKey: 'changePercent' },
  { header: 'Prev Close', sortKey: 'prevClose' },
  { header: 'Open', sortKey: 'open' },
  { header: 'High', sortKey: 'high' },
  { header: 'Low', sortKey: 'low' },
  { header: 'Market Cap', sortKey: 'marketCap' },
  { header: 'High52', sortKey: 'high52' },
  { header: 'Low52', sortKey: 'low52' },
];

const getAllUserWatchlistsSymbols = async () => {
  const data = await axios.get('/api/getWatchlists');
  const array = await Promise.all(
    data.data.map((stock: WatchlistData) => stock.symbol)
  );
  return array;
};

const apiKey = API_KEYS[generateRandomNumber(API_KEYS.length)];
const socket = new WebSocket(`wss://ws.finnhub.io?token=${apiKey}`);
socket.addEventListener('open', async () => {
  const allSymbols = await getAllUserWatchlistsSymbols();
  allSymbols.forEach((symbol) => {
    socket.send(JSON.stringify({ type: 'subscribe', symbol }));
  });
});

export default function WatchlistsTable() {
  const router = useRouter();
  const [tableRows, setTableRows] = useState<WatchlistData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

  useEffect(() => {
    axios
      .get('api/getWatchlists')
      .then((res) => {
        setTableRows(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    socket.addEventListener('message', (e) => {
      if (e.data) {
        try {
          const data = JSON.parse(e.data);
          const trades = data.data;
          if (trades && trades.length > 0) {
            setTableRows((prevRows) => {
              const updatedRows = prevRows.map((row) => {
                const matchingTrade = trades.find(
                  (trade: any) => trade.s === row.symbol
                );
                if (matchingTrade) {
                  const updatedStock = {
                    ...row,
                    price: matchingTrade.p,
                  };

                  const updatedRow = {
                    ...row,
                    price: matchingTrade.p,
                    change: matchingTrade.p - row.prevClose,
                    changePercent: Number(
                      (
                        ((matchingTrade.p - row.prevClose) / row.prevClose) *
                        100
                      ).toFixed(2)
                    ),
                  };
                  return updatedRow;
                }
                return row;
              });

              return updatedRows;
            });
          }
        } catch (error) {
          console.error('Error parsing JSON data:', error);
        }
      }
    });
  }, [tableRows]);

  return (
    <div className="text-white overflow-auto no-scrollbar mx-3 border border-custom3 rounded-xl">
      <div className="min-h-[63vh] w-full">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th
                align="center"
                className="border-y text-center py-4 transition-colors border-cell"
              >
                <Typography
                  variant="h6"
                  color="white"
                  className="flex items-center justify-center gap-2 font-normal leading-none"
                >
                  Icon
                </Typography>
              </th>
              {tableHead.map((head, index) => (
                <th
                  align="center"
                  key={index}
                  className="cursor-pointer border-y py-4 transition-colors border-cell max-w-[165px]"
                >
                  <Typography
                    variant="h6"
                    color="white"
                    className="font-normal text-center leading-none pl-5"
                    onClick={() => {
                      if (sortOrder === null || sortOrder === 'desc') {
                        setSortOrder('asc');
                      } else {
                        setSortOrder('desc');
                      }
                      customSortWatchlists(
                        head.sortKey,
                        tableRows,
                        setTableRows,
                        sortOrder
                      );
                    }}
                  >
                    {head.header}
                    <div className="float-right pr-1">
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    </div>
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {!loading && !tableRows.length && (
            <td colSpan={13} className="text-center pt-5">
              Add some stocks to your watchlist to see them here
            </td>
          )}
          <tbody>
            {loading ? (
              <div className="absolute top-1/2 left-1/2 ">
                <Spinner />
              </div>
            ) : (
              tableRows.map(
                (
                  {
                    icon,
                    symbol,
                    name,
                    price,
                    change,
                    changePercent,
                    prevClose,
                    open,
                    high,
                    low,
                    marketCap,
                    high52,
                    low52,
                  },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`text-center ${
                      change > 0 ? 'text-green-500' : 'text-red-500'
                    } cursor-pointer max-h-10`}
                    onClick={() => router.push(`/stock/${symbol}`)}
                  >
                    <td className="p-2 border-cell">
                      <Avatar src={icon} alt={name} size="sm" />
                    </td>
                    <td align="left" className="py-2 pl-2 border-cell">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {symbol}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {formatPrice(price)}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {formatPrice(change)}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {changePercent.toFixed(2)}%
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {formatPrice(prevClose)}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {formatPrice(open)}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {formatPrice(high)}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {formatPrice(low)}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {convertMarketCap(marketCap)}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {formatPrice(high52)}
                      </Typography>
                    </td>
                    <td className="p-2 border-cell">
                      <Typography variant="small" className="font-normal">
                        {formatPrice(low52)}
                      </Typography>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
