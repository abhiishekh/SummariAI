// "use client";
// import { ArrowRight } from "lucide-react";
import Background from "./Background";
import DemoSection from "./Demo-section";
import Features from "./Features";

export async function HeroSection() {
  return (
    <div className="w-full bg-transparent z-10">
      <Background />
      <div className="relative mt-[-36px] w-[96%] h-[80vh] bg-white dark:bg-black overflow-hidden rounded-sm m-auto p-3 border-l border-r border-stone-950/10 dark:border-stone-50/20 shadow-2xl shadow-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.3),rgba(255,255,255,1))]

  dark:bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),rgba(0,0,0,1))]">
          <DemoSection />
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black border-stone-950/10 dark:border-stone-50/20 border-t">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.1),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),rgba(0,0,0,1))]" >
        <Features/>
        </div>
        
      </div>
    </div>
  );
}
