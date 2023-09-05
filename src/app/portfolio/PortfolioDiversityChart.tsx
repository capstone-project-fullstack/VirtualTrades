'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { PortfolioData } from '../../../typings';
import { randomColorGenerator } from '../utils/utils';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioDiversityChart() {
  const [stockData, setStockData] = useState<PortfolioData[]>([]);

  useEffect(() => {
    axios.get(`/api/positions`).then((res) => {
      setStockData(res.data);
    });
  }, []);

  const totalEquity = stockData.reduce(
    (acc, curr) => acc + Number(curr.total_equity),
    0
  );

  const chartLabels = stockData.map((stock) => stock.Stock.symbol);

  const chartData = stockData.map((stock) => {
    const diversity = (stock.total_equity / totalEquity) * 100;
    return Number(diversity.toFixed(2));
  });

  const bgColors = stockData.map(() => randomColorGenerator());

  const data: any = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Diversity',
        data: chartData,
        backgroundColor: bgColors,
        borderColor: bgColors,
        borderWidth: 1,
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
          title: (context: any) => {
            // Show the stock symbol as the tooltip title
            const stockIndex = context[0].dataIndex;
            return chartLabels[stockIndex];
          },
          label: (context: any) => {
            // Show the stock diversity percentage as the tooltip label
            const stockIndex = context.dataIndex;
            const diversity = chartData[stockIndex];
            return `${diversity}%`;
          },
        },
      },
    },
  };

  return (
    <>
      <div>
        <Doughnut data={data} options={chartOptions} />
      </div>
    </>
  );
}