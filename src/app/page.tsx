"use client";
import React from 'react'

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
          <h3 className="mt-8 text-3xl m-10">This is our app Virtual Trades. Welcome to the world of stocks, market and money! Learn while staying safe, and get ready for the real world.</h3>
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
        <h3>About News Page</h3>
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
  )
}
