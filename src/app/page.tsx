"use client";
import React from "react";
import HorizontalCard from "./components/cards/HorizontCard";

export default function Home() {
  return (
    <>
      <div className="flex items-center h-screen bg-contain">
        <header className="bg-green-700 text-center flex m-20">
          <div className="w-500 p-4">
            <h1 className="text-white text-2xl font-bold">Virtual Trades</h1>
          </div>
        </header>

        <div className="flex flex-row items-center bg-contain">
          <h3 className="mt-8 text-3xl m-10">
            This is our app Virtual Trades. Welcome to the world of stocks,
            market and money! Learn while staying safe, and get ready for the
            real world.
          </h3>
          <h5 className="mt-8 text-3xl m-10">WHERE INVESTMENT BEGINS</h5>
        </div>
      </div>

      <section className="flex items-center h-screen">
        <h3>Preview live widgets</h3>

        <div className="flex-1 p-8 border border-gray-100 m-4">
          {/* Widget 1 */}
          <h5 className="text-lg font-semibold">Widget 1</h5>
        </div>
        <div className="flex-1 p-8 border border-gray-100 m-4">
          {/* Widget 2 */}
          <h5 className="text-lg font-semibold">Widget 2</h5>
        </div>
        <div className="flex-1 p-8 border border-gray-100 m-4">
          {/* Widget 3 */}
          <h5 className="text-lg font-semibold">Widget 3</h5>
        </div>
      </section>

      <section className="flex items-center h-screen bg-contain">
        <HorizontalCard className=""
          img="https://ww2.kqed.org/app/uploads/sites/23/2023/03/teen-first-credit-card-e1679332855781-800x533.jpg"
          text1="This is our company Virtual Trading. Learn more about how and when to buy and sell"
          text2="Sign up now to receive real-time updates on the market and practice your best trade."
          text3="Watch trends as they evolve, and learn to invest with us!"
        />
        <HorizontalCard
          img="https://newscenter.baruch.cuny.edu/wp-content/uploads/sites/24/2021/05/Summer-2018-Campus-Photo-Shoot.jpg"
          text1="This is our company Virtual Trading. Learn more about how and when to buy and sell"
          text2="Sign up now to receive real-time updates on the market and practice your best trade."
          text3="Watch trends as they evolve, and learn to invest with us!"
        />
      </section>

      <section className="flex items-center h-screen bg-contain">
        <h3>Stock Market Page</h3>
      </section>

      <section className="flex items-center h-screen bg-contain">
        <h3>Watchlist</h3>
      </section>

      <section className="flex items-center h-screen bg-contain">
        <h3>About us</h3>
      </section>
    </>
  );
}
