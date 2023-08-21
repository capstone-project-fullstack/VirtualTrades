// tradeActions.ts
"use server";

import TradeStocks from "@/app/modals/tradeStocks";
import { revalidatePath } from "next/cache";

export const buyStock = async (
  userId: string,
  stockId: number,
  shares: number
) => {
  await TradeStocks.buyStock(userId, stockId, shares);
  revalidatePath("/");
};

export const sellStock = async (
  userId: string,
  stockId: number,
  shares: number
) => {
  await TradeStocks.sellStock(userId, stockId, shares);
  revalidatePath("/");
};
