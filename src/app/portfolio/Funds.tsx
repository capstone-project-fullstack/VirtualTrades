'use client';
import { useState } from 'react';
import FundsManagementForm from './FundsManagementForm';
import { formatPrice } from '../utils/utils';

interface FundsProps {
  user: {
    id: string;
    cash: number;
    current_portfolio_value: number;
    initial_amount: number;
  } | null;
}
export default function Funds({ user }: FundsProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-28">
      <div>Buying Power</div>
      <div className="w-fit flex flex-row gap-x-3">
        <div className="text-white text-3xl font-semibold">{formatPrice(user?.cash || 0)}</div>
        <FundsManagementForm open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
