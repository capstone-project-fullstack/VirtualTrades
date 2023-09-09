import { Avatar, Typography } from '@material-tailwind/react';
import { formatPrice } from '../utils/utils';
import { PortfolioData } from '../../../typings';
import Link from 'next/link';

interface PositionTableRowProps {
  row: PortfolioData;
}

function PositionTableRow({ row }: PositionTableRowProps) {
  const {
    Stock: { icon_url, current_price, name, symbol },
    gain,
    shares,
    average_price,
    total_equity,
    percentGain,
  } = row;

  return (
    <tr className={`${gain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      <td className="py-2 text-center border-cell max-w-[165px]">
        <Link href={`/stock/${symbol}`}>
          <div className="flex items-center gap-3 cursor-pointer">
            <Avatar src={icon_url} alt={name} size="sm" className="ml-2" />
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="white"
                className="font-normal text-left"
              >
                {symbol}
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal opacity-70 text-left"
              >
                {name}
              </Typography>
            </div>
          </div>
        </Link>
      </td>
      <td align="center" className="py-2 border-cell">
        <Typography variant="small" className="font-normal">
          {formatPrice(Number(current_price))}
        </Typography>
      </td>
      <td align="center" className="py-2 border-cell">
        <Typography variant="small" className="font-normal">
          {shares}
        </Typography>
      </td>
      <td align="center" className="py-2 border-cell">
        <Typography variant="small" className="font-normal">
          {formatPrice(Number(average_price))}
        </Typography>
      </td>
      <td align="center" className="py-2 border-cell">
        <Typography variant="small" className="font-normal">
          {formatPrice(Number(total_equity))}
        </Typography>
      </td>
      <td align="center" className="py-2 border-cell">
        <Typography variant="small" className="font-normal">
          {formatPrice(Number(gain))}
        </Typography>
      </td>
      <td align="center" className="py-2 border-cell">
        <Typography variant="small" className="font-normal">
          {percentGain}%
        </Typography>
      </td>
    </tr>
  );
}

export default PositionTableRow;
