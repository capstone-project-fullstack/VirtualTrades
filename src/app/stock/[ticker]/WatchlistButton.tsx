'use client';

import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

interface WatchlistsButtonProps {
  ticker: string;
}

export default function WatchlistsButton({ ticker }: WatchlistsButtonProps) {
  const [watchlist, setWatchlist] = useState(true);

  useEffect(() => {
    axios.get(`/api/editWatchlists?stock=${ticker}`).then((res) => {
      setWatchlist(res.data.exists);
    });
  }, [ticker]);

  const editWatchlists = async () => {
    const res = await axios.post('/api/editWatchlists', {
      ticker,
    });
    if (res.status === 200) setWatchlist(!watchlist);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        className="flex items-center gap-3"
        variant="gradient"
        color="indigo"
        onClick={editWatchlists}
      >
        {watchlist ? <BsFillBookmarkFill className="text-xl"/> : <BsBookmark className="text-xl"/>}
        {/* {watchlist ? 'Remove from' : 'Add to'} Watchlists */}
      </Button>
    </div>
  );
}
