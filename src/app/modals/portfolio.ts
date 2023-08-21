import prisma from '../../../lib/prisma';

class Portfolio {
  static async getBuyingPower(userId: string) {
    const data = await prisma.user.findMany({
      where: {
        id: userId,
      },
    });
    return Number(data[0].cash.toFixed(2));
  }
}

export default Portfolio;
