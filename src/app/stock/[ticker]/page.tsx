import AnalysisWidget from "@/app/components/widgets/AnalysisWidget";
import CompanyFundamentalData from "@/app/components/widgets/CompanyFundamentalsData";
import CompanyNewsWidget from "@/app/components/widgets/CompanyNewsWidget";
import GraphWidget from "@/app/components/widgets/GraphWidget";

interface params {
  ticker: string;
}

interface searchParams {
  search: string;
  tvwidgetsymbol?: string;
}

const StockPage = ({
  params,
  searchParams,
}: {
  params: params;
  searchParams: searchParams;
}) => {
  let { ticker } = params;

  const { tvwidgetsymbol } = searchParams;
  if (tvwidgetsymbol) {
    ticker = tvwidgetsymbol.split(":")[1];
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
