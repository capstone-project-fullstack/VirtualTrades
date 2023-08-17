import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Img from "next/image";
import { GradientButtonRounded } from "../buttons/Button";

interface HorizontalCardProps {
  img: string,
  text1: string,
  text2: string,
  text3: string,
  onClick: () => void
}

export default function HorizontalCard({ img, text1, text2, text3, onClick }: HorizontalCardProps) {
  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <Img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover"
          width={150}
          height={150}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {text1}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {text2}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {text3}
        </Typography>
        <a href="#" className="inline-block">
          {/* <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button> */}

          <GradientButtonRounded
                      text="Watch"
                      color="green"
                      onClick={onClick}
                    />
        </a>
      </CardBody>
    </Card>
  );
}

