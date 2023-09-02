import Stock from '@/app/modals/stock';
import { NextRequest } from 'next/server';

export const PATCH = async (req: NextRequest): Promise<Response> => {
  try {
    const reqBody = await req.json();
    const { ticker, price } = reqBody;
    await Stock.updateCurrentPrice(ticker, price);
    return new Response('Stock Price updated', { status: 200 });
  } catch (error) {
    console.error('Error updating stock price:', error);
    return new Response('Error updating stock price', { status: 501 });
  }
};
