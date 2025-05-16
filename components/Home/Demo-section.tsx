import { SummaryViewer } from "@/app/components/summary/summary-vew";
import { Pizza } from "lucide-react";

export const summary = {
  summary_text: `# 🧠 Brainwave: Chat With Your Knowledge! 💬
. 🎯 Unlock instant understanding with AI-powered document interaction.
. 📌 Summarize, analyze, and learn faster than ever before.

# Document Details
. 🗎 Type: Application Overview
. 👥 For: Students, Researchers, Professionals

# Key Highlights
. 🚀 Intelligent Document Understanding: Upload PDFs, webpages, & notes for interactive learning.
. ⭐ Summary Reels: Get instant, engaging summaries of lengthy documents.
. 💫 AI Chat with Context: Converse with your content and get personalized, factual answers.

# Why It Matters
. 💡 Brainwave transforms static content into dynamic conversations, making learning and research more efficient and enjoyable. It allows users to grasp key insights from documents quickly, saving time and enhancing comprehension.

# Main Points
. 🎯 Chat with uploaded content for instant answers and summaries.
. 💪 Uses RAG architecture for accurate, context-aware responses.
. 🔥 Makes knowledge interactive and accessible to everyone.

# Pro Tips
. ⭐ Upload complex documents to quickly extract key insights.
. 💎 Use the chat feature to ask specific questions and deepen understanding.
. 🔥 Leverage summary reels to efficiently grasp the essence of long texts.

# Key Terms to Know
. 📚 RAG Architecture: Combines content retrieval and AI generation for precise answers.
. 🔎 Embeddings: Vector representations of text that enable contextual lookup.

# Bottom Line
. 💫 Brainwave is revolutionizing how we interact with knowledge, turning reading into an engaging conversation.`,
};

export default async function DemoSection() {
  return (
    <section className="relative  h-full w-full flex flex-col items-center justify-center ">
      <div className="pt-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center text-c
             space-y-4"
        >
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Pizza className="w-6 h-6 text-blue-500 " />
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold max-w-2xl mx-auto px-4 sm:px-6">
              Watch How Brainwave transforms this{" "}
              <span className=" bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Brainwave PDF{" "}
              </span>
              into an easy-to-read summary!
            </h3>
          </div>
         
        </div>
      </div>
       {/* // example summary card  */}
          <div className="flex justify-center items-center p-1">
            <SummaryViewer summary={summary.summary_text} />
          </div>
    </section>
  );
}
