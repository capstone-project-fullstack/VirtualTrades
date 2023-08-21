'use client';

import React from 'react';
import HeaderText from '../components/HeaderText';
import CurrencyWidget from '../components/widgets/CurrencyWidget';
import ScreenerWidget from '../components/widgets/ScreenerWidget';
import TextareaVariants from '../components/text/TextArea';
import SquareWidget from '../components/widgets/SquareWidget';
import TopWidget from '../components/widgets/TopWidget';

const Market = () => {
  return (
    <div className="w-full">
      <TopWidget />
      <HeaderText text="Market" />
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <TextareaVariants text={'this is the description of this graph'} />
        </div>
        <div className="mt-10">
          <SquareWidget />
        </div>
        <div>
          <TextareaVariants
            text={'this is the description of the second graph'}
          />
        </div>
        <div className="bg-light-green mt-10">
          <CurrencyWidget />
        </div>
        <div>
          <TextareaVariants
            text={'this is the description of the third graph'}
          />
        </div>
        <div className="bg-blue-green mt-10">
          <ScreenerWidget width={1100} height={523} />
        </div>
      </div>
    </div>
  );
};

export default Market;
