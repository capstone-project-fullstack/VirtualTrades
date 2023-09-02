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

    const userPortfolioSnapshots = await prisma.portfolioValue.findMany({
      where: { user_id: userId },
    });

    return new Response(JSON.stringify(userPortfolioSnapshots), {
      status: 200,
    });
  } catch (error) {
    console.error('Error getting portfolio snapshot data:', error);
    return new Response(
      JSON.stringify({ error: 'Error getting portfolio snapshot data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
