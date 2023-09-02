'use client';

import React, { useEffect, useState } from 'react';
import { NewsData } from '../../../typings';
import NewsCard from './NewsCard';
import { Button } from '@material-tailwind/react';
import PaginationButtons from './PaginationButtons';

interface NewsListsProps {
  allNews: NewsData[];
}

export default function NewsLists({ allNews }: NewsListsProps) {
  const [active, setActive] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  const subArrays = [];
  for (let i = 0; i < allNews.length - 1; i += 9) {
    subArrays.push(allNews.slice(i, i + 9));
  }

  const next = () => {
    if (active === subArrays.length) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div>
      <div className="f-center">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10">
          {subArrays[active - 1].map((news: NewsData) => (
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
      <div className="f-center gap-4">
        <PaginationButtons
          active={active}
          total={subArrays.length}
          onItemClick={(index) => setActive(index)}
          onPrevClick={prev}
          onNextClick={next}
        />
      </div>
    </div>
  );
}
