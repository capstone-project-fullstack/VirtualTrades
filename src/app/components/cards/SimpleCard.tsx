'use client';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  // Button,
} from '@material-tailwind/react';
import { GradientButtonRounded } from '../buttons/Button';
import { useRouter } from 'next/navigation';

interface SimpleCard {
  text1: string;
}
export default function Home({ text1 }: SimpleCard) {
  const router = useRouter(); // Move this line here

  const handleRoute = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <Card className="mt-6 w-96">
      <CardBody className='text-center'>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          CURRATED NEWS FEED
        </Typography>
        <Typography variant="lead">{text1}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="f-center">
          <GradientButtonRounded
            text="News Feed"
            onClick={() => handleRoute('news')}
            className="bg-none bg-light-green"
          />
        </div>
      </CardFooter>
    </Card>
  );
}
// }
