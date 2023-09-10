import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from './components/navbar/Navbar';
import { dark } from '@clerk/themes';
import FooterWithLogo from './components/footer/FooterWithLogo';
import { Providers } from './redux/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: '#081A51',
          colorText: '#fff',
          colorInputBackground: '#fff',
          colorInputText: '#000',
          colorTextOnPrimaryBackground: '#fff',
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
        <body className="flex flex-col min-h-screen text-white bg-dark-black">
          <div className="flex-grow">
            <Navbar />
            <main className="ml-16">
              <Providers>{children}</Providers>
            </main>
          </div>
          <FooterWithLogo />
        </body>
      </html>
    </ClerkProvider>
  );
}
