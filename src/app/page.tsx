"use client";
import React from "react";
import HorizontalCard from "./components/cards/HorizontalCard";
import Img from "next/image";
import SimpleCard from "./components/cards/SimpleCard";
import { useRouter } from "next/navigation";
import Svg from "./components/images/Svg";
import { GradientButtonRounded } from "./components/buttons/Button";
import TradingViewWidget from "./components/widgets/TopWidget";

export default function Home() {
  const handleRoute = (page: string) => {
    router.push(`/${page}`);
  };
  const router = useRouter();
  return (
    <div>
      <TradingViewWidget />
      <div className="leading-normal tracking-normal text-white gradient">
        <div className="pt-12">
          <div className="container px-12 my-8 mb-14 f-center flex-wrap flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Welcome to <span className="text-light-green">VirtualTrades</span>
              </h1>
              {/* <p className="uppercase tracking-loose w-full ax-w-md text-2xl">
                WHERE INVESTMENT BEGINS
              </p> */}
              <p className="leading-normal text-3xl mt-4 mb-8">
                Learn to interpret financial indicators, charts and
                graphs to make better informed decisions at the start of your
                investment journey.
              </p>
              <p className="leading-normal text-2xl mb-8">
                Ready to dive in? Embrace the thrill of trading
                stocks with no financial risk. Here, you can buy and sell
                virtual stocks at real market prices, every day!
              </p>
            </div>
            <div className="w-full md:w-1/2 p-5 text-center">
              <Img
                className="w-full z-50 md:mx-7 rounded-md"
                src="https://ucarecdn.com/6a9adf89-51b8-47f5-8bf5-81eff950be9a/"
                alt="hero img"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>

      <Svg />

      <section>
        <div className="bg-purple py-8">
          <div className="container max-w-5xl mx-auto m-8 mb-20">
            <h1 className="w-full my-2 text-center text-4xl text-white-600 font-bold leading-none mb-9">
              Stock Market
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
                onClick={() => handleRoute("watchlists")}
              />
            </div>
          </div>
        </div>
      </section>

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
              fill="dark-grey"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <section className="m-20">
        <div className="flex flex-wrap flex-col-reverse sm:flex-row ml-20">
          <div className="w-full sm:w-1/2 p-9 mt-0">
            <SimpleCard text1="Stay informed about financial news, explore the latest updates on stocks, trends, and economic developments with our currated news page. " />
          </div>
          <div className="w-full sm:w-1/2 p-9 mt-6">
            <div className="align-middle">
              <h3 className="text-4xl text-white-600 font-bold leading-none mb-9">
                Currated Financial News
              </h3>
              <p className="text-white-700 text-lg mb-8">
                The news articles are not just headlines, they are valuable
                learning resources. We curate the latest news articles, including expert
                analyses, and market insights to keep you up to date with the
                ever-changing landscape. Whether trade tensions, economic data
                releases, or geopolitical developments, gain an understanding of
                how these factors influence stock prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Svg />

      <section className="bg-purple py-8">
        <div>
            <h1 className="w-full my-2 text-center text-4xl text-white-600 font-bold leading-none">
              Stock Market
            </h1>
        </div>
        <div className="container mx-auto flex flex-wrap pb-12">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    {/* <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      PERSONAL DASHBOARD
                    </p> */}
                    <div className="w-full font-bold text-xl text-black px-6 mt-5">
                    PERSONAL DASHBOARD
                    </div>
                    <p className="text-black text-base px-6 mb-5">
                      Your personalized dashboard offers an instant snapshot of
                      your investments and stock progress. Track performance,
                      stay updated with real-time data, and make well-informed
                      decisions, effortlessly!
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
                <div className="f-center">
                    <GradientButtonRounded
                      text="Dashboard"
                      onClick={() => handleRoute("dashboard")}
                      className="bg-none bg-dark-green"
                    />
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
                    {/* <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      BUY AND SELL STOCK
                    </p> */}
                    <div className="w-full font-bold text-xl text-black px-6 mt-5">
                    BUY AND SELL STOCK
                    </div>
                    <p className="text-black text-base px-6 mb-5">
                      Explore the stock market on an interactive map and buy or sell your stocks in real-time. Visit our virtual individual Stock Analysis page, research the companies, and shop risk-free!
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

                <div className="f-center">
                    <GradientButtonRounded
                      text="Explore"
                      onClick={() => handleRoute("landing")}
                      className="bg-none bg-dark-green"
                    />
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
                    {/* <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      ABOUT US
                    </p> */}
                    <div className="w-full font-bold text-xl text-black px-6 mt-5">
                    ABOUT US
                    </div>
                    <p className="text-black text-base px-6 mb-5">
                      Delve into our mission, team, and values and Learn about
                      how ourdedicated to empowering you with the knowledge and
                      tools can help you confidently navigate this new world of
                      investments!
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
                <div className="f-center">
                    <GradientButtonRounded
                      text="About Us"
                      onClick={() => handleRoute("landing")}
                      className="bg-none bg-dark-green"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              fill="dark-grey"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <section className="container mx-auto text-center py-6 m-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white mt-5 mb-5">
          VirtualTrades
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t mt-5 mb-5"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight mt-5 mb-5">
          If you grow real skill, you can grow real money.
        </h3>

        <div className="f-center mt-10 mb-5">
                    <GradientButtonRounded
                      text="Get Started!"
                      onClick={() => handleRoute("market")}
                      className="bg-none bg-light-green"
                    />
                  </div>

      </section>
    </div>
  );
}
