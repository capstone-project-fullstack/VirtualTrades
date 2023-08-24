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
   

export default function TabsDefault() {
    const data = [
      {
        label: "Stock Analysis",
        value: "react",
        desc: <AnalysisWidget ticker="true"/>,
      },
      {
        label: "Fundamental Data",
        value: "react",
        desc: <CompanyFundamentalData ticker="true"/>,
      },
      {
        label: "Company News",
        value: "react",
        desc: <CompanyNewsWidget ticker="true"/>,
      }
    ];
   
    return (
      <Tabs className="flex flex-row" value="react">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }