import { BackgroundBeamsWithCollisionDemo } from "@/components/background";
import { BentoGridSecondDemo } from "@/components/BentoGridSecondDemo";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <div className="relative w-full min-h-screen bg-black z-10 flex flex-col items-center justify-center overflow-hidden">
        <BackgroundBeamsWithCollisionDemo />
        <BentoGridSecondDemo/>
      </div>
    </main>
  );
}