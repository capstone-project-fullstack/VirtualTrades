import prisma from '../../../lib/prisma';
import axios from 'axios';

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

    const company = res.data.find((c: any) => c.symbol === symbol);
    return company ? company.instrument_name : null;
  }

  static async getStockIcon(symbol: string) {
    return axios
      .get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
      )
      .then((res) => res.data.logo)
      .catch((err) => console.log(err));
  }

  static async getStockById(id: number) {
    const data = await prisma.stock.findUnique({
      where: {
        id: id,
      },
    });
  }

  static async getCurrentPrice(symbol: string, data?: string) {
    const res = await axios
      .get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));

    const price = Number(res.c.toFixed(2));

    if (await this.findStockIfExist(symbol)) {
      await this.updateCurrentPrice(symbol, price);
    }
    if (data === 'everything') {
      return res;
    }
    return price;
  }

  static async createStockIfNotExist(symbol: string) {
    const price = await this.getCurrentPrice(symbol);
    const name = await this.getStockName(symbol);
    const iconUrl = await this.getStockIcon(symbol);

    if (!name) return null;
    return await prisma.stock.create({
      data: {
        symbol: symbol.toUpperCase(),
        name,
        current_price: price,
        icon_url: iconUrl,
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

  static async additionalCompanyData(symbol: string) {
    const res = await axios
      .get(
        `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${process.env.FINNHUB_API_KEY}`
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return {
      week52High: res.metric['52WeekHigh'],
      week52Low: res.metric['52WeekLow'],
      marketCap: res.metric['marketCapitalization'],
      peAnnual: res.metric.peAnnual,
    };
  }
}

export default Stock;

// (async() => {
//   const stock = await Stock.getStockIcon('AAPL');
//   console.log(stock);
// })();
