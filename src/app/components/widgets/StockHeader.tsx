'use client';

import React, { useEffect, useRef } from 'react';

interface StockHeaderProps {
  ticker: string;
}

const StockHeader = ({ ticker }: StockHeaderProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: ticker,
      width: '100%',
      locale: 'en',
      colorTheme: 'dark',
      isTransparent: false,
      largeChartUrl: `${window.location.origin}/stock/${ticker}`,
    });

    if (container.current) container.current.innerHTML = '';

    const scriptContainer = document.createElement('div');
    scriptContainer.className = 'tradingview-widget-container__widget';
    if (container.current) container.current.appendChild(scriptContainer);
    scriptContainer.appendChild(script);
  }, [ticker]);

  return (
    <div className="tradingview-widget-container">
      <div
        className="tradingview-widget-container__widget"
        ref={container}
      ></div>
    </div>
  );
};

export default StockHeader;
