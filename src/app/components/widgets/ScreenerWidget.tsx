import React, { useEffect, useRef } from 'react';

interface ScreenerWidgetProps {
  width: number;
  height: number;
  ticker: string;
}

const ScreenerWidget: React.FC<ScreenerWidgetProps> = ({ width, height }) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      width,
      height,
      defaultColumn: 'overview',
      defaultScreen: 'general',
      market: 'forex',
      showToolbar: true,
      colorTheme: 'light',
      locale: 'en',
      isTransparent: true,
    });

    if (container.current) container.current.innerHTML = '';

    const scriptContainer = document.createElement('div');
    scriptContainer.className = 'tradingview-widget-container__widget';
    if (container.current) container.current.appendChild(scriptContainer);
    scriptContainer.appendChild(script);

  }, [width, height]);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" ref={container}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default ScreenerWidget;
