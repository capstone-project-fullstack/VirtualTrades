import prisma from '../../../../lib/prisma';
import axios from 'axios';

export const GET = async () => {
  const stocks = await prisma.stock.findMany({
    select: {
      symbol: true,
    },
  });

  await Promise.all(
    stocks.map(async (stock) => {
      const res = await axios
        .get(
          `https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=${process.env.FINNHUB_API_KEY2}`
        )
        .then((res) => res.data)
        .catch((err) => console.log(err));
      console.log('res', res);
      const resData = {
        symbol: stock.symbol,
        price: Number(res.c.toFixed(2)),
      };

      await prisma.stock.update({
        where: {
          symbol: stock.symbol,
        },
        data: {
          current_price: resData.price,
        },
      });
      return resData;
    })
  );

  return new Response(JSON.stringify('success'), {
    status: 200,
  });
};
