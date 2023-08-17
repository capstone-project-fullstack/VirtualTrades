"use client"

import React from "react";
import HeaderText from "../components/HeaderText";
import TradingViewWidget from "../components/widgets/SquareWidget"; 


const Market = () => {
  return (
    <div>
      <HeaderText text="Market" />
      <TradingViewWidget />
      
    </div>
  );
}


export default Market;