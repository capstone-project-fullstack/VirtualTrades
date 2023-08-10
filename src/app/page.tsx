"use client";

import { UserButton, useAuth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = useAuth();
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
