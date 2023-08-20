import AnalysisWidget from "../../components/widgets/AnalysisWidget";
import CompanyFundamentalData from "../../components/widgets/CompanyFundamentalsData";
import CompanyNewsWidget from "../../components/widgets/CompanyNewsWidget";
import GraphWidget from "../../components/widgets/GraphWidget";
import Stock from "../../modals/stock";
import TradeStocks from "@/app/modals/tradeStocks";
import { currentUser } from "@clerk/nextjs";

interface searchParams {
  search: string;
  tvwidgetsymbol?: string;
}

const StockPage = async ({
  params,
  searchParams,
}: {
  params: { ticker: string };
  searchParams: searchParams;
}) => {
  let { ticker } = params;
  const { tvwidgetsymbol } = searchParams;
  const currUser = await currentUser();
  if (!currUser) return <div></div>;
  const userId = currUser.id;

  if (tvwidgetsymbol) ticker = tvwidgetsymbol.split(":")[1];

  let stock = await Stock.findStockIfExist(ticker);

  if (!stock) {
    const createdStock = await Stock.createStockIfNotExist(ticker);
    if (!createdStock) return <div>No Stock Found</div>;
    else stock = createdStock;
  }

  const isSellable = await TradeStocks.isSellable(userId, stock.id);
  const shareOwned = isSellable.length ? isSellable[0].shares : 0;
  const currentPrice = await Stock.getCurrentPrice(ticker);

  const formattedPrice = currentPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const buyStock = async (data: FormData) => {
    "use server";
    const shares = data.get("shares")?.valueOf();
    if (!shares || !stock || !stock.id) return;
    await TradeStocks.buyStock(userId, stock.id, Number(shares));
  };

  const sellStock = async (data: FormData) => {
    "use server";
    const shares = data.get("shares")?.valueOf();
    if (!shares || !stock || !stock.id) return;
    await TradeStocks.sellStock(userId, stock.id, Number(shares));
    data.delete("shares");
  };

  return (
    <div className="w-full">
      <div className="mx-auto"></div>
      <div>
        <GraphWidget ticker={ticker} />
      </div>
      <div className="flex">
        <div>
          <AnalysisWidget ticker={ticker} />
        </div>
        <form action={buyStock}>
          <div>Price: {formattedPrice}</div>
          <input
            className="text-black w-20"
            type="number"
            name="shares"
            placeholder="shares"
            min={0}
            required
          />
          <button type="submit">Buy</button>
        </form>
        <form action={sellStock}>
          <div>Price: {formattedPrice}</div>
          <input
            className="text-black w-20"
            type="number"
            name="shares"
            placeholder="shares"
            required
            min={1}
            max={shareOwned}
          />
          <button type="submit">Sell</button>
        </form>
      </div>
      <div className="flex">
        <CompanyNewsWidget ticker={ticker} />
        <CompanyFundamentalData ticker={ticker} />
      </div>
    </div>
  );
};

export default StockPage;
