import React from 'react';
import HeaderText from '../components/HeaderText';
import TableWithStripedRows from './TableWithStripedRows';

export default function Watchlists() {
  return (
    <>
      <div>
        <HeaderText text="Watchlists" />
      </div>
      <div>
        <TableWithStripedRows />
      </div>
    </>
  );
}
