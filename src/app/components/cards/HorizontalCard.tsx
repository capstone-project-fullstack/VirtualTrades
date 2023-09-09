'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  // Button,
} from '@material-tailwind/react';
import Img from 'next/image';
import { GradientButtonRounded } from '../buttons/Button';
import { useRouter } from 'next/navigation';

interface HorizontalCardProps {
  img: string;
}
export default function Home({ img }: HorizontalCardProps) {
  const router = useRouter(); // Move this line here

  const handleRoute = (page: string) => {
    router.push(`/${page}`);
  };

  // export default function HorizontalCard({ img, text1, text2, text3, onClick }: HorizontalCardProps) {
  return (
    <Card className="w-full max-w-[48rem] bg-dark-black">
      <div className="flex flex-col md:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-full md:w-2/5 m-0 rounded-r-none"
        >
          <Img
            src={img}
            alt="card-image"
            className="h-full w-full object-cover"
            width={150}
            height={150}
          />
        </CardHeader>
        <div className="md:w-3/5">
          <CardBody>
            <Typography
              variant="h6"
              color="white"
              className="mb-4 uppercase text-3xl"
            >
              Sign up now to receive real-time overviews
            </Typography>
            <Typography variant="h4" color="white" className="mb-2 text-xl">
              Welcome to our Stock Market, where you can explore real-time
              trends and insights. An array of interactive graphs showcasing
              live stock data allows you to track the performance of various
              stocks and delve into comprehensive analyses."
            </Typography>
            <Typography color="white" className="mb-8 font-normal">
              Examine trends and learn to invest with confidence!
            </Typography>
            <a href="#" className="inline-block">
              <div className="f-center">
                <GradientButtonRounded
                  text="Open Market"
                  onClick={() => handleRoute('market')}
                  className="bg-none bg-light-green"
                />
              </div>
            </a>
          </CardBody>
        </div>
      </div>
    </Card>
  );
}
