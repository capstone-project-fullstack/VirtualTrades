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
    <div className="w-full">
      <TopWidget />
      <HeaderText text="Market" />
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="m-10">
          <Heatmap />
        </div>
      </div>
    </div>
  );
};

export default Market;
