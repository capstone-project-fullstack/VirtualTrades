import prisma from "../../../lib/prisma";

class TradeStocks {
  static async buyStock(userId: string, stockId: number, shares: number) {
    return await prisma.trade.create({
      data: {
        user_id: userId,
        stock_id: stockId,
        trade_type: "BUY",
        shares,
      },
    });
  }

  static async isSellable(userId: string, stockId: number) {
    const data = await prisma.portfolio.findMany({
      where: {
        user_id: userId,
        stock_id: stockId,
      },
    })

    return data;
  }



  static async sellStock(userId: string, stockId: number, shares: number) {
    return await prisma.trade.create({
      data: {
        user_id: userId,
        stock_id: stockId,
        trade_type: "SELL",
        shares,
      },
    });
  }
}

export default TradeStocks;
