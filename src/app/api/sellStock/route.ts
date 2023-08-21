import TradeStocks from '@/app/modals/tradeStocks';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest): Promise<Response> => {
  try {
    const reqBody = await req.json();
    const { userId, stockId, shares } = reqBody;
    await TradeStocks.sellStock(userId, stockId, shares);
    return new Response('Stock bought successfully', { status: 200 });
  } catch (error) {
    console.error('Error selling stock:', error);
    return new Response('Error selling stock', { status: 500 });
  }
};
