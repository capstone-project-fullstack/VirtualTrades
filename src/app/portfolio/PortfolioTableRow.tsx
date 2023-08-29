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
  } = row;

  const classes = 'py-2 border-b border-blue-gray-50 text-center border-cell';
  return (
    <tr>
      <td className={classes}>
        <Link href={`/stock/${symbol}`}>
          <div className="flex items-center gap-3 cursor-pointer">
            <Avatar src={icon_url} alt={name} size="sm" className="ml-2" />
            <div className="flex flex-col">
              <Typography variant="small" color="white" className="font-normal">
                {symbol}
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal opacity-70"
              >
                {name}
              </Typography>
            </div>
          </div>
        </Link>
      </td>
      <td align="center" className={classes}>
        <div className="flex flex-col">
          <Typography variant="small" color="white" className="font-normal">
            {formatPrice(Number(current_price))}
          </Typography>
        </div>
      </td>
      <td align="center" className={classes}>
        <div className="flex flex-col">
          <Typography variant="small" color="white" className="font-normal">
            {shares}
          </Typography>
        </div>
      </td>
      <td align="center" className={classes}>
        <div className="flex flex-col">
          <Typography variant="small" color="white" className="font-normal">
            {formatPrice(Number(average_price))}
          </Typography>
        </div>
      </td>
      <td align="center" className={classes}>
        <div className="flex flex-col">
          <Typography variant="small" color="white" className="font-normal">
            {formatPrice(Number(total_equity))}
          </Typography>
        </div>
      </td>
      <td align="center" className={classes}>
        <div className="flex flex-col">
          <Typography variant="small" color="white" className="font-normal">
            {formatPrice(Number(gain))}
          </Typography>
        </div>
      </td>
    </tr>
  );
}

export default PositionTableRow;
