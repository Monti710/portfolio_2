import { BackgroundBeamsWithCollisionDemo } from "@/components/background";
import { BentoGridDemo } from "@/components/BentoGridSecondDemo";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <div className="relative w-full min-h-screen bg-black z-10 flex flex-col items-center justify-center overflow-hidden">
        <BackgroundBeamsWithCollisionDemo />
        <BentoGridDemo/>
      </div>
    </main>
  );
}