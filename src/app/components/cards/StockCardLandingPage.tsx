import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import Img from 'next/image';
import { GradientButtonRounded } from '../buttons/Button';
import { useRouter } from 'next/navigation';

interface StockCardLandingPageProps {
  imgUrl: string;
  textCard: string;
  titleCard: string;
  onClick: () => void;
  text: string;
}

export default function StockCardLandingPage({
  imgUrl,
  textCard,
  titleCard,
  onClick,
  text,
}: StockCardLandingPageProps) {
  const router = useRouter();

  return (
    <Card className="w-96 bg-dark-purple text-center items-center justify-center">
      <Typography color="white" variant="h4" className="text-center pt-6">
        {titleCard}
      </Typography>
      <CardHeader shadow={false} floated={false} className="h-60 flex flex-row items-center justify-center w-[80%] mb-2">
        <Img
          className="h-full w-[80%] rounded-lg object-cover"
          src={imgUrl}
          alt="nature image"
          width={70}
          height={70}
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="white"
          className="font-normal opacity-75"
        >
          {textCard}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="f-center">
          <GradientButtonRounded
            text={text}
            onClick={onClick}
            className="bg-none bg-light-green"
          />
        </div>
      </CardFooter>
    </Card>
  );
}
