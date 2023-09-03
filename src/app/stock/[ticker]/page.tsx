import GraphWidget from '../../components/widgets/GraphWidget';
import TradeForm from './TradeForm';
import StockHeader from '../../components/widgets/StockHeader';
import CompanyDataTabs from '@/app/components/tabs/CompanyDataTabs';
import WatchlistsButton from './WatchlistButton';

interface StockPageProps {
  params: { ticker: string };
  searchParams: {
    search: string;
    tvwidgetsymbol?: string;
  };
}

export default function StockPage({ params, searchParams }: StockPageProps) {
  let { ticker } = params;
  const { tvwidgetsymbol } = searchParams;

  if (tvwidgetsymbol) ticker = tvwidgetsymbol.split(':')[1];

  return (
    <div className="w-full px-3">
      <div className="absolute top-3 right-3">
        <WatchlistsButton ticker={ticker} />
      </div>
      <div className="w-full mt-3 ">
        <StockHeader ticker={ticker} />
      </div>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="min-h-[600px] sm:min-h-[400px] sm:min-w-[500px] lg:flex-auto lg:max-w-[75%] mt-3 lg:mr-3 mx-auto">
            <div className="w-full h-full">
              <GraphWidget ticker={ticker} />
            </div>
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
}
