import { BackgroundBeamsWithCollisionDemo } from "@/components/background";
import { BentoGridDemo } from "@/components/BentoGridSecondDemo";
import { LampDemo } from "@/components/ui/lamp";
import { CarouselDemo } from "@/components/proyects"; // Ensure the file exists at this path
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <div className="relative w-full min-h-screen bg-black z-10 flex flex-col items-center justify-center overflow-hidden">
        <BackgroundBeamsWithCollisionDemo />
        <BentoGridDemo/>
        <LampDemo/>
        <CarouselDemo/>
        <ContactSection/>
      </div>
    </main>
  );
}