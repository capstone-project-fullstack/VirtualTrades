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
    <div className="w-full">
      <div className="mx-3">
        <div className="absolute top-3 right-3">
          <WatchlistsButton ticker={ticker} />
        </div>
        <div className="w-full mt-3 ">
          <StockHeader ticker={ticker} />
        </div>
      </div>

      <div className="w-full lg:w-[98%] h-full mx-auto mt-3">
        <div className="flex flex-col lg:flex-row gap-3 mx-3 lg:m-0">
          <div className="flex-auto justify-center items-center lg:max-w-[75%] md:min-w-[70%]">
            <GraphWidget ticker={ticker} />
          </div>
          <div className="lg:min-w-[25%] md:min-w-[30%] flex flex-col lg:justify-center">
            <TradeForm ticker={ticker} />
          </div>
        </div>
      </div>
      <div className="f-center">
        <CompanyDataTabs ticker={ticker} />
      </div>
    </div>
  );
}
