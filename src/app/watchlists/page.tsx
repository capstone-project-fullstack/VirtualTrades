import React from 'react';
import HeaderText from '../components/HeaderText';
import WatchlistsTable from './WatchlistsTable';

export default function Watchlists() {
  return (
    <>
      <div>
        <HeaderText text="Watchlists" />
      </div>
      <div>
        <WatchlistsTable />
      </div>
    </>
  );
}
