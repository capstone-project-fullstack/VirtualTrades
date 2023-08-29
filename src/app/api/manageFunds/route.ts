import { NextRequest } from 'next/server';
import prisma from '../../../../lib/prisma';
import { currentUser } from '@clerk/nextjs';

export const PATCH = async (req: NextRequest) => {
  try {
    const currUser = await currentUser();
    const userId = currUser?.id;
    const reqBody = await req.json();
    const { amount } = reqBody;
    const type = req.nextUrl.searchParams.get('type');
    const prev = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        cash: true,
        current_portfolio_value: true,
        initial_amount: true,
      },
    });

    const newCash =
      type === 'add'
        ? Number(prev?.cash) + amount
        : type === 'withdraw'
        ? Number(prev?.cash) - amount
        : prev?.cash;
    const newInitialAmount =
      type === 'add'
        ? Number(prev?.initial_amount) + amount
        : type === 'withdraw'
        ? Number(prev?.initial_amount) - amount
        : prev?.initial_amount;
    const newPortfolioValue =
      type === 'add'
        ? Number(prev?.current_portfolio_value) + amount
        : type === 'withdraw'
        ? Number(prev?.current_portfolio_value) - amount
        : prev?.current_portfolio_value;

    const update = await prisma.user.update({
      data: {
        cash: newCash,
        initial_amount: newInitialAmount,
        current_portfolio_value: newPortfolioValue,
      },
      where: {
        id: userId,
      },
    });
    return new Response(JSON.stringify(update), { status: 200 });
  } catch (error) {
    console.error('Error updating amounts:', error);
    return new Response('Error updating amounts', { status: 501 });
  }
};
