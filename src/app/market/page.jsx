"use client"

import React from "react";
import HeaderText from "../components/HeaderText";
import TradingViewWidget from "../components/widgets/SquareWidget"; 
import CurrencyWidget from "../components/widgets/CurrencyWidget";
import ScreenerWidget from "../components/widgets/ScreenerWidget";

const Market = () => {
  return (
    <div>
      <HeaderText text="Market" />
      <div className="flex flex-wrap justify-center gap-4">
        <div className="mt-10">
          <TradingViewWidget />
        </div>
        <div  className="bg-light-green mt-10">
          <CurrencyWidget />
        </div>
        <div  className="bg-blue-green mt-10">
          <ScreenerWidget width={1100} height={523} />
        </div>
      </div>
    </div>
  );
}


export default Market;