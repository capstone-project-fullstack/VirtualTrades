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
  value: string;
}

declare global {
  interface Window {
    myLine: Chart;
  }
}

export default function Overview({ initialValues }: OverviewProps) {
  const [chartData, setChartData] = useState<PortfolioChartData[]>([]);
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

  const portfolioChartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: false,
      text: 'Portfolio',
      fontColor: 'white',
    },
    legend: {
      labels: {
        fontColor: 'white',
      },
      align: 'end',
      position: 'bottom',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: 'rgba(255,255,255,.7)',
          },
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Month',
            fontColor: 'white',
          },
          gridLines: {
            display: false,
            borderDash: [2],
            borderDashOffset: [2],
            color: 'rgba(33, 37, 41, 0.3)',
            zeroLineColor: 'rgba(0, 0, 0, 0)',
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: 'rgba(255,255,255,.7)',
          },
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Value',
            fontColor: 'white',
          },
          gridLines: {
            borderDash: [3],
            borderDashOffset: [3],
            drawBorder: false,
            color: 'rgba(255, 255, 255, 0.15)',
            zeroLineColor: 'rgba(33, 37, 41, 0)',
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
    },
  };

  const portfolioChartData: any = {
    labels: chartData.map((chartData) => chartData.timestamp),
    datasets: [
      {
        label: new Date().getFullYear(),
        data: chartData.map((chartData) => Number(chartData.value)),
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
      },
    ],
  };

  const difference = funds.current_portfolio_value - funds.initial_amount;
  const percentage = (difference / funds.initial_amount) * 100;
  const actualPercentage = !!percentage ? percentage : 0;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
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
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[350px]">
            <Line options={portfolioChartOptions} data={portfolioChartData} />
          </div>
        </div>
      </div>
    </>
  );
}
