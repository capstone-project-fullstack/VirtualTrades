import Stock from '@/app/modals/stock';
import UserService from '@/app/modals/user';
import { currentUser } from '@clerk/nextjs';
import { WatchlistData } from '../../../../typings';

export const GET = async () => {
  try {
    const currUser = await currentUser();
    if (!currUser) {
      return new Response(JSON.stringify({ error: 'User not logged in' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const userId = currUser.id;

    const userStocks = await UserService.userStocksInWatchlist(userId);

    const stockData = await Promise.all(
      userStocks.map(async (stock) =>
        Stock.getCurrentPrice(stock.Stock.symbol, 'everything')
      )
    );

    const additionalStockData = await Promise.all(
      userStocks.map(async (stock) =>
        Stock.additionalCompanyData(stock.Stock.symbol)
      )
    );

    const res: WatchlistData[] = stockData.map((data, index) => {
      return {
        low: data.l,
        open: data.o,
        high: data.h,
        price: data.c,
        change: data.d,
        changePercent: data.dp,
        prevClose: data.pc,
        name: userStocks[index].Stock.name,
        symbol: userStocks[index].Stock.symbol,
        icon: userStocks[index].Stock.icon_url,
        peAnnual: additionalStockData[index].peAnnual,
        marketCap: additionalStockData[index].marketCap,
        low52: additionalStockData[index].week52Low,
        high52: additionalStockData[index].week52High,
      };
    });

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    console.error('Error getting watchlists  data:', error);
    return new Response(
      JSON.stringify({ error: 'Error getting watchlists data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
