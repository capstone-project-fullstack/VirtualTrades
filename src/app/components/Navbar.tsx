"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Link from "next/link";
import Img from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between p-4 text-white">
        <div>
          <Link href="/">
            <Img
              width={100}
              height={100}
              src="https://ucarecdn.com/ccf82c6c-2d7d-4101-a103-a77772babff1/"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-4 ">
          <Link href="/stock">Stock</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/news">News</Link>
          <Link href="/watchlists">Watchlists</Link>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </>
  );
}
