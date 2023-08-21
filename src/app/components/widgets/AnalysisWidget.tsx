'use client';

import React, { useEffect, useRef } from 'react';

interface AnalysisWidgetProps {
  ticker: string;
}

const AnalysisWidget = ({ ticker }: AnalysisWidgetProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      interval: '1M',
      width: 425,
      isTransparent: true,
      height: 450,
      symbol: ticker,
      showIntervalTabs: true,
      locale: 'en',
      colorTheme: 'dark',
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

export default AnalysisWidget;
