"use client";

import { Button } from "@material-tailwind/react";
import { materialColors } from "../../../../typings";

interface GradientButtonRoundedProps {
  text: string;
  color?: materialColors;
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
      className={`${className}`}
      color={color}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const RegularButton = () => {
  return <Button>Gradient</Button>;
};
