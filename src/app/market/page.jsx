"use client";

import React from "react";
import HeaderText from "../components/HeaderText";
import SquareWidget from "../components/widgets/SquareWidget";
import TopWidget from "../components/widgets/TopWidget";

const Market = () => {
  return (
    <div className="w-full">
      <TopWidget />
      <HeaderText text="Market" />
      <SquareWidget />
    </div>
  );
};

export default Market;
