"use client";

import { useState, useEffect } from "react";
import { BsArrowLeftShort, BsSearch, BsFillBookmarkFill } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import Img from "next/image";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Navbar() {
  const [open, isOpen] = useState<boolean>(false);
  const [searchStock, setSearchStock] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`https://api.twelvedata.com/symbol_search?symbol=${searchStock}`)
      .then((res) => {
        if (!Array.isArray(res.data.data)) return;
        setSuggestions(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [searchStock]);

  // console.log(suggestions);
  const filteredStocks = suggestions.filter((suggestion) => {
    return (
      suggestion.exchange === "NASDAQ" ||
      suggestion.exchange === "NYSE" ||
      suggestion.exchange === "AMEX"
    );
  });

  const items = [
    { name: "Dashboard", href: "/dashboard", icon: <MdDashboard /> },
    { name: "News", href: "/news", icon: <BiNews /> },
    { name: "Watchlists", href: "/watchlists", icon: <BsFillBookmarkFill /> },
  ];

  const handleSearchStock = (e: React.KeyboardEvent) => {
    const input = (e.target as HTMLInputElement).value;
    if (e.key === "Enter" && input.length > 0) {
      router.push(`/stock/${input}`);
      setSearchStock(""); // Clear the input value
      isOpen(false);
    }
  };

  return (
    <div
      className={`bg-dark-purple z-10 h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } fixed top-0 left-0 transition-all duration-300`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => isOpen(!open)}
      />
      <div className="inline-flex">
        <Link href="/" className="flex">
          <Img
            width={40}
            height={40}
            src="https://ucarecdn.com/121094a0-3ee2-4674-9ac8-1320f26ac39e/"
            alt="logo"
            className={`cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <Img
            width={190}
            height={100}
            src="https://ucarecdn.com/59d6e657-1f99-407d-a719-531899f4823b/"
            alt="logo"
            className={`cursor-pointer origin-left duration-300 ${
              !open && "scale-0"
            }`}
          />
        </Link>
      </div>
      <div
        className={`flex items-center rounded-md bg-light-white mt-6 py-2 ${
          !open ? "px-2.5" : "px-4"
        }`}
      >
        <BsSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            open && "mr-2"
          } `}
          onClick={() => isOpen(true)}
        />
        <input
          type="search"
          placeholder="Search for stocks"
          className={`!w-full text-white bg-transparent outline-none ${
            !open && "hidden"
          }`}
          onKeyDown={handleSearchStock}
          value={searchStock}
          onChange={(e) => setSearchStock(e.target.value)}
        />
      </div>
      <div
        className={`absolute top-[135px] right-0 left-0 z-20 ${
          open ? "block" : "hidden"
        }`}
      >
        {filteredStocks.length > 0 && searchStock.length > 0 && (
          <div className="mt-2 bg-black text-white rounded-md p-2">
            <p className="text-xs mb-1">Filtered Suggestions:</p>
            {filteredStocks.map((suggestion) => (
              <div
                key={suggestion.symbol}
                className="flex items-center gap-x-2 cursor-pointer hover:bg-light-white text-white p-1 rounded-md"
                onClick={() => {
                  router.push(`/stock/${suggestion.symbol}`);
                  isOpen(false);
                  setSearchStock("");
                }}
              >
                <span className="text-white text-sm">{suggestion.symbol}:</span>
                <span className="text-white text-sm">
                  {" " + suggestion.instrument_name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <ul className="pt-2">
        {items.map((item, index) => (
          <li key={index} onClick={() => isOpen(false)}>
            <Link
              href={item.href}
              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md focus:bg-light-white"
            >
              <div className="text-2xl block float-left">{item.icon}</div>
              <div
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
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
          <div className="flex items-center gap-x-4 cursor-pointer p-1">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        <div className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md focus:bg-light-white">
          <SignedOut>
            <div>
              <IoIosLogIn
                className="text-2xl block float-left"
                onClick={() => router.push("/sign-in")}
              />
              <div
                className={`text-base font-medium flex-1 duration-200 flex items-center gap-x-4 pl-4 ${
                  !open && "hidden"
                }`}
              >
                <SignInButton />
              </div>
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
