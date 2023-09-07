'use client';

import { Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
  // textButton: any;
  onClick: () => void;
}

export default function FooterWithLogo({
  // textButton,
}: BlogCardProps) {

  const router = useRouter();

  const handleRoute = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <>
      <footer className="ml-16 p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-light-green focus:text-light-green text-white"
                onClick={() => handleRoute('portfolio')}
              >
                Portfolio
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-light-green focus:text-light-green text-white"
                onClick={() => handleRoute('market')}
              >
                Stock Market
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-light-green focus:text-light-green text-white"
                onClick={() => handleRoute('watchlists')}    
                      >
                Watchlist
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-light-green focus:text-light-green text-white"
                onClick={() => handleRoute('news')}               >
                News
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography
          color="blue-gray"
          className="text-center text-white font-normal"
        >
          &copy; 2023 VirtualTrades
        </Typography>
      </footer>
    </>
  );
}
