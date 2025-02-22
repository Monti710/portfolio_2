"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconSignature,
  IconTableColumn,
  IconCode,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto gap-6 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={
            <div className="flex items-center justify-start gap-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <h1 className="lg:text-4xl font-bold text-left overflow-hidden text-ellipsis">
                {item.title}
              </h1>
            </div>
          }
          description={
            <TextGenerateEffect
              words={item.description}
              duration={2}
              filter={false}
              className="text-sm sm:text-base lg:text-lg leading-tight break-words p-2 overflow-hidden"
            />
          }
          className={cn(
            "p-4 sm:p-6 rounded-2xl shadow-lg border-4 flex flex-col justify-between transition-colors",
            " text-black border-red-800 animate-glow", // Añadimos la animación "animate-glow"
            "bg-white dark:text-white dark:border-red-800 animate-glow",
            "hover:shadow-2xl hover:scale-105 duration-300",
            item.className
          )}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "About Me",
    description:
      "Hello, my name is Ismael Montiel 😊. I want to share about myself, my hobbies, work, and goals.",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-2",
    icon: <IconClipboardCopy className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500 dark:text-yellow-400" />, 
  },
  {
    title: "My Profession",
    description:
      "I am a software engineer 💻. I love coding, learning new technologies, and contributing to open-source projects!",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-1",
    icon: <IconClipboardCopy className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-500 dark:text-indigo-400" />, 
  },
  {
    title: "Hobbies",
    description:
      "I enjoy video games 🎮, learn new things, reading books 📖, playing football ⚽, and going to the gym 💪 and church ⛪.",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-1",
    icon: <IconSignature className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 dark:text-green-400" />, 
  },
  {
    title: "My Goals",
    description:
      "I strive to be a better software engineer 🚀, learn new tech, contribute to open-source 🤝, and build a happy life ❤️.",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-1",
    icon: <IconTableColumn className="h-8 w-8 sm:h-10 sm:w-10 text-red-500 dark:text-red-400" />, 
  },
  {
    title: "My Skills",
    description:
      "I am proficient in a variety of programming languages and technologies, including JavaScript, Python, PHP, Java, Kotlin, and more. Let's work on something together!",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-1 text-center",
    icon: <IconCode className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-gray-200" />, 
  }
];