import AnalysisWidget from '../../components/widgets/AnalysisWidget';
import CompanyFundamentalData from '../../components/widgets/CompanyFundamentalsData';
import CompanyNewsWidget from '../../components/widgets/CompanyNewsWidget';
import GraphWidget from '../../components/widgets/GraphWidget';
import TradeForm from './TradeForm';
import TradingViewWidget from '../../components/widgets/TradingViewWidget';
// import { CarouselDefault } from '@/app/components/carousel/Carousel';
import TabsDefault from '@/app/components/tabs/Tabs';

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
      <div className="w-full m-5 mb-0">
        <TradingViewWidget ticker={ticker} />
      </div>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="min-h-[500px] flex-auto lg:max-w-[75%] m-5">
            <GraphWidget ticker={ticker} />
          </div>
          <div className="lg:min-w-[25%] m-5 mt-7">
            <TradeForm ticker={ticker} />
          </div>
        </div>
        <div>
          <TabsDefault ticker={ticker} />
        </div>
      </div>
    </div>
  );
};

export default StockPage;
