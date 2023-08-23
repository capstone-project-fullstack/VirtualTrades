'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

import { useState } from 'react';

export default function TradeForm() {
  const [type, setType] = useState('buy');

  return (
    <Card className="w-full max-w-[24rem]">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center rounded-b-none py-3 px-4 text-center"
      >
        <Typography variant="h4" color="white">
          Trade Stock
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 ">
            <Tab value="buy" onClick={() => setType('buy')}>
              Buy
            </Tab>
            <Tab value="sell" onClick={() => setType('sell')} disabled>
              Sell
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === 'buy' ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === 'buy' ? 400 : -400,
              },
            }}
          >
            <TabPanel value="buy" className="p-0">
              <form className="mt-6 flex flex-col gap-4">
                <div>
                  <Input
                    label="Number of Shares"
                    type="number"
                    containerProps={{ className: 'min-w-[72px]' }}
                    crossOrigin="anonymous"
                  />
                </div>

                <div className="my-2">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Details
                  </Typography>
                  <div className="border-y border-black">
                    Quantity: <span className="float-right">5</span>
                  </div>
                  <div className="border-b border-black">
                    Buying Power: <span className="float-right">$100</span>
                  </div>
                  <div className="border-b border-black">
                    Cost per Share: <span className="float-right">$10</span>
                  </div>
                  <div className="border-b border-black">
                    Total: <span className="float-right">$50</span>
                  </div>

                  <div className="my-4 flex items-center gap-4"></div>
                </div>
                <Button size="lg">Buy</Button>
              </form>
            </TabPanel>
            <TabPanel value="sell" className="p-0">
              <form className="mt-6 flex flex-col gap-4">
                <div>
                  <Input
                    label="Number of Shares"
                    type="number"
                    containerProps={{ className: 'min-w-[72px]' }}
                    crossOrigin="anonymous"
                  />
                </div>

                <div className="my-2">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Details
                  </Typography>
                  <div className="border-y border-black">
                    Quantity: <span className="float-right">5</span>
                  </div>
                  <div className="border-b border-black">
                    Buying Power: <span className="float-right">$100</span>
                  </div>
                  <div className="border-b border-black">
                    Cost per Share: <span className="float-right">$10</span>
                  </div>
                  <div className="border-b border-black">
                    Total: <span className="float-right">$50</span>
                  </div>

                  <div className="my-4 flex items-center gap-4"></div>
                </div>
                <Button size="lg">Sell</Button>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
