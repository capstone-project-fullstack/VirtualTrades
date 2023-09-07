'use client';

import React from 'react';
import HeaderText from '../components/HeaderText';
import Heatmap from '../components/widgets/Heatmap';
import TopWidget from '../components/widgets/TopWidget';
import ScreenerWidget from '../components/widgets/ScreenerWidget';
import MarketOverviewWidget from '../components/widgets/MarketOverviewWidget';
import EconomicCalendarWidget from '../components/widgets/EconomicCalendarWidget';

const Market = () => {
  return (
    <div className="w-full">
      <TopWidget />
      <HeaderText text="Stock Market" />
      <div className="f-center h-full">
        <div className="w-full lg:w-[90%] h-full">
          <div className="flex flex-col lg:flex-row gap-3 mx-3 mt-3 lg:m-0">
            <div className="flex-auto lg:max-w-[65%]">
              <Heatmap />
            </div>
            <div className="lg:min-w-[35%] flex flex-col lg:justify-center">
              <MarketOverviewWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="f-center h-full">
        <div className="mt-3 mx-3 w-full lg:w-[90%]">
          <ScreenerWidget />
        </div>
      </div>
      <div className="f-center h-full">
        <div className="mt-3 mx-3 w-full lg:w-[90%]">
          <EconomicCalendarWidget />
        </div>
      </div>
    </div>
  );
};

export default Market;
