"use client";

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

import AnalysisWidget from "../widgets/AnalysisWidget";
import CompanyNewsWidget from "../widgets/CompanyNewsWidget";
import CompanyFundamentalData from "../widgets/CompanyFundamentalsData";
   

export default function TabsDefault({ ticker}: {ticker: string}) {
    const data = [
      {
        label: "Stock Analysis",
        value: "analysis",
        desc: <AnalysisWidget ticker={ticker}/>,
      },
      {
        label: "Company Data",
        value: "companyData",
        desc: <CompanyFundamentalData ticker={ticker}/>,
      },
      {
        label: "Company News",
        value: "companyNews",
        desc: <CompanyNewsWidget ticker={ticker}/>,
      }
    ];
   
    return (
      <Tabs className="flex flex-col w-[80%] mb-10" value="analysis" align="center">
        <TabsHeader className="w-full align-center justify-center m-5">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
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