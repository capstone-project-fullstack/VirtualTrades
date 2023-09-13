'use client';

import { Button } from '@material-tailwind/react';

interface GradientButtonRoundedProps {
  text: string;
  color?: string;
  onClick: () => void;
  className?: string;
}

export const GradientButtonRounded = ({
  text,
  color,
  onClick,
  className,
}: GradientButtonRoundedProps) => {
  return (
    <Button
      variant="gradient"
      className={`${className} hover:bg-opacity-90`}
      // @ts-ignore
      color={color}
      onClick={onClick}
      ripple={true}
    >
      {text}
    </Button>
  );
};

export const RegularButton = () => {
  return <Button>Gradient</Button>;
};
