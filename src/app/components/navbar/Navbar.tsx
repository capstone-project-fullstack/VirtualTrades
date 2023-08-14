"use client";

import { useState } from "react";
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

export default function Navbar() {
  const [open, isOpen] = useState(false);

  const items = [
    { name: "Dashboard", href: "/dashboard", icon: <MdDashboard /> },
    { name: "News", href: "/news", icon: <BiNews /> },
    { name: "Watchlists", href: "/watchlists", icon: <BsFillBookmarkFill /> },
  ];

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
        />
        <input
          type="search"
          placeholder="Search for stocks"
          className={`!w-full text-white bg-transparent outline-none ${
            !open && "hidden"
          }`}
        />
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
              <IoIosLogIn className="text-2xl block float-left" />
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
