import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input, Typography } from '@material-tailwind/react';

interface PositionTableHeaderProps {
  searchStock: string;
  setSearchStock: (value: string) => void;
}

function PositionTableHeader({
  searchStock,
  setSearchStock,
}: PositionTableHeaderProps) {
  return (
    <div className="flex items-center justify-between flex-col sm:flex-row mx-10">
      <div>
        <Typography
          variant="h5"
          color="white"
          className="text-center sm:text-left"
        >
          Current Positions
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          See information about all open positions
        </Typography>
      </div>
      <div className="w-full md:w-72">
        <Input
          label="Search"
          color="white"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          crossOrigin={'anonymous'}
          value={searchStock}
          onChange={(e) => {
            const { value } = e.currentTarget;
            if (value) setSearchStock(value);
            else setSearchStock('');
          }}
        />
      </div>
    </div>
  );
}

export default PositionTableHeader;
