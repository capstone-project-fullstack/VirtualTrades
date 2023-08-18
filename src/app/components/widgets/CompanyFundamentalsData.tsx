"use client";

import React, { useEffect, useRef } from "react";

interface CompanyFundamentalDataProps {
  ticker: string;
}

const CompanyFundamentalData = ({ ticker }: CompanyFundamentalDataProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "regular",
      width: 480,
      height: 830,
      symbol: ticker,
      locale: "en",
    });

    if (container.current) container.current.innerHTML = "";

    const scriptContainer = document.createElement("div");
    scriptContainer.className = "tradingview-widget-container__widget";
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

export default CompanyFundamentalData;
