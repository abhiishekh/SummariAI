'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function RAGVideoSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="relative h-auto w-full bg-white dark:bg-black px-6 overflow-hidden flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-6 mt-20">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl lg:text-4xl 2xl:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Don&apos;t Know what RAG is? <br />
          </span>
          <span className="text-blue-500 dark:text-blue-400 text-xl">
            No Worries
          </span>
        </h1>

        {!playVideo ? (
          <div
            className="relative w-full max-w-3xl cursor-pointer border border-stone-50/20 rounded-2xl"
            onClick={() => setPlayVideo(true)}
          >
            <Image
              src="https://img.youtube.com/vi/T-D1OfcDW1M/maxresdefault.jpg"
              alt="RAG Video Thumbnail"
              className="w-full rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/T-D1OfcDW1M?autoplay=1&mute=1&rel=0"
              title="What is RAG?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
