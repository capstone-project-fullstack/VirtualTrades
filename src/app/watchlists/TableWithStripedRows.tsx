'use client';

import { Avatar, Card, Typography } from '@material-tailwind/react';
import { WatchlistData } from '../../../typings';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import { formatPrice,  convertMarketCap } from '../utils/utils';

const TABLE_HEAD = [
  'Icon',
  'Name',
  'Symbol',
  'Price',
  'Change',
  'Change %',
  'Prev Close',
  'Open',
  'High',
  'Low',
  'Market Cap',
  'High52',
  'Low52',
];

export default function TableWithStripedRows() {
  const router = useRouter();
  const [tableRows, setTableRows] = useState<WatchlistData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('api/getWatchlists')
      .then((res) => {
        setTableRows(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <Card className="h-full w-full text-white overflow-auto no-scrollbar bg-black">
      <table className="w-full min-w-max text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="py-4 text-center bg-dark-gray-100 border-cell"
              >
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
          {loading ? (
            <div className="fixed top-1/2 left-1/2">
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
                  className={`text-center ${change > 0 ? 'text-green-500' : 'text-red-500'} cursor-pointer`}
                  onClick={() => router.push(`/stock/${symbol}`)}
                >
                  <td className="p-2 border-cell">
                    <Avatar src={icon} alt={name} size="sm" />
                  </td>
                  <td
                    align="left"
                    className="py-2 pl-2 border-cell max-w-[100px]"
                  >
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
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {formatPrice(price)}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {formatPrice(change)}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {changePercent}%
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {formatPrice(prevClose)}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {formatPrice(open)}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {formatPrice(high)}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {formatPrice(low)}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {convertMarketCap(marketCap)}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {formatPrice(high52)}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {formatPrice(low52)}
                    </Typography>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}
