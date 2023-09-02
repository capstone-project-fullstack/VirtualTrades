// "use client";

import React from 'react';
import NewsCard from './NewsCard';
import HeaderText from '../components/HeaderText';
import Loading from '../components/Loading';
import { NewsData } from '../../../typings';
import axios from 'axios';

const getNews = async (): Promise<NewsData[]> => {
  'use server';
  const res = await axios.get(
    `https://finnhub.io/api/v1/news?category=general&token=${process.env.FINNHUB_API_KEY}`
  );
  if (!res.data) return [];
  return res.data;
};

const NewsPage: React.FC = async () => {
  const allNews = await getNews();

  if (!allNews) return <Loading />;

  return (
    <div>
      <HeaderText text="News" />
      <div className="f-center">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10">
          {allNews.map((news: NewsData) => (
            <NewsCard
              key={news.id}
              imgLink={news.image}
              headline={news.headline}
              summary={news.summary}
              newsLink={news.url}
              datetime={news.datetime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

// "use client";
// import React from "react";
// import axios from "axios";
// import NewsCard from "../components/cards/NewsCard";
// import HeaderText from "../components/HeaderText";
// import useSWR from "swr";
// import Loading from "../components/Loading";
// import { NewsData } from "../../../typings";

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// const NewsPage: React.FC = () => {
//   const { data, error } = useSWR("/api/news", fetcher);

//   if (error) {
//     return <div>Error loading news</div>;
//   }

//   if (!data) return <Loading />;

//   return (
//     <div>
//       <HeaderText text="News" />
//       <div className="f-center">
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10">
//           {data.map((news: NewsData) => (
//             <NewsCard
//               key={news.id}
//               imgLink={news.image}
//               headline={news.headline}
//               summary={news.summary}
//               newsLink={news.url}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsPage;
