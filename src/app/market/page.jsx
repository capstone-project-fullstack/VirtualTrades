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

      <div className="flex flex-col items-center justify-center space-y-4">
        <div>
          <TradingViewWidget />
        </div>
        <div>
          <CurrencyWidget />
        </div>
        <div>
          <ScreenerWidget  height={200} width={200}/>
        </div>
      </div>
    </div>
  );
}


export default Market;