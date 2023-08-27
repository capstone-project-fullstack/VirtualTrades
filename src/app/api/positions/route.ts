import Stock from '../../modals/stock';
import prisma from '../../../../lib/prisma';
import { currentUser } from '@clerk/nextjs';

export const GET = async () => {
  try {
    const currUser = await currentUser();
    if (!currUser) {
      return new Response(JSON.stringify({ error: 'User not logged in' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const userId = currUser?.id;

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
            icon_url: true,
            current_price: true,
          },
        },
      },
    });

    return new Response(JSON.stringify(portfolioData), { status: 200 });
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
