import AnalysisWidget from "@/app/components/widgets/AnalysisWidget";
import CompanyFundamentalData from "@/app/components/widgets/CompanyFundamentalsData";
import CompanyNewsWidget from "@/app/components/widgets/CompanyNewsWidget";
import GraphWidget from "@/app/components/widgets/GraphWidget";
import Stock from "@/app/modals/stock";

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

  if (tvwidgetsymbol) ticker = tvwidgetsymbol.split(":")[1];

  const findStock = await Stock.findStockIfExist(ticker);

  if (!findStock) {
    await Stock.createStockIfNotExist(ticker);
  } else {
    const currentPrice = await Stock.getCurrentPrice(ticker);
    console.log("findStock", findStock);
    console.log("currentPrice", currentPrice);
  }

  return (
    <div className="w-full">
      <div className="mx-auto"></div>
      <GraphWidget ticker={ticker} />
      <AnalysisWidget ticker={ticker} />
      <div className="flex justify-around">
        <CompanyNewsWidget ticker={ticker} />
        <CompanyFundamentalData ticker={ticker} />
      </div>
    </div>
  );
};

export default StockPage;
