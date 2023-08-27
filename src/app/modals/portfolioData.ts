import prisma from '../../../lib/prisma';

class PortfolioData {
  static async getAllFromPortfolio(userId: string) {
    return await prisma.portfolio.findMany({
      where: { user_id: userId },
    });
  }
}
