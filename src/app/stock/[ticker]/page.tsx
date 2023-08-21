// import AnalysisWidget from "../../components/widgets/AnalysisWidget";
// import CompanyFundamentalData from "../../components/widgets/CompanyFundamentalsData";
// import CompanyNewsWidget from "../../components/widgets/CompanyNewsWidget";
// import GraphWidget from "../../components/widgets/GraphWidget";
// import Stock from "../../modals/stock";
// import TradeStocks from "@/app/modals/tradeStocks";
// import { currentUser } from "@clerk/nextjs";
// import Portfolio from "../../modals/portfolio";
// import TradeForm from "./TradeFormComponent";
// import { revalidatePath } from "next/cache";

// interface searchParams {
//   search: string;
//   tvwidgetsymbol?: string;
// }

// const StockPage = async ({
//   params,
//   searchParams,
// }: {
//   params: { ticker: string };
//   searchParams: searchParams;
// }) => {
//   let { ticker } = params;
//   const { tvwidgetsymbol } = searchParams;
//   const currUser = await currentUser();
//   if (!currUser) return <div></div>;
//   const userId = currUser.id;

//   if (tvwidgetsymbol) ticker = tvwidgetsymbol.split(":")[1];

//   let stock = await Stock.findStockIfExist(ticker);

//   let buyingPower = await Portfolio.getBuyingPower(userId);

//   if (!stock) {
//     const createdStock = await Stock.createStockIfNotExist(ticker);
//     if (!createdStock) return <div>No Stock Found</div>;
//     else stock = createdStock;
//   }

//   const isSellable = await TradeStocks.isSellable(userId, stock.id);
//   const shareOwned = isSellable.length ? isSellable[0].shares : 0;
//   const currentPrice = await Stock.getCurrentPrice(ticker);

//   const buyStock = async (data: FormData) => {
//     "use server";
//     const shares = data.get("sharesToBuy")?.valueOf();
//     if (!shares || !stock || !stock.id) return;
//     await TradeStocks.buyStock(userId, stock.id, Number(shares));
//     revalidatePath("/");
//   };

//   const sellStock = async (data: FormData) => {
//     "use server";
//     const shares = data.get("sharesToSell")?.valueOf();
//     if (!shares || !stock || !stock.id) return;
//     await TradeStocks.sellStock(userId, stock.id, Number(shares));
//     revalidatePath("/");
//   };

//   return (
//     <div className="w-full">
//       <div className="mx-auto"></div>
//       <div>
//         <GraphWidget ticker={ticker} />
//       </div>
//       <div className="flex">
//         <div>
//           <AnalysisWidget ticker={ticker} />
//         </div>
//         <TradeForm
//           sharesOwned={shareOwned}
//           price={currentPrice}
//           buyStock={buyStock}
//           sellStock={sellStock}
//           buyingPower={buyingPower}
//         />
//       </div>
//       <div className="flex">
//         <CompanyNewsWidget ticker={ticker} />
//         <CompanyFundamentalData ticker={ticker} />
//       </div>
//     </div>
//   );
// };

// export default StockPage;

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
      <div>
        <GraphWidget ticker={ticker} />
      </div>
      <div className="flex">
        <div>
          <AnalysisWidget ticker={ticker} />
        </div>
        <TradeForm ticker={ticker} />
      </div>
      <div className="flex">
        <CompanyNewsWidget ticker={ticker} />
        <CompanyFundamentalData ticker={ticker} />
      </div>
    </div>
  );
};

export default StockPage;
