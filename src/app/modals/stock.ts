import prisma from "../../../lib/prisma";
import axios from "axios";

class Stock {
  static async findStockIfExist(symbol: string) {
    const data = await prisma.stock.findUnique({
      where: {
        symbol: symbol,
      },
    });

    return data && data.symbol ? data : null;
  }

  static async getStockName(symbol: string) {
    const res = await axios
      .get(`https://api.twelvedata.com/symbol_search?symbol=${symbol}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    // console.log(res);
    const company = res.data.find((c: any) => c.symbol === symbol);
    return company ? company.instrument_name : null;
  }

  static async getCurrentPrice(symbol: string) {
    const res = await axios
      .get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));

    if (await this.findStockIfExist(symbol)) {
      await this.updateCurrentPrice(symbol, res.c);
    }
    return res.c;
  }

  static async createStockIfNotExist(symbol: string) {
    const price = await this.getCurrentPrice(symbol);
    const name = await this.getStockName(symbol);

    if (!name) return null;
    return await prisma.stock.create({
      data: {
        symbol: symbol.toUpperCase(),
        name,
        current_price: price,
      },
    });
  }

  static async updateCurrentPrice(symbol: string, price: number) {
    return await prisma.stock.update({
      where: {
        symbol: symbol,
      },
      data: {
        current_price: price,
      },
    });
  }
}

export default Stock;
