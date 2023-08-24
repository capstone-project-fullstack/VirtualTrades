'use client';
import { useEffect, useState } from 'react';
import FundsManagementForm from './FundsManagementForm';
import { formatPrice } from '../utils/utils';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

// interface FundsProps {
//   initialValues: {
//     initial_amount: number;
//     cash: number;
//     current_portfolio_value: number;
//   };
// }
export default function Funds() {
  const [open, setOpen] = useState(false);
  const funds = useAppSelector((state) => state.fundManagement.values);  

  return (
    <div className="h-28">
      <div>Buying Power</div>
      <div className="w-fit flex flex-row gap-x-3">
        <div className="text-white text-3xl font-semibold">
          {formatPrice(funds?.cash || 0)}
        </div>
        <FundsManagementForm open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
