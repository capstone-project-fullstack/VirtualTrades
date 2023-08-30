import GraphWidget from '../../components/widgets/GraphWidget';
import TradeForm from './TradeForm';
import TradingViewWidget from '../../components/widgets/TradingViewWidget';
import CompanyDataTabs from '@/app/components/tabs/CompanyDataTabs';
import WatchlistsButton from './WatchlistButton';

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
    <div className="w-full px-3">
      <div className="absolute top-3 right-3">
        <WatchlistsButton ticker={ticker} />
      </div>
      <div className="w-full mt-3 ">
        <TradingViewWidget ticker={ticker} />
      </div>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:min-h-[500px] sm: min-h-[300px] sm:min-w-[500px] flex-auto lg:max-w-[75%] mt-3 lg:mr-3 mx-auto">
            <GraphWidget ticker={ticker} />
          </div>
          <div className="lg:min-w-[25%] mt-3">
            <TradeForm ticker={ticker} />
          </div>
        </div>
        <div className="f-center">
          <CompanyDataTabs ticker={ticker} />
        </div>
      </div>
    </div>
  );
};

export default StockPage;
