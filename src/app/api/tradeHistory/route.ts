import { currentUser } from '@clerk/nextjs';
import prisma from '../../../../lib/prisma';
import { parseTimestamp } from '@/app/utils/utils';
import { TradeHistory } from '../../../../typings';

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

    const data = await prisma.trade.findMany({
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
      orderBy: {
        timestamp: 'desc',
      },
    });

    const res: TradeHistory[] = data.map((row) => {
      const { time, date } = parseTimestamp(row.timestamp);
      return {
        time,
        date,
        symbol: row.Stock.symbol,
        price: row.price,
        type: row.trade_type,
        shares: row.shares,
      };
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
