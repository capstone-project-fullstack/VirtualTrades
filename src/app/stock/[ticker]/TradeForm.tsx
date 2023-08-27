import Stock from '../../modals/stock';
import TradeStocks from '@/app/modals/tradeStocks';
import { currentUser } from '@clerk/nextjs';
import Portfolio from '../../modals/portfolioData.ts';
import TradeFormComponent from './TradeFormComponent';
import UserService from '@/app/modals/user';
import prisma from '../../../../lib/prisma';

const TradeForm = async ({ ticker }: { ticker: string }) => {
  const currUser = await currentUser();
  if (!currUser) return <div></div>;
  const userId = currUser.id;
  const userExist = await UserService.findUser(userId);
  if (!userExist) UserService.createUser(userId);

  let stock = await Stock.findStockIfExist(ticker);

  const userData = await prisma.user.findUnique({ where: { id: userId } });
  const buyingPower = Number(userData?.cash.toFixed(2));

  if (!stock) {
    const createdStock = await Stock.createStockIfNotExist(ticker);
    if (!createdStock) return <div>No Stock Found</div>;
    else stock = createdStock;
  }

  const isSellable = await TradeStocks.isSellable(userId, stock.id);
  const shareOwned = isSellable.length ? isSellable[0].shares : 0;
  const currentPrice = await Stock.getCurrentPrice(ticker);

  return (
    <div>
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
