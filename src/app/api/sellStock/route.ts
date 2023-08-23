import TradeStocks from '@/app/modals/tradeStocks';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { userId, stockId, shares } = reqBody;
    const trade = await TradeStocks.sellStock(userId, stockId, shares);
    return new Response(JSON.stringify(trade), { status: 200 });
  } catch (error) {
    console.error('Error selling stock:', error);
    return new Response('Error selling stock', { status: 500 });
  }
};
