import { currentUser } from '@clerk/nextjs';
import prisma from '../../../../lib/prisma';

export const GET = async () => {
  try {
    const currUser = await currentUser();
    if (!currUser) {
      return new Response(JSON.stringify({ error: 'User not logged in' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const userId = currUser.id;

    const res = await prisma.trade.findMany({
      where: {
        user_id: userId,
      },
      select: {
        trade_type: true,
        shares: true,
        price: true,
        timestamp: true,
        Stock: {
          select: {
            symbol: true,
            name: true,
            icon_url: true,
          },
        },
      },
    });

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    console.error('Error getting trades data:', error);
    return new Response(
      JSON.stringify({ error: 'Error getting trades data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
