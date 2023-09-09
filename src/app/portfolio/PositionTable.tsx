'use client';

import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { CardBody, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { customSortPositions, generateRandomNumber } from '../utils/utils';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateCurrentPortfolioValue } from '../redux/features/fundManagementSlice';
import PositionTableHeader from './PortfolioTableHeader';
import PositionTableRow from './PortfolioTableRow';
import { PortfolioData } from '../../../typings';
import { API_KEYS } from '../utils/config';

const getAllUserPositionsSymbols = async () => {
  const data = await axios.get('/api/positions');
  const array = await Promise.all(
    data.data.map((stock: any) => stock.Stock.symbol)
  );
  return array;
};

const apiKey = API_KEYS[generateRandomNumber(API_KEYS.length)];
const socket = new WebSocket(`wss://ws.finnhub.io?token=${apiKey}`);
socket.addEventListener('open', async () => {
  const allSymbols = await getAllUserPositionsSymbols();
  allSymbols.forEach((symbol) => {
    socket.send(JSON.stringify({ type: 'subscribe', symbol }));
  });
});

export default function PositionTable() {
  const [tableRows, setTableRows] = useState<PortfolioData[]>([]);
  const [searchStock, setSearchStock] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

  const cash = useAppSelector((state) => state.fundManagement.values.cash);

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get('/api/positions')
      .then((res) => {
        setTableRows(res.data);
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
                  (trade: any) => trade.s === row.Stock.symbol
                );
                if (matchingTrade) {
                  const updatedStock = {
                    ...row.Stock,
                    current_price: matchingTrade.p,
                  };
                  const updatedRow = {
                    ...row,
                    Stock: updatedStock,
                    total_equity: updatedStock.current_price * row.shares,
                    gain:
                      (updatedStock.current_price - row.average_price) *
                      row.shares,
                    percentGain: (
                      ((updatedStock.current_price - row.average_price) /
                        row.average_price) *
                      100
                    ).toFixed(2),
                  };
                  return updatedRow;
                }
                return row;
              });
              // Calculate the new current_portfolio_value
              const newPortfolioValue = updatedRows.reduce(
                (sum, r) => sum + Number(r.total_equity),
                0
              );
              // Dispatch the action to update the current_portfolio_value
              dispatch(updateCurrentPortfolioValue(newPortfolioValue + cash));
              return updatedRows;
            });
          }
        } catch (error) {
          console.error('Error parsing JSON data:', error);
        }
      }
    });
  }, [tableRows]);

  const filterStock = tableRows.filter((row) => {
    return (
      row.Stock.symbol.toLowerCase().includes(searchStock.toLowerCase()) ||
      row.Stock.name.toLowerCase().includes(searchStock.toLowerCase())
    );
  });

  const tableHead = [
    { header: 'Symbol', sortKey: 'symbol' },
    { header: 'Price', sortKey: 'price' },
    { header: 'Shares', sortKey: 'shares' },
    { header: 'AVG Price', sortKey: 'averagePrice' },
    { header: 'Equity', sortKey: 'totalEquity' },
    { header: 'Gain', sortKey: 'gain' },
    { header: 'Gain %', sortKey: 'gainPercent' },
  ];

  return (
    <div className="w-full max-h-[600px] bg-dark-black border overflow-auto no-scrollbar border-custom3 rounded-xl">
      <div className="bg-dark-black min-h-[100px] sm:min-h-fit mt-5">
        <PositionTableHeader
          searchStock={searchStock}
          setSearchStock={setSearchStock}
        />
      </div>
      <CardBody className="overflow-auto no-scrollbar px-0">
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {tableHead.map((head, index) => (
                <th
                  align="center"
                  key={index}
                  className="cursor-pointer border-y text-center py-4 transition-colors border-cell max-w-[165px]"
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
                      customSortPositions(
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
          <tbody>
            {filterStock.map((row, index) => (
              <PositionTableRow key={index} row={row} />
            ))}
          </tbody>
        </table>
      </CardBody>
    </div>
  );
}
