"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between p-4 text-white">
        <div>
          <Link href="/">VirtualTrades</Link>
        </div>
        <div className="flex flex-row items-center space-x-4 ">
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
