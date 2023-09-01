'use client';

import { Avatar, Card, Typography } from '@material-tailwind/react';
import { WatchlistData } from '../../../typings';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const TABLE_HEAD = [
  'Icon',
  'Symbol',
  'Name',
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
    <Card className="h-full w-full text-white overflow-auto bg-black">
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
                  className="text-center text-white cursor-pointer"
                  onClick={() => router.push(`/stock/${symbol}`)}
                >
                  <td className="p-2 border-cell">
                    <Avatar src={icon} alt={name} size="sm" />
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
                  <td className="py-2 border-cell max-w-[100px]">
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
                      {price}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {change}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {changePercent}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {prevClose}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {open}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {high}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {low}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {marketCap}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {high52}
                    </Typography>
                  </td>
                  <td className="p-2 border-cell">
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
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}
