import Stock from '../../modals/stock';
import UserService from '../../modals/user';
import prisma from '../../../../lib/prisma';
import { currentUser } from '@clerk/nextjs';

export const GET = async () => {
  const currUser = await currentUser();
  if (!currUser) {
    return new Response(JSON.stringify({ error: 'User not logged in' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const userId = currUser?.id;

    const userStocks = await UserService.userStocksInPortfolio(userId);

    userStocks.forEach(async (stock) => {
      await Stock.getCurrentPrice(stock.Stock.symbol);
    });

    const portfolioData = await prisma.portfolio.findMany({
      where: { user_id: userId },
      select: {
        shares: true,
        average_price: true,
        total_equity: true,
        gain: true,
        Stock: {
          select: {
            symbol: true,
            name: true,
            current_price: true,
            icon_url: true,
          },
        },
      },
    });

    const updateWithPercentGain = portfolioData.map((data) => {
      return {
        ...data,
        percentGain: (
          ((Number(data.Stock.current_price) - Number(data.average_price)) /
            Number(data.average_price)) *
          100
        ).toFixed(2),
      };
    });

    return new Response(JSON.stringify(updateWithPercentGain), { status: 200 });
  } catch (error) {
    console.error('Error getting portfolio data:', error);
    return new Response(
      JSON.stringify({ error: 'Error getting portfolio data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
