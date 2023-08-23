import AnalysisWidget from '../../components/widgets/AnalysisWidget';
import CompanyFundamentalData from '../../components/widgets/CompanyFundamentalsData';
import CompanyNewsWidget from '../../components/widgets/CompanyNewsWidget';
import GraphWidget from '../../components/widgets/GraphWidget';
import TradeForm from './TradeForm';

interface searchParams {
  search: string;
  tvwidgetsymbol?: string;
}

const StockPage = ({
  params,
  searchParams,
}: {
  params: { ticker: string };
  searchParams: searchParams;
}) => {
  let { ticker } = params;
  const { tvwidgetsymbol } = searchParams;

  if (tvwidgetsymbol) ticker = tvwidgetsymbol.split(':')[1];

  return (
    <div className="w-full">
      <div className="mx-auto"></div>
      <div className="h-[500px]">
        <GraphWidget ticker={ticker} />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-1/2 px-4">
          <AnalysisWidget ticker={ticker} />
        </div>
        <div className="w-full xl:w-1/2 px-4">
          <TradeForm ticker={ticker} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-1/2 px-4">
          <CompanyNewsWidget ticker={ticker} />
        </div>
        <div className="w-full xl:w-1/2 px-4">
          <CompanyFundamentalData ticker={ticker} />
        </div>
      </div>
    </div>
  );
};

export default StockPage;
