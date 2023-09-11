'use client';

import React, { useEffect, useRef } from 'react';
import Tooltip from '../Tooltip';


export default function ScreenerWidget() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      largeChartUrl: `${window.location.origin}/stock/{symbol}`,
      width: '100%',
      height: 700,
      defaultColumn: 'overview',
      defaultScreen: 'most_capitalized',
      market: 'us',
      showToolbar: true,
      colorTheme: 'dark',
      locale: 'en',
    });

    if (container.current) container.current.innerHTML = '';

    const scriptContainer = document.createElement('div');
    scriptContainer.className = 'tradingview-widget-container__widget';
    if (container.current) container.current.appendChild(scriptContainer);
    scriptContainer.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
       <div className="relative top-0 left-0 z-50 h-0 w-0">
        <Tooltip title="Stock Screener" text="Filter stocks by filtering and sorting" />
      </div>
      <div
        className="tradingview-widget-container__widget"
        ref={container}
      ></div>
    </div>
  );
}
