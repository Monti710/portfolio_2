"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundBeamsWithCollisionDemo } from "@/components/background";
import { BentoGridDemo } from "@/components/BentoGridSecondDemo";

// Componente LampDemo
export function LampDemo() {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-black w-full z-10"
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Gradiente izquierdo */}
        <motion.div
          initial={{ opacity: 0.6, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[20rem] md:w-[28rem] bg-gradient-conic from-purple-800 via-purple-500 to-purple-300 text-white [--conic-position:from_70deg_at_center_top] opacity-80"
        >
          <div className="absolute w-[100%] left-0 bg-black h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-36 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Gradiente derecho */}
        <motion.div
          initial={{ opacity: 0.6, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[20rem] md:w-[28rem] bg-gradient-conic from-purple-300 via-purple-500 to-purple-800 text-white [--conic-position:from_290deg_at_center_top] opacity-80"
        >
          <div className="absolute w-36 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Efectos de fondo */}
        <div className="absolute top-1/2 h-48 w-full translate-y-8 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[20rem] md:w-[26rem] -translate-y-1/2 rounded-full bg-purple-800 opacity-40 blur-3xl"></div>

        {/* Círculo morado */}
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-32 md:w-64 -translate-y-[4rem] rounded-full bg-purple-500 blur-2xl opacity-60"
        ></motion.div>

        {/* Línea morada */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[20rem] md:w-[28rem] -translate-y-[5rem] bg-purple-400 opacity-80"
        ></motion.div>

        {/* Fondo inferior */}
        <div className="relative inset-auto z-40 h-44 w-full -translate-y-[10rem] bg-black"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-50 flex flex-col items-center px-5 -mt-20 md:-mt-28">
        <motion.h1
          initial={{ opacity: 0.7, y: 0 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mt-2 bg-gradient-to-br text-white py-4 bg-clip-text text-center text-4xl font-bold tracking-tighter text-transparent md:text-7xl font-sans opacity-70"
        >
          Projects
        </motion.h1>
      </div>
    </div>
  );
}

// Componente Home
export default function Home() {
  return (
    <main className="relative flex flex-col w-full bg-black overflow-hidden">
      <div className="relative w-full bg-black z-10 flex flex-col items-center justify-start">
        <BackgroundBeamsWithCollisionDemo />
        <LampDemo />
        <div className="mt-16">
          <BentoGridDemo />
        </div>
      </div>
    </main>
  );
}
