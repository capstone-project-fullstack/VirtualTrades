'use client';
import React, { useEffect } from 'react';
import Img from 'next/image';
import { useRouter } from 'next/navigation';
import Svg from './components/images/Svg';
import { GradientButtonRounded } from './components/buttons/Button';
import TradingViewWidget from './components/widgets/TopWidget';
import StockCardLandingPage from './components/cards/StockCardLandingPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const router = useRouter();

  const handleRoute = (page: string) => {
    router.push(`/${page}`);
  };

  // useEffect(() => {
    AOS.init();
  // }, []);

  return (
    <div>
      <TradingViewWidget />
      <div
        className="leading-normal tracking-normal text-white gradient my-20"
        data-aos="zoom-in"
      >
        <div className="m-8 f-center">
          <div className="container f-center gap-x-8 flex-wrap flex-col lg:flex-row mb-9">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start ml-10">
              <div className="my-2 text-5xl md:text-6xl text-center md:text-left font-bold leading-[1] w-full">
                Welcome to <div className="text-light-green">VirtualTrades</div>
              </div>
              <p className="leading-normal text-xl mt-3 mb-4">
                Experience the thrill of stock trading in a risk-free
                environment with VirtualTrades. Buy and sell stocks, build your
                portfolio, and track your investments, all in real-time!
              </p>
              <p className="leading-normal text-xl mb-8">
                Stay informed with the latest market news, analyze historical
                data, and learn to make more informed decisions. Begin your
                virtual trading journey today!
              </p>
            </div>
            <div className="w-full lg:w-1/2 ml-4">
              <Img
                className="w-full lg:pl-4 z-50 rounded-md"
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

      <div className="bg-[#19052a]">
        <div
          className="leading-normal tracking-normal text-white gradient pt-7 pb-20"
          data-aos="zoom-in"
        >
          <div className="m-8 f-center">
            <div className="container f-center gap-x-5 flex-wrap flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 hello">
                <Img
                  className="w-full lg:pr-16 z-50 rounded-md my-2"
                  src="https://ucarecdn.com/200f04c5-3e86-4136-84e4-b3fa599ccbfb/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
                  alt="hero img"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/3 justify-center items-start">
                <div className="my-3 text-4xl md:text-3xl text-center md:text-left font-bold leading-[1] w-full mt-8">
                  Virtual Stock Trading
                </div>
                <p className="leading-normal text-xl mt-2 mb-8">
                  Dive into the exciting world of stock trading with
                  VirtualTrades. Simulate real-time stock transactions, analyze
                  market data, and refine your investment strategies.
                </p>
                <p className="leading-normal text-xl mb-6">
                  Whether you're a beginner or an experienced investor,
                  VirtualTrades offers a risk-free environment to practice and
                  enhance your trading skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-28">
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
              fill="#100517"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <section className="bg-dark-black mt-14 pb-40 f-center p-10 m-4">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <StockCardLandingPage
              titleCard="YOUR PORTFOLIO"
              imgUrl="https://cdn3.iconfinder.com/data/icons/real-estate-line-color-property-evaluation/512/Budget-1024.png"
              textCard="Your personal portfolio offers an instant snapshot of your investments and your stock progress. Track performance and stay updated with data analyses, effortlessly."
              onClick={() => handleRoute('portfolio')}
              text="Portfolio"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <StockCardLandingPage
              titleCard="TRADING STOCK"
              imgUrl="https://cdn2.iconfinder.com/data/icons/finance-226/64/trading-partner-Handshake-stock-finance-1024.png"
              textCard="Explore the stock market in real-time. Visit our virtual stock market page with its analytical tables, charts and graphs help you research a company's performance!"
              onClick={() => handleRoute('market')}
              text="View Stock"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <StockCardLandingPage
              titleCard="NEWS"
              imgUrl="https://ucarecdn.com/9a462dc0-f639-4735-a1b2-458568990f17/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
              textCard="Stay informed on latest financial news, explore the latest updates on stocks, trends, and economic developments with our currated news page.

            "
              onClick={() => handleRoute('news')}
              text="Market News"
            />
          </div>
        </div>
      </section>

      <Svg />
      <div className="bg-[#19052a]">
        <section className="container mx-auto text-center py-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white mt-5">
            VirtualTrades
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t mt-5 mb-5"></div>
          </div>
          <h3 className="my-4 text-3xl leading-tight mt-5 mb-5">
            If you can grow real skill, you can grow real money.
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
    </div>
  );
}
