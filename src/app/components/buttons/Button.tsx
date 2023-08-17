import { Button } from "@material-tailwind/react";
import { materialColors } from "../../../../typings";


interface GradientButtonRoundedProps {
  text: string;
  color: materialColors;
  onClick: () => void;
}

export const GradientButtonRounded = ({
  text,
  color,
  onClick,
}: GradientButtonRoundedProps) => {
  return (
    <Button
      variant="gradient"
      className="rounded-full"
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
