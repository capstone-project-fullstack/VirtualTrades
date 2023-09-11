'use client';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import AnalysisWidget from '../widgets/AnalysisWidget';
import CompanyNewsWidget from '../widgets/CompanyNewsWidget';
import CompanyFundamentalData from '../widgets/CompanyFundamentalsData';
import { useState } from 'react';

export default function CompanyDataTabs({ ticker }: { ticker: string }) {
  const [activeTab, setActiveTab] = useState('companyData');

  const data = [
    {
      label: 'Company Financials',
      value: 'companyData',
      desc: <CompanyFundamentalData ticker={ticker} />,
    },
    {
      label: 'Technical Analysis',
      value: 'analysis',
      desc: <AnalysisWidget ticker={ticker} />,
    },
    {
      label: 'Timeline/ News',
      value: 'companyNews',
      desc: <CompanyNewsWidget ticker={ticker} />,
    },
  ];

  return (
    <Tabs className="flex flex-col w-full" value={activeTab} align="center">
      <TabsHeader
        className="w-full f-center px-3 mt-3 bg-custom2 opacity-100"
        indicatorProps={{
          className: 'bg-custom5',
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className={`text-${
              activeTab === value ? 'black' : 'white'
            } bg-custom2`}
            onClick={() => setActiveTab(value)}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="justify-center">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
