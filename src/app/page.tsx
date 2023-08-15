"use client";
import React from "react";
import HorizontalCard from "./components/cards/HorizontalCard";
import Img from "next/image";
import SimpleCard from "./components/cards/SimpleCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="leading-normal tracking-normal text-white gradient">
        <div className="pt-24">
          <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
              <p className="uppercase tracking-loose w-full ax-w-md text-2xl">
                WHERE INVESTMENT BEGINS
              </p>
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Welcome to VirtualTrades
              </h1>
              <p className="leading-normal text-3xl mb-8">
                Learn how to interpret key financial indicators, charts and
                graphs, enabling you to make well-informed decisions in your
                investment journey.
              </p>
              <p className="leading-normal text-2xl mb-8">
                Ready to dive in? VirtualTrades brings you the thrill of trading
                stocks without any financial risk. Here, you can buy and sell
                virtual stocks at real market prices, honing your investment
                skills in a risk-free environment!
              </p>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                Trade
              </button>
            </div>
            <div className="w-full md:w-1/2 py-6 text-center">
              <Img
                className="w-full md:w-4/5 z-50"
                src="https://netzelfinancial.com/wp-content/uploads/2019/04/investment-drawing-Converted.gif"
                alt="hero img"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-12 lg:-mt-24">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <section>
        <div className="bg-grey border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white-700">
              Watchlist
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap justify-center">
              <HorizontalCard
                img="https://www.nyse.com/publicdocs/images/NYSE_Trading_Floor_New_Branding.jpg"
                text1="Sign up now to receive real-time updates on the market and practice your best trade. "
                text2="Curate a personalized watchlist of stocks you're interested in tracking. Monitor their performance, analyze trends, and make informed decisions, all without risking a single cent of real money."
                text3="Watch trends as they evolve, and learn to invest, risk-free!"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 m-8">
        {/* <div className="bg-grey border-b py-8">
        <div className="container max-w-5xl mx-auto m-8"> */}
        <div className="flex flex-wrap flex-col-reverse sm:flex-row ml-20">
          <div className="w-full sm:w-1/2 p-9 mt-0">
            <SimpleCard text1="From Wall Street to international markets, our news coverage spans across the globe, providing you with a comprehensive view of how global events impact the stock market. Whether it's trade tensions, economic data releases, or geopolitical developments, you'll have a clear understanding of how these factors influence stock prices." />
          </div>
          <div className="w-full sm:w-1/2 p-9 mt-6">
            <div className="align-middle">
              <h3 className="text-4xl text-white-600 font-bold leading-none mb-9">
                Read Current Financial News
              </h3>
              <p className="text-white-700 text-lg mb-8">
                The news articles are not just headlines, they are valuable
                learning resources. We curate the latest news articles, expert
                analyses, and market insights to keep you up to date with the
                ever-changing landscape.
              </p>
            </div>
          </div>
        </div>
        {/* </div></div> */}
      </section>

      <section className="bg-white border-b py-8 ">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    PERSONAL DASHBOARD
                    </p>
                    <div className="w-full font-bold text-xl text-black px-6">
                    Track your progress
                    </div>
                    <p className="text-black text-base px-6 mb-5">
                    Your personalized dashboard offers an instant snapshot of your
                  investments and stock progress. Track performance, stay
                  updated with real-time data, and make well-informed decisions
                  effortlessly.
                    </p>
                  </a>
                  <div>
                    <Img
                      className="h-60 w-full rounded-lg object-cover object-center"
                      src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/09/us-stock-market-timings-vector.png"
                      alt="nature image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="flex items-center justify-start">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                      Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      GEOGRAPHY
                    </p>
                    <div className="w-full font-bold text-xl text-black px-6">
                      Explore all states
                    </div>
                    <p className="text-black text-base px-6 mb-5">
                      Explore the stock market on an interactive map, gain
                      insights into global market trends and real-time stock
                      movements.
                    </p>
                  </a>
                  <div>
                    <Img
                      className="h-60 w-full rounded-lg object-cover object-center"
                      src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/09/factors-affecting-us-stocks-market-vector.png"
                      alt="nature image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="flex items-center justify-start">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                      Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      ABOUT US
                    </p>
                    <div className="w-full font-bold text-xl text-black px-6">
                      Learn more
                    </div>
                    <p className="text-black text-base px-6 mb-5">
                      Delve into our mission, team, and values and Learn about
                      how ourdedicated to empowering you with the knowledge and
                      tools can help you confidently navigate the world of
                      investments.
                    </p>
                  </a>
                  <div>
                    <Img
                      className="h-60 w-full rounded-lg object-cover object-center"
                      src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/03/stock-exchanges-in-india-vector.png"
                      alt="nature image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="flex items-center justify-start">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                      Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <section className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          VirtualTrades
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">
          If you grow real skill, you can grow real money
        </h3>
        <button onClick={() => router.push("/dashboard")} className="mx-auto lg:mx-0 hover:underline bg-black text-black-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          Get Started!
        </button>
      </section>

    </div>
  );
}
