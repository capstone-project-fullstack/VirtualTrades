// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "./components/Navbar";
// import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {/* <ThemeProvider> */}
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Virtual Trades</title>
        </head>
        <body
          className={`${inter.className} text-white w-screen h-screen`}
        >
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </body>
      </html>
      {/* </ThemeProvider> */}
    </ClerkProvider>
  );
}
