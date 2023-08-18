"use client";

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  // import BlockLevelButton from './components/buttons/BlockLevelButton';
   
  export default function SimpleCard( { text1 }: { text1: string}) {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Read The Nesws
          </Typography>
          <Typography>
            {text1}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read</Button>
        </CardFooter>
      </Card>
    );
  }

