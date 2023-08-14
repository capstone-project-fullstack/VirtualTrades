import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Img from "next/image";

interface NewsCardProps {
  imgLink: string;
  headline: string;
  summary: string;
  newsLink: string;
}

const NewsCard = ({ imgLink, headline, summary, newsLink }: NewsCardProps) => {
  return (
  <Card className="my-6 mr-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <div className="h-full w-full">
          <Img
            src={imgLink}
            alt="card-image"
            height={10000}
            width={1000}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {headline}
        </Typography>
        <Typography>{summary}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => window.open(newsLink)}>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
