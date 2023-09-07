'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import Img from 'next/image';
import { NewsCardProps } from '../../../typings';
import { parseTimestamp, unixTimestampToISO8601 } from '../utils/utils';

const NewsCard = ({
  imgLink,
  headline,
  summary,
  newsLink,
  datetime,
}: NewsCardProps) => {
  const parsedTime = parseTimestamp(unixTimestampToISO8601(datetime));

  return (
    <Card
      className="my-6 w-96 bg-dark-purple cursor-pointer"
      onClick={() => window.open(newsLink)}
    >
      <CardHeader color="blue-gray" className="h-56">
        <Img
          src={imgLink}
          alt="card-image"
          height={10000}
          width={1000}
          className="h-full w-full rounded-lg object-cover"
        />
      </CardHeader>
      <CardBody className="p-4 ">
        <Typography variant="body2" color="white" className="float-right">
          {`${parsedTime.date} | ${parsedTime.time}`}
        </Typography>
        <br />
        <Typography variant="h5" color="white" className="my-2">
          {headline.startsWith(': ') ? headline.slice(2) : headline}
        </Typography>
        <Typography color="white" className="min-h-96">
          {summary}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
