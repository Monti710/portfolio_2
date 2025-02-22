"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TitleGenerateEffect } from "./ui/titlegenerate";



export function TitleGenerateEffectDemo() {
  return (
    <TitleGenerateEffect 
      duration={2} 
      filter={false} 
      words={""}
      className="text-2xl font-bold"
    />
  );
}


export function TextGenerateEffectDemo() {
  return (
    <TextGenerateEffect
      duration={2}
      filter={false}
      words={""}
      className="text-1xl leading-relaxed text-justify text-black dark:text-white"
    />
  );
}
