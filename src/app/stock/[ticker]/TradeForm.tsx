import Stock from "../../modals/stock";
import TradeStocks from "@/app/modals/tradeStocks";
import { currentUser } from "@clerk/nextjs";
import Portfolio from "../../modals/portfolio";
import TradeFormComponent from "./TradeFormComponent";
import { revalidatePath } from "next/cache";

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

  const buyStock = async (data: FormData) => {
    "use server";
    const shares = data.get("sharesToBuy")?.valueOf();
    if (!shares || !stock || !stock.id) return;
    await TradeStocks.buyStock(userId, stock.id, Number(shares));
    revalidatePath("/");
  };

  const sellStock = async (data: FormData) => {
    "use server";
    const shares = data.get("sharesToSell")?.valueOf();
    if (!shares || !stock || !stock.id) return;
    await TradeStocks.sellStock(userId, stock.id, Number(shares));
    revalidatePath("/");
  };

  return (
    <div className="w-full">
      <TradeFormComponent
        sharesOwned={shareOwned}
        price={currentPrice}
        buyStock={buyStock}
        sellStock={sellStock}
        buyingPower={buyingPower}
      />
    </div>
  );
};

export default TradeForm;
