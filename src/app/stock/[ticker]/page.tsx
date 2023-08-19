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

  const findStock = await Stock.findStockIfExist(ticker);

  if (!findStock) {
    const createdStock = await Stock.createStockIfNotExist(ticker);
    if (!createdStock) return <div>No Stock Found</div>;
  }
  const currentPrice = await Stock.getCurrentPrice(ticker);
  console.log("findStock", findStock);
  console.log("currentPrice", currentPrice);

  const tradeStock = async (data: FormData) => {
    "use server";
    const shares = data.get("shares")?.valueOf();
    if (!shares) return;
    await TradeStocks.buyStock(userId, findStock.id, Number(shares));
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
        <form action={tradeStock}>
          <div>Price: {currentPrice}</div>
          <input
            className="text-black"
            type="number"
            name="shares"
            placeholder="shares"
            required
          />
          <button type="submit">Buy</button>
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
