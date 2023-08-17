"use client"

import React, { useEffect, useRef } from 'react';

export default function TradingViewScreenerWidget() {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      width: 1100,
      height: 523,
      defaultColumn: 'overview',
      defaultScreen: 'general',
      market: 'forex',
      showToolbar: true,
      colorTheme: 'light',
      locale: 'en',
      isTransparent: true
    });

    if (widgetContainerRef.current) {
        widgetContainerRef.current.appendChild(script);
      }
    }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" ref={widgetContainerRef}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
