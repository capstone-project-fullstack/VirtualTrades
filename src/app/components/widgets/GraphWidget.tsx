'use client';

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise: Promise<void>;

interface TradingViewWidgetProps {
  ticker: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ ticker }) => {
  const onLoadScriptRef = useRef<() => void | null>();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';

        // Explicitly type the event handler
        script.onload = resolve as unknown as (this: GlobalEventHandlers, ev: Event) => any;

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
      if (document.getElementById('tradingview_fc9a6') && 'TradingView' in window) {
        new window.TradingView.widget({
          autosize: true,
          symbol: ticker,
          interval: '60',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '2',
          locale: 'en',
          enable_publishing: false,
          backgroundColor: 'rgba(0, 0, 0, 1)',
          hide_side_toolbar: false,
          save_image: false,
          container_id: 'tradingview_fc9a6',
        });
      }
    }
  }, [ticker]);

  return (
    <div className="tradingview-widget-container h-full">
      <div id="tradingview_fc9a6" className="h-full"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default TradingViewWidget;


// 'use client';

// import React, { useEffect, useRef, memo, useState } from 'react';

// function GraphWidget({ ticker }: { ticker: string }) {
//   const container = useRef<HTMLDivElement | null>(null);

//   const [widgetWidth, setWidgetWidth] = useState<number>(0);

//   useEffect(() => {
//     setWidgetWidth(window.innerWidth - 100);

//     const handleResize = () => {
//       setWidgetWidth(window.innerWidth - 100);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src =
//       'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
//     script.async = true;
//     script.innerHTML = `
//       {
//         "symbols": [["${ticker}"]],
//         "chartOnly": false,
//         "width": ${widgetWidth},
//         "locale": "en",
//         "colorTheme": "dark",
//         "autosize": true,
//         "showVolume": false,
//         "showMA": false,
//         "hideDateRanges": false,
//         "hideMarketStatus": false,
//         "hideSymbolLogo": false,
//         "scalePosition": "right",
//         "scaleMode": "Normal",
//         "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
//         "fontSize": "10",
//         "noTimeScale": false,
//         "valuesTracking": "1",
//         "changeMode": "price-and-percent",
//         "chartType": "area",
//         "maLineColor": "#2962FF",
//         "maLineWidth": 1,
//         "maLength": 9,
//         "lineWidth": 2,
//         "lineType": 0,
//         "dateRanges": [
//           "1d|1",
//           "1m|30",
//           "3m|60",
//           "12m|1D",
//           "60m|1W",
//           "all|1M"
//         ]
//       }`;

//     if (container.current) container.current.innerHTML = '';

//     const scriptContainer = document.createElement('div');
//     scriptContainer.className = 'tradingview-widget-container__widget';
//     if (container.current) container.current.appendChild(scriptContainer);
//     scriptContainer.appendChild(script);

//     const handleResize = () => {
//       setWidgetWidth(window.innerWidth - 100);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [ticker, widgetWidth]);

//   return (
//     <div className="flex justify-center items-center">
//       <div className="tradingview-widget-container" ref={container}></div>
//     </div>
//   );
// }

// export default memo(GraphWidget);
