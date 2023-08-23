import Stock from '../../modals/stock';
import TradeStocks from '@/app/modals/tradeStocks';
import { currentUser } from '@clerk/nextjs';
import Portfolio from '../../modals/portfolio';
import TradeFormComponent from './TradeFormComponent';

const TradeForm = async ({ ticker }: { ticker: string }) => {
  const currUser = await currentUser();
  if (!currUser) return <div></div>;
  const userId = currUser.id;

  let stock = await Stock.findStockIfExist(ticker);

  let buyingPower = await Portfolio.getBuyingPower(userId);

  if (!stock) {
    const createdStock = await Stock.createStockIfNotExist(ticker);
    if (!createdStock) return <div>No Stock Found</div>;
    else stock = createdStock;
  }

  const isSellable = await TradeStocks.isSellable(userId, stock.id);
  const shareOwned = isSellable.length ? isSellable[0].shares : 0;
  const currentPrice = await Stock.getCurrentPrice(ticker);

  return (
    <div className="w-full">
      <TradeFormComponent
        ticker={ticker}
        sharesOwned={shareOwned}
        price={currentPrice}
        userId={userId}
        stockId={stock.id}
        buyingPower={buyingPower}
      />
    </div>
  );
};

export default TradeForm;
