import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Img from 'next/image';

interface StockCardLandingPageProps {
  imgUrl: string;
  textCard: string;
  titleCard: string;
  onClick: () => void;
}

export default function StockCardLandingPage({
  imgUrl,
  textCard,
  titleCard,
  onClick,
}: StockCardLandingPageProps) {
  return (
    <Card className="w-96 bg-custom5">
      <Typography color="black" variant="h4" className="text-center pt-6">
        {titleCard}
      </Typography>
      <CardHeader shadow={false} floated={false} className="h-60">
        <Img
          className="h-full w-full rounded-lg object-fit"
          src={imgUrl}
          alt="nature image"
          width={100}
          height={20}
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="black"
          className="font-normal opacity-75"
        >
          {textCard}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={true}
          fullWidth={true}
          onClick={onClick}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 cursor-pointer"
        >
          Add to
        </Button>
      </CardFooter>
    </Card>
  );
}
