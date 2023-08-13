"use client";
import { Button, Input } from "@material-tailwind/react";
import { useEffect, useRef, memo, useState } from "react";

function StockWidget() {
  const container = useRef();
  const [symbol, setSymbol] = useState("AAPL|1D");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [["${symbol}"]],
        "chartOnly": false,
        "width": 1000,
        "height": 500,
        "locale": "en",
        "colorTheme": "dark",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;

    // Clear the previous content of the container
    container.current.innerHTML = "";

    // Append the new script and its container
    const scriptContainer = document.createElement("div");
    scriptContainer.className = "tradingview-widget-container__widget";
    if (container.current) {
      container.current.appendChild(scriptContainer);
    }
    // container.current.appendChild(scriptContainer);
    scriptContainer.appendChild(script);
  }, [symbol]);

  const data = document.getElementById("symbol-delta");
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.symbol.value;
    setSymbol(value);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <Input
            crossOrigin="anonymous"
            type="text"
            color="white"
            label="Symbol"
            name="symbol"
          />
          <Button variant="gradient" color="blue" type="submit">
            Search
          </Button>
        </div>
      </form>
      <div className="flex justify-center items-center">
        <div className="tradingview-widget-container" ref={container}></div>
      </div>
    </div>
  );
}

export default memo(StockWidget);
