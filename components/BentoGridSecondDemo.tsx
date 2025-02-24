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
            <div className="flex flex-col gap-2">
              {item.image && (
                <img
                  src={item.image}
                  alt={`${item.title} image`}
                  className="w-40 h-40 object-cover rounded-lg mx-auto block" // Centered with mx-auto and block
                />
              )}
              <TextGenerateEffect
                words={item.description}
                duration={2}
                filter={false}
                className="text-sm sm:text-base lg:text-lg leading-tight break-words p-2 overflow-hidden"
              />
            </div>
          }
          className={cn(
            "p-4 sm:p-6 rounded-2xl shadow-lg border-4 flex flex-col justify-between transition-colors",
            "text-black border-red-800 animate-glow",
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
      "Hello, my name is Ismael Montiel 😊. I’m a software engineer from Manzanillo, Colima, Mexico. I’m passionate about solving problems through code and creating impactful solutions. I love learning new things and exploring the world of technology!",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-2",
    icon: <IconClipboardCopy className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500 dark:text-yellow-400" />,
    image: "/programmer.png", // Assuming this path is correct
  },
  {
    title: "My Profession",
    description:
      "I am a software engineer 💻 specializing in web and mobile development. I enjoy building scalable applications and working with modern technologies like JavaScript, Python, and Kotlin.",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-1",
    icon: <IconClipboardCopy className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-500 dark:text-indigo-400" />,
  },
  {
    title: "Hobbies",
    description:
      "In my free time, I love playing video games 🎮, reading books 📖 (especially sci-fi and fantasy), and staying active by playing football ⚽ and going to the gym 💪. I also enjoy exploring new places and cultures ✈️.",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-1",
    icon: <IconSignature className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 dark:text-green-400" />,
  },
  {
    title: "My Goals",
    description:
      "My goals include becoming a better software engineer 🚀, contributing to open-source projects 🤝, and creating a positive impact through technology. I also strive to maintain a healthy work-life balance ❤️.",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-1",
    icon: <IconTableColumn className="h-8 w-8 sm:h-10 sm:w-10 text-red-500 dark:text-red-400" />,
  },
  {
    title: "My Skills",
    description:
      "I am proficient in JavaScript, Python, PHP, Java, Kotlin, and more. I’m always eager to learn new technologies and frameworks to stay ahead in the ever-evolving tech landscape.",
    className: "lg:col-span-2 sm:col-span-2 md:row-span-1 text-center",
    icon: <IconCode className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-gray-200" />,
  },
];