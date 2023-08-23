import React, { useEffect, useRef } from 'react';
export default function InteractiveGraphWidget() {
// TradingViewWidget.jsx

  const onLoadScriptRef = useRef();
  useEffect(() => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_fd8ba') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "60",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "2",
            locale: "en",
            enable_publishing: false,
            backgroundColor: "rgba(0, 0, 0, 1)",
            hide_side_toolbar: false,
            save_image: false,
            container_id: "tradingview_fd8ba"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_fd8ba' />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
      </div>
    </div>
  );
}
