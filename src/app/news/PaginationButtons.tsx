'use client';

import { Button, IconButton } from '@material-tailwind/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface PaginationButtonsProps {
  active: number;
  total: number;
  onItemClick: (index: number) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  active,
  total,
  onItemClick,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={onPrevClick}
        className="flex items-center gap-2"
        disabled={active === 1}
        color="blue"
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: total }, (_, index) => (
          <IconButton
            key={index}
            {...(active === index + 1
              ? { variant: 'filled', color: 'blue' }
              : { variant: 'text', color: 'white' })}
            onClick={() => onItemClick(index + 1)}
          >
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        onClick={onNextClick}
        className="flex items-center gap-2"
        disabled={active === total}
        color="blue"
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PaginationButtons;
