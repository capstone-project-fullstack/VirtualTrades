'use client';

import { Spinner } from '@material-tailwind/react';

export default function Loading() {
  return (
    <div className="bg-bg-dark-black h-screen w-screen">
      <Spinner className="absolute top-1/2 left-1/2 h-12 w-12" color="green" />
    </div>
  );
}
