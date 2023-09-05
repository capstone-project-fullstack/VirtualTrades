'use client';
import React from 'react';
import HorizontalCard from './components/cards/HorizontalCard';
import Img from 'next/image';
import SimpleCard from './components/cards/SimpleCard';
import { useRouter } from 'next/navigation';
import Svg from './components/images/Svg';
import { GradientButtonRounded } from './components/buttons/Button';
import TradingViewWidget from './components/widgets/TopWidget';
import BlogCard from './components/cards/BlogCard';

export default function Home() {
  const router = useRouter();

  const handleRoute = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <div>
      <TradingViewWidget />
      <div className="leading-normal tracking-normal text-white gradient">
        <div className="pt-12">
          <div className="container px-12 my-8 mb-14 f-center flex-wrap flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Welcome to{' '}
                <span className="text-light-green">VirtualTrades</span>
              </h1>
              <p className="leading-normal text-3xl mt-4 mb-8">
                Learn to interpret financial indicators, charts and graphs to
                make better informed decisions at the start of your investment
                journey.
              </p>
              <p className="leading-normal text-2xl mb-8">
                Ready to dive in? Welcome to the world of trading stocks with no
                financial risk. Here, you can buy and sell virtual stock at real
                market prices, every day!
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
        <div className="bg-light-purple py-8">
          <div className="container max-w-5xl mx-auto m-8 mb-20">
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap justify-center">
              <HorizontalCard
                img="https://www.nyse.com/publicdocs/images/NYSE_Trading_Floor_New_Branding.jpg"
                text1="Sign up now to receive real-time overviews"
                text2="Welcome to our Stock Market, where you can explore real-time trends and insights. An array of interactive graphs showcasing live stock data allows you to track the performance of various stocks and delve into comprehensive analyses."
                text3="Examine trends and learn to invest with confidence!"
                onClick={() => handleRoute('watchlists')}
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
          <div className="w-full sm:w-1/2 p-9">
            <SimpleCard text1="Stay informed on financial news, explore the latest updates on stocks, trends, and economic developments with our currated news page. " />
          </div>
          <div className="w-full sm:w-1/2 p-9 mt-9">
            <div className="align-middle">
              <h3 className="text-4xl text-white-600 font-bold leading-none mb-9">
                Latest in Finance
              </h3>
              <p className="text-white-900 text-lg">
                News articles are not just headlines, they are valuable learning
                resources. We curate the latest news, including expert analyses
                and market insights to keep you up to date with the
                ever-changing landscape. Understand how these factors influence
                stock prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Svg />

      {/* <section className="bg-light-purple py-8">
        <div className="container mx-auto flex flex-wrap pb-12 m-5">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12 max-h-[500px]">
              <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink ">
                <div className="flex-1 bg-dark-black overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <div className="w-full font-bold text-xl text-white px-6 mt-7 text-center">
                      TRADING STOCK
                    </div>
                    <p className="text-white text-base px-6 mb-5 text-center">
                      Explore the stock market on an interactive map and trade
                      stocks in real-time. Visit our virtual stock analyses
                      page, as well as our market page, to research a companies
                      performance, and shop stock risk-free!
                    </p>
                  </a>
                  <div>
                    <Img
                      className="h-full w-full rounded-lg object-cover object-center"
                      src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/09/factors-affecting-us-stocks-market-vector.png"
                      alt="nature image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex-none mt-auto bg-dark-black rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="f-center">
                    <GradientButtonRounded
                      text="Trade"
                      onClick={() => handleRoute('market')}
                      className="bg-none bg-light-green"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12 max-h-[500px]">
              <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-dark-black overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <div className="w-full font-bold text-xl text-white px-6 mt-7 text-center">
                      YOUR STOCK PORTFOLIO
                    </div>
                    <p className="text-white text-base px-6 mb-5 text-center">
                      Your personalized portfolio offers an instant snapshot of
                      your investments and stock progress. Track performance,
                      stay updated with data analyses and make well-informed
                      decisions, effortlessly.
                    </p>
                  </a>
                  <div>
                    <Img
                      className="h-full w-full rounded-lg object-cover object-center"
                      src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/09/us-stock-market-timings-vector.png"
                      alt="nature image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex-none mt-auto bg-dark-black rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="f-center">
                    <GradientButtonRounded
                      text="Explore"
                      onClick={() => handleRoute('portfolio')}
                      className="bg-none bg-light-green"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12 max-h-[500px]">
              <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-dark-black overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <div className="w-full font-bold text-xl text-white px-6 mt-7 text-center">
                      MORE ABOUT US
                    </div>
                    <p className="text-white text-base px-6 mb-5 text-center">
                      Delve into our mission, learn more about our team, and
                      what our values are here at Virtual Trades. We are
                      dedicated to armoring you with the right tools to
                      confidently navigate this new world of investing!
                    </p>
                  </a>
                  <div>
                    <Img
                      className="h-full w-full rounded-lg object-cover object-center"
                      src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/03/stock-exchanges-in-india-vector.png"
                      alt="nature image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex-none mt-auto bg-dark-black rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="f-center">
                    <GradientButtonRounded
                      text="Read More"
                      onClick={() => handleRoute('landing')}
                      className="bg-none bg-light-green"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-light-purple py-8">
        <div className="container mx-auto pb-12 w-full flex flex-wrap">
          <div className="container flex flex-row m-10 justify-center">
            <div className="flex flex-nowrap justify-center m-5 mr-20">
              <BlogCard 
                Img="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/03/stock-exchanges-in-india-vector.png"
                titleCard="title1"
                textCard="text1"
              />
            </div>
            <div className="flex flex-nowrap justify-center m-5 ml-20">
              <BlogCard
                Img="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/03/stock-exchanges-in-india-vector.png"
                titleCard="title3"
                textCard="text3"
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
            text="Get Started"
            onClick={() => handleRoute('market')}
            className="bg-none bg-light-green"
          />
        </div>
      </section>
    </div>
  );
}
