import AnalysisWidget from '../../components/widgets/AnalysisWidget';
import CompanyFundamentalData from '../../components/widgets/CompanyFundamentalsData';
import CompanyNewsWidget from '../../components/widgets/CompanyNewsWidget';
import GraphWidget from '../../components/widgets/GraphWidget';
import TradeForm from './TradeForm';
import TradingViewWidget from '../../components/widgets/TradingViewWidget';

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
    <div className="w-full flex flex-wrap">
      <div className="h-[200px] m-5 w-full">
        <TradingViewWidget ticker={ticker} />
      </div>
      <div className="w-full xl:w-1/2">
        <div className="h-[800px] m-5 max-w-[900px]">
          <GraphWidget ticker={ticker} />
        </div>ƒ
        <div className="flex flex-wrap">
          <div className="w-full xl:w-1/2 px-4">
            <AnalysisWidget ticker={ticker} />
          </div>
          <div className="w-full xl:w-1/2 px-4 m-10">
            <CompanyNewsWidget ticker={ticker} />
          </div>
          <div className="w-full xl:w-1/2 px-4 m-10">
            <CompanyFundamentalData ticker={ticker} />
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2 px-4">
        <TradeForm ticker={ticker} />
      </div>
    </div>
  );
  
  
};

export default StockPage;
