'use client';

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise: Promise<void>;

interface TradingViewWidgetProps {
  ticker: string;
}

declare global {
  interface Window {
    TradingView: any;
  }
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ ticker }) => {
  const onLoadScriptRef = useRef<(() => void) | null>();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';

        // Explicitly type the event handler
        script.onload = resolve as unknown as (
          this: GlobalEventHandlers,
          ev: Event
        ) => any;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget() {
      if (
        document.getElementById('tradingview_fc9a6') &&
        'TradingView' in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: ticker,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          enable_publishing: false,
          backgroundColor: '#100517',
          hide_side_toolbar: false,
          save_image: false,
          container_id: 'tradingview_fc9a6',
        });
      }
    }
  }, [ticker]);

  return (
    <div className="tradingview-widget-container h-full w-full">
      <div id="tradingview_fc9a6" className="h-full w-full"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default TradingViewWidget;
