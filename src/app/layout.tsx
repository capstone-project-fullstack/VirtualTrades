// app/layout.tsx
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/navbar/Navbar";

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
          <title>Virtual Trades</title>
        </head>
        <body className="text-white">
          <div className="flex">
            <Navbar />
            <div className="p-7">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
