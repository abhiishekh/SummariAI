// "use client";
// import { ArrowRight } from "lucide-react";
import Footer from "../common/Footer";
import Background from "./Background";
import DemoSection from "./Demo-section";
import { Features } from "./Features";
import RAGVideoSection from "./RAGVideoSection";

export async function HeroSection() {
  return (
    <div className="w-full bg-transparent z-10">
      <Background />
      <div className="relative mt-[-36px] w-[87%] md:w-[96%] bg-white dark:bg-black overflow-visible rounded-t-sm m-auto  border-l border-r border-stone-950/10 dark:border-stone-50/20 shadow-2xl shadow-black">
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.3),rgba(255,255,255,1))]
    dark:bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),rgba(0,0,0,1))]"
        />

        <DemoSection />
      </div>

      <div className="relative min-h-screen w-full bg-white dark:bg-black  overflow-hidden">
        <div
          className="bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.1),rgba(255,255,255,1))] 
              dark:bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),rgba(0,0,0,1))] 
              w-full h-full overflow-y-auto "
        >
          <div className=" mx-6 2xl:mx-9 border-l border-r border-stone-50/20  flex flex-col items-center justify-center py-12 ">
            <Features />
          </div>
        </div>
      </div>

      <RAGVideoSection />
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
