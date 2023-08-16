"use client"

import React, { useEffect, useRef } from 'react';

export default function TradingViewWidget() {
  const widgetContainerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
        { description: 'Tesla', proName: 'NASDAQ:TSLA' },
        { description: 'Microsoft', proName: 'NASDAQ:MSFT' },
        { description: 'Meta', proName: 'NASDAQ:META' },
        { description: 'Netflix', proName: 'NASDAQ:NFLX' },
        { description: 'Google', proName: 'NASDAQ:GOOGL' },
        { description: 'Upstart Holdings', proName: 'NASDAQ:UPST' },
        { description: 'Snowflake', proName: 'NYSE:SNOW' },
        { description: 'Datadog', proName: 'NASDAQ:DDOG' },
        { description: 'Robinhood', proName: 'NASDAQ:HOOD' },
        { description: 'Salesforce', proName: 'NYSE:CRM' },
        { description: 'Roblox', proName: 'NYSE:RBLX' }
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: false,
      displayMode: 'adaptive',
      locale: 'en'
    });

    widgetContainerRef.current.appendChild(script);

    return () => {
      widgetContainerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" ref={widgetContainerRef}></div>
    </div>
  );
}
