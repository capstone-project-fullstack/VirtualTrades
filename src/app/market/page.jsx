'use client';

import React from 'react';
import HeaderText from '../components/HeaderText';
import CurrencyWidget from '../components/widgets/CurrencyWidget';
import ScreenerWidget from '../components/widgets/ScreenerWidget';
import TextareaVariants from '../components/text/TextArea';
import Heatmap from '../components/widgets/Heatmap';
import TopWidget from '../components/widgets/TopWidget';

const Market = () => {
  return (
    <div className="w-full h-[100vh]">
      <TopWidget />
      <HeaderText text="Market" />
      <div className="f-center h-full">
        <div className="w-full md:w-[80%] h-full">
          <Heatmap />
        </div>
      </div>
    </div>
  );
};

export default Market;
