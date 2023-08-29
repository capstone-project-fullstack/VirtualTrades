import { NextRequest } from 'next/server';
import prisma from '../../../../lib/prisma';
import { currentUser } from '@clerk/nextjs';

const doesExist = async (userId: string, stockId: number) => {
  const data = await prisma.watchlist.findMany({
    where: {
      stock_id: stockId,
      user_id: userId,
    },
  });
  return data.length ? true : false;
};

const getStockId = async (ticker: string) => {
  const stockId = await prisma.stock.findUnique({
    where: {
      symbol: ticker,
    },
    select: {
      id: true,
    },
  });
  return stockId?.id;
};

export const GET = async (req: NextRequest) => {
  try {
    const currUser = await currentUser();
    if (!currUser) {
      return new Response(JSON.stringify({ error: 'User not logged in' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const userId = currUser?.id;
    const stock = req.nextUrl.searchParams.get('stock');

    if (!stock) {
      return new Response(JSON.stringify({ error: 'Stock not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const stockId = await getStockId(stock);
    if (!stockId) {
      return new Response(JSON.stringify({ error: 'Stock not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const watchlistExist = await doesExist(userId, stockId);
    if (watchlistExist) {
      return new Response(JSON.stringify({ exists: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ exists: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error getting watchlist data:', error);
    return new Response(
      JSON.stringify({ error: 'Error getting watchlist data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

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

    const stockId = await getStockId(ticker);

    if (!stockId) {
      return new Response(JSON.stringify({ error: 'Stock not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const watchlistExist = await doesExist(userId, stockId);

    if (watchlistExist) {
      const row = await prisma.watchlist.deleteMany({
        where: {
          stock_id: stockId,
          user_id: userId,
        },
      });
      return new Response(JSON.stringify(row), { status: 200 });
    }
    const row = await prisma.watchlist.create({
      data: {
        stock_id: stockId,
        user_id: userId,
      },
    });

    return new Response(JSON.stringify(row), { status: 200 });
  } catch (error) {
    console.error('Error posting watchlist data:', error);
    return new Response(
      JSON.stringify({ error: 'Error posting watchlist data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
