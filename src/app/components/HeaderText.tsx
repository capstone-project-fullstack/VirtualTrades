"use client";

interface HeaderTextProps {
  text: string;
}
export default function HeaderText({ text }: HeaderTextProps) {
  return (
    <h1 className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600 py-5">
      {text}
    </h1>
  );
}
