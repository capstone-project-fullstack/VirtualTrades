'use client';

import React, { useEffect, useRef } from 'react';
import Tooltip from '../Tooltip';

export default function EconomicCalendarWidget() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;
    script.innerHTML = `{
      "width": "100%",
      "height": "500",
      "colorTheme": "dark",
      "isTransparent": false,
      "locale": "en",
      "importanceFilter": "0,1",
      "currencyFilter": "USD"
    }`;

    if (container.current) container.current.innerHTML = '';

    const scriptContainer = document.createElement('div');
    scriptContainer.className = 'tradingview-widget-container__widget';
    if (container.current) container.current.appendChild(scriptContainer);
    scriptContainer.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="relative top-[5px] left-[98%] z-50 h-0 w-0">
        <Tooltip
          title="Economic Calendar"
          text="Economic calender for important dates. You can also add it to your Google Calendar"
        />
      </div>
      <div
        className="tradingview-widget-container__widget"
        ref={container}
      ></div>
    </div>
  );
}
