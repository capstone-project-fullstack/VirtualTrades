'use client';
import { API_KEYS } from '../../utils/config';
import axios from 'axios';
import { formatPrice, generateRandomNumber } from '../../utils/utils';
import { FormEvent, useEffect, useState } from 'react';
import { NotificationDialog } from '@/app/components/NotificationDialog';
import {
  CardHeader,
  CardBody,
  Input,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Spinner,
} from '@material-tailwind/react';

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
    color: '',
  });

  useEffect(() => {
    if (shares <= 0) {
      setType('buy');
    }
  }, [shares]);

  useEffect(() => {
    const apiKey = API_KEYS[generateRandomNumber(API_KEYS.length)];
    const socket = new WebSocket(`wss://ws.finnhub.io?token=${apiKey}`);

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
            }
          }
        } catch (error) {
          console.error('Error parsing JSON data:', error);
        }
      }
    });
  }, [ticker]);

  const buyStock = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const sharesToBuy = Number(formData.get('sharesToBuy'));
    setLoading(() => true);

    try {
      const res = await axios.post(`/api/buyStock`, {
        shares: sharesToBuy,
        stockId,
        userId,
      });

      if (res.status === 200) {
        setCash(cash - sharesToBuy * latestPrice);
        setShares(shares + sharesToBuy);
        setBuyShares(0);
        setDialogContent({
          open: true,
          title: 'Success',
          color: 'green',
          subTitle: 'Stock bought successfully',
          message: `You bought ${sharesToBuy} shares of ${ticker} for ${formatPrice(
            sharesToBuy * latestPrice
          )} at the price of ${formatPrice(Number(res.data.price))}`,
        });
      } else {
        setDialogContent({
          open: true,
          title: 'Error',
          color: 'red',
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
          color: 'red',
          subTitle: 'Stock Purchase failed',
          message: 'Insufficient funds to buy the stock',
        });
      } else {
        setDialogContent({
          open: true,
          title: 'Error',
          color: 'red',
          subTitle: 'Stock Purchase failed',
          message: 'An unexpected error occurred',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  async function sellStock(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const sharesToSell = Number(formData.get('sharesToSell'));
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
        color: 'green',
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
        color: 'red',
        subTitle: 'Stock sold failed',
        message: 'Error selling stock',
      });
      setLoading(() => false);
    }
  }

  return (
    <div className="w-full bg-dark-black border border-custom3 text-white h-auto mx-auto rounded-none">
      <NotificationDialog
        dialogContent={dialogContent}
        setDialogContent={setDialogContent}
      />
      <CardHeader
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center rounded-none py-[5px] border-b-[4px] border-custom4 px-4 text-center text-white font-bold bg-custom2"
      >
        <Typography variant="h5">Trade Stock</Typography>
      </CardHeader>
      <CardBody className="text-white">
        <Tabs value={type} className="overflow-auto no-scrollbar">
          <TabsHeader
            className="relative z-0 bg-custom1"
            indicatorProps={{
              className: `${type === 'buy' ? 'bg-custom5' : 'bg-custom6'}`,
            }}
          >
            <Tab
              value="buy"
              className={`${type === 'sell' ? 'text-white' : ''}`}
              onClick={() => setType('buy')}
            >
              Buy
            </Tab>
            <Tab
              value="sell"
              onClick={() => setType('sell')}
              disabled={shares <= 0}
              className={`${type === 'buy' ? 'text-white' : ''}`}
            >
              Sell
            </Tab>
          </TabsHeader>
          <TabsBody
            className="overflow-x-hidden overflow-y-visible no-scrollbar"
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
                    className="text-white"
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
                    className="mb-2 font-medium"
                  >
                    Details
                  </Typography>
                  <div className="text-white">
                    Quantity: <span className="float-right">{buyShares}</span>
                  </div>
                  <div className="text-white">
                    Shares Owned: <span className="float-right">{shares}</span>
                  </div>
                  <div className="text-white">
                    Buying Power:{' '}
                    <span className="float-right">{formatPrice(cash)}</span>
                  </div>
                  <div className="text-white">
                    Cost per Share:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice)}
                    </span>
                  </div>
                  <div className="text-white">
                    Total:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice * buyShares)}
                    </span>
                  </div>
                </div>
                <div className="w-full f-center pb-10">
                  <button
                    type="submit"
                    className="w-44 custom-btn min-h-[45px]"
                    disabled={loading}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {loading ? (
                      <div className="absolute inset-0 f-center">
                        <Spinner />
                      </div>
                    ) : (
                      'Buy'
                    )}
                  </button>
                </div>
              </form>
            </TabPanel>
            <TabPanel value="sell" className="p-0">
              <form
                onSubmit={sellStock}
                className="mt-6 flex flex-col gap-4 text-white"
              >
                <div>
                  <Input
                    label="Number of Shares"
                    type="number"
                    color="white"
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
                  <div>
                    Quantity: <span className="float-right">{sellShares}</span>
                  </div>
                  <div className="text-white">
                    Shares Owned:{' '}
                    <span className="float-right text-white">{shares}</span>
                  </div>
                  <div className="text-white">
                    Buying Power:{' '}
                    <span className="float-right">{formatPrice(cash)}</span>
                  </div>
                  <div className="text-white">
                    Cost per Share:{' '}
                    <span className="float-right">{formatPrice(price)}</span>
                  </div>
                  <div className="text-white">
                    Total:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice * sellShares)}
                    </span>
                  </div>
                </div>
                <div className="w-full f-center pb-10">
                  <button
                    type="submit"
                    className="w-44 custom-btn2 min-h-[45px]"
                    disabled={shares <= 0 || loading}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {loading ? (
                      <div className="absolute inset-0 f-center">
                        <Spinner />
                      </div>
                    ) : (
                      'Sell'
                    )}
                  </button>
                </div>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </div>
  );
}
