import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" mx-auto flex flex-col z-0 items-center justify-center py-16 mt-20 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl ">

    <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-blue-200 via-blue-500 to-blue-800 ">
      <Badge className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
        <Sparkles className="w-6 h-6 mr-2 text-blue-600 animate-pulse" />
        <p className="text-base text-blue-600">Powered by AI</p>
      </Badge>
    </div>

    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-6 text-center my-12">
    Meet your Personalized AI Assistant
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Streamline your workflow
          </span>
        </h1>
  <h2 className="mx-auto max-w-2xl text-lg text-gray-400 mb-8">Get a beautiful summary reel of the document in seconds.</h2>
  <Button size={'lg'} className="rounded-full my-6 shadow-2xl shadow-blue-600"><Link href={'/summaryAI'} className="flex gap-2 items-center" >Try Brainwave Now
  <ArrowRight className="animate-pulse"/>
  </Link></Button>
</section>
  )
}

export default Hero
