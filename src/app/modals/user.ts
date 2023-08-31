import prisma from '../../../lib/prisma';
import { User } from '../../../typings';

class UserService {
  static async findUser(userId: string): Promise<User | null> {
    if (!userId) return null;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) return null;

    const { initial_amount, cash, current_portfolio_value } = user;
    return {
      ...user,
      initial_amount: Number(initial_amount),
      cash: Number(cash),
      current_portfolio_value: Number(current_portfolio_value),
    };
  }

  static async createUser(userId: string): Promise<User | null> {
    if (!userId) return null;
    const user = await prisma.user.create({
      data: {
        id: userId,
        initial_amount: 0,
        cash: 0,
        current_portfolio_value: 0,
      },
    });
    const { initial_amount, cash, current_portfolio_value } = user;
    return {
      ...user,
      initial_amount: Number(initial_amount),
      cash: Number(cash),
      current_portfolio_value: Number(current_portfolio_value),
    };
  }

  static async userStocksInPortfolio(userId: string) {
    return await prisma.portfolio.findMany({
      where: { user_id: userId },
      select: {
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
  }

  static async userStocksInWatchlist(userId: string) {
    return await prisma.watchlist.findMany({
      where: { user_id: userId },
      select: {
        Stock: {
          select: {
            symbol: true,
          },
        },
      },
    });
  }
}

export default UserService;
