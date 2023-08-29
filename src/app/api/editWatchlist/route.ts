import { NextRequest } from 'next/server';
import prisma from '../../../../lib/prisma';
import { currentUser } from '@clerk/nextjs';

export const POST = async (req: NextRequest) => {
  try {
    const currUser = await currentUser();
    if (!currUser) {
      return new Response(JSON.stringify({ error: 'User not logged in' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const userId = currUser?.id;
    const reqBody = await req.json();
    const { ticker } = reqBody;

    const stockId = await prisma.stock.findUnique({
      where: {
        symbol: ticker,
      },
      select: {
        id: true,
      },
    });

    if (!stockId) {
      return new Response(JSON.stringify({ error: 'Stock not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const row = await prisma.watchlist.create({
      data: {
        stock_id: stockId.id,
        user_id: userId,
      }
    });

    return new Response(JSON.stringify(row), { status: 200 });
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
