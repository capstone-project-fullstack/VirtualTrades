'use client';

import React, { useEffect, useRef } from 'react';

const HeadLine = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: 'FOREXCOM:SPXUSD',
          title: 'S&P 500',
        },
        {
          proName: 'FOREXCOM:NSXUSD',
          title: 'US 100',
        },
        {
          proName: 'FX_IDC:EURUSD',
          title: 'EUR to USD',
        },
        {
          proName: 'BITSTAMP:BTCUSD',
          title: 'Bitcoin',
        },
        {
          proName: 'BITSTAMP:ETHUSD',
          title: 'Ethereum',
        },
        {
          description: 'Apple',
          proName: 'NASDAQ:AAPL',
        },
        {
          description: 'Gold',
          proName: 'TVC:GOLD',
        },
        {
          description: 'Tesla',
          proName: 'NASDAQ:TSLA',
        },
        {
          description: 'Amazon',
          proName: 'NASDAQ:AMZN',
        },
        {
          description: 'Microsoft',
          proName: 'NASDAQ:MSFT',
        },
        {
          description: 'Meta',
          proName: 'NASDAQ:META',
        },
        {
          description: 'Netflix',
          proName: 'NASDAQ:NFLX',
        },
        {
          description: 'Google',
          proName: 'NASDAQ:GOOGL',
        },
        {
          description: 'Walmart',
          proName: 'NYSE:WMT',
        },
        {
          description: 'JPMorgan',
          proName: 'NYSE:JPM',
        },
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: false,
      largeChartUrl: `${window.location.href}/stock/{symbol}`,
      displayMode: 'compact',
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
      <div
        className="tradingview-widget-container__widget"
        ref={container}
      ></div>
    </div>
  );
};

export default HeadLine;
