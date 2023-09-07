'use client';

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import axios from 'axios';
import { formatPrice } from '../utils/utils';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setInitialValues } from '../redux/features/fundManagementSlice';

interface OverviewProps {
  initialValues: {
    initial_amount: number;
    cash: number;
    current_portfolio_value: number;
  };
}

interface PortfolioChartData {
  id: number;
  userId: string;
  timestamp: string;
  value: number;
  time: string;
  date: string;
}

const timeframes: Record<string, number> = {
  '1D': 1,
  '1W': 7,
  '1M': 30,
  '1Y': 365,
};

// Helper function to filter chart data based on timeframe
function filterChartData(data: PortfolioChartData[], timeframe: string) {
  if (timeframe === '1M') {
    // Aggregate data on a daily basis for 1 month
    const aggregatedData: PortfolioChartData[] = [];
    const dateMap: Record<string, PortfolioChartData> = {};

    data.forEach((entry) => {
      const date = entry.date;
      if (!dateMap[date]) {
        dateMap[date] = { ...entry };
      }
    });

    // Convert the dateMap into an array
    for (const date in dateMap) {
      if (dateMap.hasOwnProperty(date)) {
        aggregatedData.push(dateMap[date]);
      }
    }

    return aggregatedData;
  } else {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - timeframes[timeframe]);
    return data.filter((data) => new Date(data.date) >= startDate);
  }
}

export default function Overview({ initialValues }: OverviewProps) {
  const [chartData, setChartData] = useState<PortfolioChartData[]>([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const dispatch = useAppDispatch();
  const funds = useAppSelector((state) => state.fundManagement.values);

  useEffect(() => {
    dispatch(setInitialValues(initialValues));
  }, []);

  useEffect(() => {
    axios
      .get('/api/getPortfolioValues')
      .then((res) => {
        setChartData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredChartData = filterChartData(chartData, selectedTimeframe);

  const portfolioChartData: any = {
    labels:
      selectedTimeframe !== '1M'
        ? filteredChartData.map((data) => data.time)
        : filteredChartData.map((data) => data.date),
    datasets: [
      {
        label: '1D',
        data: filteredChartData.map((data) => data.value),
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
        tension: 0.4,
      },
    ],
  };

  const chartOptions: any = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            // Show the stock value and date as the tooltip label
            const dataIndex = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const value =
              portfolioChartData.datasets[datasetIndex].data[dataIndex];
            const date = filteredChartData[dataIndex].date;
            return `${value} on ${date}`;
          },
        },
      },
    },
  };

  const difference = funds.current_portfolio_value - funds.initial_amount;
  const percentage = (difference / funds.initial_amount) * 100;
  const actualPercentage = !!percentage ? percentage : 0;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-xl border border-custom3">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <div className="w-fit">
                <div className="text-white text-5xl font-semibold">
                  {formatPrice(funds.current_portfolio_value)}
                </div>
                <div className="text-green-500 text-xl text-end">
                  <span
                    className={`pr-2 ${
                      difference < 0 ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {formatPrice(difference)}
                  </span>
                  <span
                    className={`${
                      actualPercentage >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {`(${actualPercentage.toFixed(2)}%)`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[350px] h-[180px]">
            <Line data={portfolioChartData} options={chartOptions} />
          </div>
          <div className="f-center mt-2">
            <div className="space-x-4">
              {Object.keys(timeframes).map((timeframe) => (
                <button
                  key={timeframe}
                  className={`${
                    selectedTimeframe === timeframe
                      ? 'bg-blue-500 text-white'
                      : 'text-blue-500'
                  } px-4 py-2 rounded`}
                  onClick={() => setSelectedTimeframe(timeframe)}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
