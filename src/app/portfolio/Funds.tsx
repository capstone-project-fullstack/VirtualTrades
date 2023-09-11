'use client';
import { useState } from 'react';
import FundsManagementForm from './FundsManagementForm';
import { formatPrice } from '../utils/utils';
import { useAppSelector } from '../redux/hooks';
import Tooltip from '../components/Tooltip';

export default function Funds() {
  const [open, setOpen] = useState(false);
  const funds = useAppSelector((state) => state.fundManagement.values);

  return (
    <div className="h-20 md:h-28 flex justify-center sm:justify-start sm:items-center">
      <div>
        <div className="text-center md:text-left flex gap-1 mt-2 md:m-0">
          Buying Power
          <span className="mt-[2px]">
            <Tooltip
              title="Available Funds"
              text="Amount of cash available for trading"
            />
          </span>
        </div>
        <div className="w-fit flex flex-row gap-x-3">
          <div className="text-white text-3xl font-semibold">
            {formatPrice(funds?.cash || 0)}
          </div>
          <FundsManagementForm open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}
