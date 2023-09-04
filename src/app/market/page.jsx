'use client';

import React from 'react';
import HeaderText from '../components/HeaderText';
import Heatmap from '../components/widgets/Heatmap';
import TopWidget from '../components/widgets/TopWidget';
import ScreenerWidget from '../components/widgets/ScreenerWidget';
import MarketOverviewWidget from '../components/widgets/MarketOverviewWidget';

const Market = () => {
  return (
    <div className="w-full">
      <TopWidget />
      <HeaderText text="Market" />
      <div className="f-center h-full">
        <div className="w-full md:w-[90%] h-full">
          <div className="flex flex-col md:flex-row gap-3 mx-3 mt-3 md:m-0">
            <div className="flex-auto md:max-w-[65%]">
              <Heatmap />
            </div>
            <div className="md:min-w-[35%] flex flex-col sm:justify-center">
              <MarketOverviewWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="f-center h-full">
        <div className="m-3 w-full md:w-[90%]">
          <ScreenerWidget />
        </div>
      </div>
    </div>
  );
};

export default Market;
