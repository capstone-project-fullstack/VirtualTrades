"use client"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Img from "next/image";
import { NewsCardProps } from "../../../../typings";

const NewsCard = ({ imgLink, headline, summary, newsLink }: NewsCardProps) => {
  return (
  <Card className="my-6 mr-6 w-96">
    <CardHeader color="blue-gray" className="relative h-56">
        <Img
          src={imgLink}
          alt="card-image"
          height={10000}
          width={1000}
          className="h-full w-full rounded-lg object-cover"
        />
    </CardHeader>
    <CardBody className="p-4">
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {headline}
      </Typography>
      <Typography>{summary}</Typography>
    </CardBody>
    <CardFooter className="pt-0 flex justify-center items-end">
      <Button className="mt-2" onClick={() => window.open(newsLink)}>
        Read More
      </Button>
    </CardFooter>
  </Card>
  
  );
};

export default NewsCard;
