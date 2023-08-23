import { Textarea } from '@material-tailwind/react';

interface TextareaVariantsProps {
  text: string;
}

export default function TextareaVariants({ text }: TextareaVariantsProps) {
  return (
    <div className="grid w-96 grid-col">
      <Textarea variant="static" /> {text}
    </div>
  );
}
