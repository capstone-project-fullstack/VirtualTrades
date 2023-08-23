'use client';

import React, { useEffect, useRef } from 'react';

interface CurrencyWidgetProps {
  ticker: string;
}

const CurrencyWidget = ({ ticker }: CurrencyWidgetProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      width: 770,
      height: 400,
      currencies: [
        'EUR',
        'USD',
        'JPY',
        'GBP',
        'CHF',
        'AUD',
        'CAD',
        'NZD',
        'CNY',
      ],
      isTransparent: true,
      colorTheme: 'light',
      locale: 'en',
    });

    if (container.current) container.current.innerHTML = '';

    const scriptContainer = document.createElement('div');
    scriptContainer.className = 'tradingview-widget-container__widget';
    if (container.current) container.current.appendChild(scriptContainer);
    scriptContainer.appendChild(script);
  }, [ticker]);

  return (
    <div className="tradingview-widget-container light-green">
      <div
        className="tradingview-widget-container__widget"
        ref={container}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default CurrencyWidget;
