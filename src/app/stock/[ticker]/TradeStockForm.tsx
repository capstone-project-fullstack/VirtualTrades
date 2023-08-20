"use client";

interface TradeStockFromProps {
  price: number;
  userId: string;
  stockId: number;
  func: any;
}
export default function TradeStockForm({
  userId,
  stockId,
  func,
  price,
}: TradeStockFromProps) {
  const buyStock = async (
    e: React.FormEvent<HTMLFormElement>,
    userId: string,
    stockId: number,
    func: any
  ) => {
    e.preventDefault();
    const shares = e.currentTarget.elements.shares.value;
    if (!shares || !stockId) return;
    await func(userId, stockId, Number(shares));
    e.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={(e) => buyStock(e, userId, stockId, func)}>
        <div>Price: {price}</div>
        <input
          className="text-black"
          type="number"
          name="shares"
          placeholder="shares"
          required
        />
        <button type="submit">Buy</button>
      </form>
    </div>
  );
}
