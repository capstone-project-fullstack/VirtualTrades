'use client';

import React, { useEffect, useRef } from 'react';

interface CompanyNewsWidgetProps {
  ticker: string;
}

const CompanyNewsWidget = ({ ticker }: CompanyNewsWidgetProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: ticker,
      colorTheme: 'dark',
      isTransparent: false,
      displayMode: 'regular',
      width: '480',
      height: '600',
      locale: 'en',
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

export default CompanyNewsWidget;
