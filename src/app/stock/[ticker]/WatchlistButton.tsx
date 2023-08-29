'use client';

import { Button } from '@material-tailwind/react';
import axios from 'axios';

interface WatchlistButtonProps {
  ticker: string;
}

export default function WatchlistButton({
  ticker
}: WatchlistButtonProps) {
  const editWatchlist = async () => {
    const res = await axios.post('/api/editWatchlist', {
      ticker,
    });
    console.log(res);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        className="flex items-center gap-3"
        variant="gradient"
        color="indigo"
        onClick={editWatchlist}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        Add to Watchlist
      </Button>
    </div>
  );
}
