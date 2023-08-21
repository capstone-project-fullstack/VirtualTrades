import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/navbar/Navbar";
import { dark } from "@clerk/themes";

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
        <body className="text-white bg-dark-black">
          <div>
            <Navbar />
            <main className="ml-16 h-screen">{children} </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
