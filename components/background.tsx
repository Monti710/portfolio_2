"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Detectar el zoom cuando cambia el tamaño de la ventana
  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = window.devicePixelRatio * 100;
      setIsZoomed(zoomLevel > 200);
    };

    checkZoom();
    window.addEventListener("resize", checkZoom);
    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  return (
    <BackgroundBeamsWithCollision className="relative top-0 left-0 w-full h-full z-0 bg-black">
      <div className="relative z-10 flex flex-col items-center justify-center p-0">
        <div
          className="relative w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 cursor-pointer"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <Image
                src="/front-image.jpg"
                alt=""
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <Image
                src="/back-image.jpeg"
                alt=""
                layout="fill"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight mt-6">
          I&apos;m Ismael Montiel
          <br />
          <span className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500  text-4xl md:text-5xl lg:text-6xl font-bold">
              Software Engineer
            </span>
            <p className="relative text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center text-white tracking-wider">
              Hi! I&apos;m Ismael, a <span className="font-semibold text-purple-400">Web Developer</span> based in Mexico 🇲🇽
            </p>
          </span>
        </h2>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 z-20 ${isZoomed ? 'hidden' : ''}`}>
        <div className="w-full flex justify-center p-0">
          <div className="relative w-32 h-32 animate-dinosaur">
            <Image
              src="/dinosaur.gif"
              alt="Flipped Dinosaur"
              layout="fill"
              unoptimized
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dinosaurMove {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .animate-dinosaur {
          animation: dinosaurMove 10s linear infinite;
        }
      `}</style>
    </BackgroundBeamsWithCollision>
  );
}