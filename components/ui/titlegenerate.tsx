"use client";
import { TextGenerateEffect } from "./text-generate-effect";
import { cn } from "@/lib/utils";

interface TitleGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TitleGenerateEffect: React.FC<TitleGenerateEffectProps> = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}) => {
  return (
    <TextGenerateEffect
      words={words}
      className={cn(
        "font-extrabold text-center bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg",
        className
      )}
      filter={filter}
      duration={duration}
    />
  );
};
