/* eslint-disable no-unused-vars */
'use client';

import { NotificationDialog } from '@/app/components/NotificationDialog';
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
  Spinner,
} from '@material-tailwind/react';

import { GradientButtonRounded } from '@/app/components/buttons/Button';

import axios from 'axios';

import { useEffect, useState } from 'react';

interface TradeFormProps {
  price: number;
  sharesOwned: number;
  buyingPower: number;
  userId: string;
  stockId: number;
  ticker: string;
}

export default function TradeForm({
  price,
  sharesOwned,
  buyingPower,
  userId,
  stockId,
  ticker,
}: TradeFormProps) {
  const [type, setType] = useState('buy');
  const [buyShares, setBuyShares] = useState(0);
  const [sellShares, setSellShares] = useState(0);
  const [shares, setShares] = useState(sharesOwned);
  const [cash, setCash] = useState(buyingPower);
  const [latestPrice, setLatestPrice] = useState(price);
  const [loading, setLoading] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    open: false,
    title: '',
    subTitle: '',
    message: '',
  });

  useEffect(() => {
    if (shares <= 0) {
      setType('buy');
    }
  }, [shares]);

  // useEffect(() => {
  //   let socket: WebSocket | null = null;

  //   const connectSocket = () => {
  //     socket = new WebSocket(
  //       `wss://ws.finnhub.io?token=cjhubehr01qonds7gfn0cjhubehr01qonds7gfng`
  //     );

  //     socket.addEventListener('open', () => {
  //       socket!.send(JSON.stringify({ type: 'subscribe', symbol: ticker }));
  //     });

  //     socket.addEventListener('message', (e) => {
  //       if (e.data) {
  //         try {
  //           const data = JSON.parse(e.data);
  //           if (data.type === 'trade') {
  //             const trades = data.data;
  //             if (trades.length > 0) {
  //               const lastTrade = trades[trades.length - 1];
  //               const lastPrice = Number(lastTrade.p.toFixed(2));
  //               setLatestPrice(lastPrice);
  //             }
  //           }
  //         } catch (error) {
  //           console.error('Error parsing JSON data:', error);
  //         }
  //       }
  //     });
  //   };

  //   const unsubscribeAndReconnect = () => {
  //     if (socket && socket.readyState === WebSocket.OPEN) {
  //       socket.send(JSON.stringify({ type: 'unsubscribe', symbol: ticker }));
  //       socket.close();
  //     }
  //     connectSocket();
  //   };

  //   connectSocket(); // Initial connection

  //   const interval = setInterval(unsubscribeAndReconnect, 3000);

  //   return () => {
  //     clearInterval(interval);
  //     if (socket && socket.readyState === WebSocket.OPEN) {
  //       socket.send(JSON.stringify({ type: 'unsubscribe', symbol: ticker }));
  //       socket.close();
  //     }
  //   };
  // }, [ticker, latestPrice]);

  useEffect(() => {
    const socket = new WebSocket(
      `wss://ws.finnhub.io?token=cjhubehr01qonds7gfn0cjhubehr01qonds7gfng`
    );

    // Connection opened -> Subscribe
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({ type: 'subscribe', symbol: ticker }));
    });

    // Inside the message event listener:
    socket.addEventListener('message', (e) => {
      if (e.data) {
        try {
          const data = JSON.parse(e.data);
          if (data.type === 'trade') {
            const trades = data.data;
            if (trades.length > 0) {
              const lastTrade = trades[trades.length - 1];
              const lastPrice = Number(lastTrade.p.toFixed(2));
              setLatestPrice(lastPrice);
              axios
                .patch(`/api/updateStockPrice`, {
                  ticker,
                  price: lastPrice,
                })
                .catch((err) => console.log(err));
            }
          }
        } catch (error) {
          console.error('Error parsing JSON data:', error);
        }
      }
    });
  }, [ticker]);

  const buyStock = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const sharesToBuy = Number(e.target.elements.sharesToBuy.value);

    try {
      const res = await axios.post(`/api/buyStock`, {
        shares: sharesToBuy,
        stockId,
        userId,
      });
      console.log(res);

      if (res.status === 200) {
        setCash(cash - sharesToBuy * latestPrice);
        setShares(shares + sharesToBuy);
        setBuyShares(0);
        setDialogContent({
          open: true,
          title: 'Success',
          subTitle: 'Stock bought successfully',
          message: `You bought ${sharesToBuy} shares of ${ticker} for ${formatPrice(
            sharesToBuy * latestPrice
          )} at the price of ${formatPrice(Number(res.data.price))}`,
        });
      } else {
        setDialogContent({
          open: true,
          title: 'Error',
          subTitle: 'Stock Purchase failed',
          message: 'Error buying stock',
        });
      }
    } catch (error: any) {
      console.error('Error buying stock:', error);

      // Handle more specific error messages based on the server response
      if (error.response && error.response.status === 500) {
        setDialogContent({
          open: true,
          title: 'Error',
          subTitle: 'Stock Purchase failed',
          message: 'Insufficient funds to buy the stock',
        });
      } else {
        setDialogContent({
          open: true,
          title: 'Error',
          subTitle: 'Stock Purchase failed',
          message: 'An unexpected error occurred',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  async function sellStock(e: any) {
    e.preventDefault();
    const sharesToSell = Number(e.target.elements.sharesToSell.value);
    setLoading(() => true);
    const res = await axios.post(`/api/sellStock`, {
      shares: sharesToSell,
      stockId,
      userId,
    });

    if (res.status === 200) {
      setCash(cash + sharesToSell * latestPrice);
      setShares(shares - sharesToSell);
      setSellShares(0);
      setDialogContent({
        open: true,
        title: 'Success',
        subTitle: 'Stock sold successfully',
        message: `You sold ${sharesToSell} shares of ${ticker} for ${formatPrice(
          sharesToSell * latestPrice
        )} at the price of ${formatPrice(Number(res.data.price))}`,
      });
      setLoading(() => false);
    } else {
      setDialogContent({
        open: true,
        title: 'Error',
        subTitle: 'Stock sold failed',
        message: 'Error selling stock',
      });
      setLoading(() => false);
    }
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <Card className="min-w-[50px] max-w-[400px] bg-purple text-white">
      <NotificationDialog
        dialogContent={dialogContent}
        setDialogContent={setDialogContent}
      />
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center rounded-b-none py-3 px-4 text-center text-white font-bold"
      >
        <Typography variant="h5">Trade Stock</Typography>
      </CardHeader>
      <CardBody className="bg-orange text-white">
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 ">
            <Tab value="buy" onClick={() => setType('buy')}>
              Buy
            </Tab>
            <Tab
              value="sell"
              onClick={() => setType('sell')}
              disabled={shares <= 0}
            >
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
              <form onSubmit={buyStock} className="mt-6 flex flex-col gap-4">
                <div>
                  <Input 
                    className='text-white'
                    label="Number of Shares"
                    color="white"
                    type="number"
                    containerProps={{ className: 'min-w-[72px]' }}
                    crossOrigin="anonymous"
                    name="sharesToBuy"
                    onChange={(e) => setBuyShares(Number(e.target.value))}
                    value={buyShares}
                    min={1}
                    max={Math.floor(cash / latestPrice)}
                    required
                  />
                </div>

                <div className="my-2">
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-2 font-medium">Details
                  </Typography>
                  <div className="border-y border-black text-white">
                    Quantity: <span className="float-right">{buyShares}</span>
                  </div>
                  <div className="border-b border-black text-white">
                    Shares Owned: <span className="float-right">{shares}</span>
                  </div>
                  <div className="border-b border-black text-white">
                    Buying Power:{' '}
                    <span className="float-right">{formatPrice(cash)}</span>
                  </div>
                  <div className="border-b border-black text-white">
                    Cost per Share:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice)}
                    </span>
                  </div>
                  <div className="border-b border-black text-white">
                    Total:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice * buyShares)}
                    </span>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="f-center w-50% text-white"
                  size="lg"
                  color="green"
                  variant="gradient"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : 'Buy'}
                </Button>
                {/* 
                <GradientButtonRounded                 
                  type="submit"
                  className="f-center"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : 'Buy'}
                </GradientButtonRounded> */}
              </form>
            </TabPanel>
            <TabPanel value="sell" className="p-0">
              <form onSubmit={sellStock} className="mt-6 flex flex-col gap-4 text-white">
                <div>
                  <Input
                    label="Number of Shares"
                    type="number"
                    containerProps={{ className: 'min-w-[72px]' }}
                    crossOrigin="anonymous"
                    name="sharesToSell"
                    onChange={(e) => setSellShares(Number(e.target.value))}
                    min={1}
                    value={sellShares}
                    max={shares}
                    required
                  />
                </div>

                <div className="my-2">
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-2 font-medium"
                  >
                    Details
                  </Typography>
                  <div className="border-y border-black">
                    Quantity: <span className="float-right">{sellShares}</span>
                  </div>
                  <div className="border-b border-black text-white">
                    Shares Owned: <span className="float-right text-white">{shares}</span>
                  </div>
                  <div className="border-b border-black text-white">
                    Buying Power:{' '}
                    <span className="float-right">{formatPrice(cash)}</span>
                  </div>
                  <div className="border-b border-black text-white">
                    Cost per Share:{' '}
                    <span className="float-right">{formatPrice(price)}</span>
                  </div>
                  <div className="border-b border-black text-white">
                    Total:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice * sellShares)}
                    </span>
                  </div>
                  {/* 
                  <div className="my-4 flex items-center gap-4"></div> */}
                </div>
                <Button
                  className="f-center"
                  type="submit"
                  size="lg"
                  color="blue"
                  variant="gradient"
                  disabled={shares <= 0 || loading}>
                  {loading ? <Spinner /> : 'Sell'}
                </Button>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
