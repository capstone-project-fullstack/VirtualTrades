/* eslint-disable no-unused-vars */
"use client";

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
} from "@material-tailwind/react";
import { defaultValue } from "@material-tailwind/react/types/components/slider";

import { useState } from "react";

interface TradeFormProps {
  price: number;
  sharesOwned: number;
  buyStock: (data: FormData) => void;
  sellStock: (data: FormData) => void;
  buyingPower: number;
}

export default function TradeForm({
  price,
  sharesOwned,
  buyStock,
  sellStock,
  buyingPower,
}: TradeFormProps) {
  const [type, setType] = useState("buy");
  const [buyShares, setBuyShares] = useState(0);
  const [sellShares, setSellShares] = useState(0);

  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

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
            <Tab value="buy" onClick={() => setType("buy")}>
              Buy
            </Tab>
            <Tab
              value="sell"
              onClick={() => setType("sell")}
              disabled={sharesOwned <= 0}
            >
              Sell
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "buy" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "buy" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="buy" className="p-0">
              <form action={buyStock} className="mt-6 flex flex-col gap-4">
                <div>
                  <Input
                    label="Number of Shares"
                    type="number"
                    containerProps={{ className: "min-w-[72px]" }}
                    crossOrigin="anonymous"
                    name="sharesToBuy"
                    onChange={(e) => setBuyShares(Number(e.target.value))}
                    min={1}
                    max={Math.floor(buyingPower / price)}
                    required
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
                    Quantity: <span className="float-right">{buyShares}</span>
                  </div>
                  <div className="border-b border-black">
                    Buying Power:{" "}
                    <span className="float-right">{formatPrice(buyingPower)}</span>
                  </div>
                  <div className="border-b border-black">
                    Cost per Share: <span className="float-right">{formatPrice(price)}</span>
                  </div>
                  <div className="border-b border-black">
                    Total:{" "}
                    <span className="float-right">{formatPrice(price * buyShares)}</span>
                  </div>
                </div>
                <Button type="submit" size="lg">
                  Buy
                </Button>
              </form>
            </TabPanel>
            <TabPanel value="sell" className="p-0">
              <form action={sellStock} className="mt-6 flex flex-col gap-4">
                <div>
                  <Input
                    label="Number of Shares"
                    type="number"
                    containerProps={{ className: "min-w-[72px]" }}
                    crossOrigin="anonymous"
                    name="shareToSell"
                    onChange={(e) => setSellShares(Number(e.target.value))}
                    min={1}
                    max={sharesOwned}
                    required
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
                    Quantity: <span className="float-right">{sellShares}</span>
                  </div>
                  <div className="border-b border-black">
                    Buying Power:{" "}
                    <span className="float-right">{formatPrice(buyingPower)}</span>
                  </div>
                  <div className="border-b border-black">
                    Cost per Share: <span className="float-right">{formatPrice(price)}</span>
                  </div>
                  <div className="border-b border-black">
                    Total:{" "}
                    <span className="float-right">{formatPrice(price * sellShares)}</span>
                  </div>

                  <div className="my-4 flex items-center gap-4"></div>
                </div>
                <Button type="submit" size="lg">
                  Sell
                </Button>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
