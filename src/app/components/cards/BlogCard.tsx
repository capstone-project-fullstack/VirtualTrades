// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography
//   } from "@material-tailwind/react";

//   export default function BlogCard({ Img, textCard, titleCard }) {
//     return (
//       <Card className="max-w-[24rem] overflow-hidden">
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="m-0 rounded-none"
//         >
//           {/* <div>
//             { Img }
//           </div> */}
//           {/* <img
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
//           alt="ui/ux review check"
//         /> */}

//                 <img
//           src={Img}
//           alt={titleCard} // Use the title as alt text for the image
//         />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h4" color="blue-gray">
//             { titleCard }
//           </Typography>
//           <Typography variant="lead" color="gray" className="mt-3 font-normal">
//             { textCard}
//           </Typography>
//         </CardBody>
//         <CardFooter className="flex items-center justify-between">
//           <div className="flex items-center -space-x-3">
//           </div>
//         </CardFooter>
//       </Card>
//     );
//   }

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
// import Img from 'next/image';
import { GradientButtonRounded } from '../buttons/Button';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
  Img: any;
  textCard: any;
  titleCard: any;
  textButton: any;
  onClick: () => void;
}

export default function BlogCard({
  Img,
  textCard,
  titleCard,
  textButton,
}: BlogCardProps) {
  const router = useRouter();

  const handleRoute = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <Card className="max-w-[24rem] overflow-hidden bg-dark-black text-center items-center">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={Img}
          alt="card-image"
          className="object-cover"
          width={300}
          height={300}
          title={titleCard}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="white">
          {titleCard}
        </Typography>
        <Typography variant="lead" color="white" className="mt-3 font-normal">
          {textCard}
        </Typography>
      </CardBody>
      <div className="f-center mb-7">
        <GradientButtonRounded
          text={textButton}
          onClick={() => handleRoute('portfolio')}
          className="bg-none bg-light-green"
        />
      </div>
    </Card>
  );
}
