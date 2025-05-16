import {
  ChatBubbleIcon,
  FileTextIcon,
  LightningBoltIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import VideoComponent from "../common/VideoComponent";
import Image from "next/image";
import { Ripple } from "../magicui/ripple";
import { RagBeam } from "./RagBeam";
import Summary from '@/public/images/summary.png'


type Feature = {
  Icon: React.ElementType;
  name: string;
  description: string;
  Visual?: React.ReactNode;
};

const features: Feature[] = [
 {
  Icon: ChatBubbleIcon,
  name: "LLM Chat",
  description: "Chat with powerful language models in natural language.",
  Visual: <VideoComponent video="/videos/LLMchat.mp4" />,
},
  {
    Icon: LightningBoltIcon,
    name: "RAG ",
    description: "Context-aware chat using your own documents with RAG.",
    Visual: (
<RagBeam/>
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Document Summary",
    description: "Quickly summarize long documents using AI.",
    Visual: (
      // <OrbitingCircles radius={100} reverse>
        <Image src={Summary} alt="summary image" className="rounded-full" />
      // </OrbitingCircles>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Real-time Data",
    description: "Collaborate instantly with AI in real-time sessions.",
    Visual: (
      
      <div className="relative h-full w-full flex items-center justify-center">
  <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center">
    <p className="absolute z-10 text-4xl font-medium tracking-tighter text-white">
      Brainwave
    </p>
    <Ripple />
  </div>
</div>

    ),
  },
];

export function Features() {
  return (
   <div className="">
  <div className="grid grid-cols-1 md:grid-cols-2  px-4 md:px-6 max-w-6xl mx-auto">
    {features.map((feature) => (
      <div
        key={feature.name}
        className="relative overflow-hidden bg-white dark:bg-black p-6 border  border-stone-50/20 "
      >
        {/* Visual */}
        <div className="relative h-auto md:h-[300px] w-full flex items-center justify-center mb-4">
          {feature.Visual}
        </div>

        {/* Feature Info */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <feature.Icon className="h-6 w-6 text-blue-500" />
          <h3 className="text-xl font-semibold text-black dark:text-white">
            {feature.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md">
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
