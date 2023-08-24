'use client';

import React, { useEffect } from 'react';
import Chart from 'chart.js';
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

declare global {
  interface Window {
    myLine: Chart;
  }
}

export default function Overview({ initialValues }: OverviewProps) {
  const dispatch = useAppDispatch();
  const funds = useAppSelector((state) => state.fundManagement.values);

  useEffect(() => {
    dispatch(setInitialValues(initialValues));
  }, []);

  useEffect(() => {
    const config = {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
        ],
      },
      options: {
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
      },
    };
    var canvas = document.getElementById('line-chart') as HTMLCanvasElement;
    var ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    window.myLine = new Chart(ctx, config as any);
  }, []);

  const difference = funds.current_portfolio_value - funds.initial_amount;

  console.log(difference);

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
                  <span className="pr-2">{formatPrice(difference)}</span>
                  <span className="text-white">
                    {`(${
                      ((difference / funds.initial_amount) * 100).toFixed(2) ||
                      0
                    }%)`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[350px]">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
