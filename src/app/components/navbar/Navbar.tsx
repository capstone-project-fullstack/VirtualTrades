'use client';

import { useState, useEffect } from 'react';
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import { BiNews, BiBookmark } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { IoIosLogIn, IoIosHome, IoMdTrendingUp } from 'react-icons/io';
import Img from 'next/image';
import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Tooltip } from '@material-tailwind/react';
import { useUser } from '@clerk/nextjs';

export default function Navbar() {
  const [open, isOpen] = useState<boolean>(false);
  const [searchStock, setSearchStock] = useState<string>('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    axios
      .get(`https://api.twelvedata.com/symbol_search?symbol=${searchStock}`)
      .then((res) => {
        if (!Array.isArray(res.data.data)) return;
        setSuggestions(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [searchStock]);

  const filteredStocks = suggestions.filter((suggestion) => {
    return suggestion.exchange === 'NASDAQ' || suggestion.exchange === 'NYSE';
  });

  filteredStocks.splice(6);

  const items = [
    { name: 'Home', href: '/', icon: <IoIosHome /> },
    { name: 'Portfolio', href: '/portfolio', icon: <MdDashboard /> },
    { name: 'Watchlists', href: '/watchlists', icon: <BiBookmark /> },
    { name: 'Market', href: '/market', icon: <IoMdTrendingUp /> },
    { name: 'News', href: '/news', icon: <BiNews /> },
  ];

  return (
    <div
      className={`z-[1000] h-screen p-3 pt-7 bg-dark-blue ${
        open ? 'w-60' : 'w-16'
      } fixed top-0 left-0 transition-all duration-300`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-[64px] border border-dark-purple cursor-pointer ${
          !open && 'rotate-180'
        }`}
        onClick={() => isOpen(!open)}
      />
      <div className="inline-flex">
        <Link href="/" className="flex">
          <Img
            width={40}
            height={30}
            src="https://ucarecdn.com/121094a0-3ee2-4674-9ac8-1320f26ac39e/"
            alt="logo"
            className={`cursor-pointer block float-left mr-2 duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <Img
            width={170}
            height={100}
            src="https://ucarecdn.com/11fd524a-65d5-4334-9bff-3bcf90279d3a/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
            alt="logo"
            className={`cursor-pointer origin-left duration-300 h-[30px] mt-1 ${
              !open && 'scale-0'
            }`}
          />
        </Link>
      </div>
      <div
        className={`flex items-center rounded-md bg-light-white mt-6 py-1  ${
          !open ? 'px-2.5' : 'px-4'
        }`}
      >
        <BsSearch
          className={`text-white ${
            !open ? 'text-3xl' : 'text-2xl'
          } block float-left cursor-pointer ${open && 'mr-2'} `}
          onClick={() => isOpen(true)}
        />
        <input
          type="search"
          placeholder="Search Stocks"
          className={`!w-full text-white bg-transparent outline-none ${
            !open && 'hidden'
          }`}
          // onKeyDown={handleSearchStock}
          value={searchStock}
          onChange={(e) => setSearchStock(e.target.value)}
        />
      </div>
      <div
        className={`absolute top-[130px] right-0 left-0 z-20 ${
          open ? 'block' : 'hidden'
        }`}
      >
        {filteredStocks.length > 0 && searchStock.length > 0 && (
          <div className="mt-2 mx-3 bg-black text-white rounded-md p-2">
            <p className="text-xs mb-1">Filtered Suggestions:</p>
            {filteredStocks.map((suggestion) => (
              <div
                key={suggestion.symbol}
                className="flex items-center gap-x-2 cursor-pointer hover:bg-light-white text-white p-1 rounded-md"
                onClick={() => {
                  router.push(`/stock/${suggestion.symbol}`);
                  isOpen(false);
                  setSearchStock('');
                }}
              >
                <span className="text-white text-sm">{suggestion.symbol}:</span>
                <span className="text-white text-sm">
                  {' ' + suggestion.instrument_name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between h-[85%]">
        <ul className={`${!open ? 'px-auto' : 'px-2'}`}>
          {items.map((item, index) => (
            <li key={index} onClick={() => isOpen(false)}>
              <Link
                href={item.href}
                className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer px-[5px] py-1 my-2 hover:bg-light-white rounded-md focus:bg-light-white"
              >
                {!open ? (
                  <Tooltip
                    content={item.name}
                    placement="right"
                    className="ml-2 bg-white text-black z-[10000]"
                  >
                    <div className="text-3xl block float-left">{item.icon}</div>
                  </Tooltip>
                ) : (
                  <div className="text-2xl block float-left">{item.icon}</div>
                )}
                <div
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && 'hidden'
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <SignedIn>
            <div className="flex items-center gap-x-4 cursor-pointer p-1 my-2">
              <UserButton showName={open} afterSignOutUrl="/" />
              <div
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && 'hidden'
                }`}
              >
                {user?.firstName}
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer px-[5px] py-1 my-2 hover:bg-light-white rounded-md focus:bg-light-white">
              {!open ? (
                <Tooltip
                  content="Sign In"
                  placement="right"
                  className="ml-2 bg-white text-black"
                >
                  <div>
                    <IoIosLogIn
                      className="text-3xl block float-left"
                      onClick={() => router.push('/sign-in')}
                    />
                    <div
                      className={`text-base font-medium flex-1 duration-200 flex items-center gap-x-4 pl-4 ${
                        !open && 'hidden'
                      }`}
                    >
                      <SignInButton />
                    </div>
                  </div>
                </Tooltip>
              ) : (
                <div>
                  <IoIosLogIn
                    className="text-2xl block float-left"
                    onClick={() => router.push('/sign-in')}
                  />
                  <div
                    className={`text-base font-medium flex-1 duration-200 flex items-center gap-x-4 pl-4 ${
                      !open && 'hidden'
                    }`}
                  >
                    <SignInButton />
                  </div>
                </div>
              )}
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
