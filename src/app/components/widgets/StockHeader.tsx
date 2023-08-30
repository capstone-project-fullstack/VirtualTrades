'use client';

import React, { useEffect } from 'react';

interface StockHeaderProps {
  ticker: string;
}

const StockHeader: React.FC<StockHeaderProps> = ({
  ticker,
}: StockHeaderProps) => {
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
    document
      .querySelector('.tradingview-widget-container__widget')
      ?.appendChild(script);

    return () => {
      document
        .querySelector('.tradingview-widget-container__widget')
        ?.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default StockHeader;
