// app/layout.tsx
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/navbar/Navbar";
import TradingViewWidget from "./components/widgets/Widgets";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "blue",
          colorText: "white",
          colorBackground: "black",
        },
      }}
    >
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://ucarecdn.com/121094a0-3ee2-4674-9ac8-1320f26ac39e/"
          ></link>
          <title>Virtual Trades</title>
        </head>
        <body className="text-white bg-gradient">
          <TradingViewWidget />
          <div>
            <Navbar />
            <main className="ml-20">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
