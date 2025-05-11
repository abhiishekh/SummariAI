"use client";

import React from "react";

const Features = () => {
  return (
    <section className="w-full bg-transparent text-gray-900 dark:text-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-center h-32 sm:h-36 lg:h-40 border border-stone-50/20  bg-white/5 dark:bg-white/5 hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
            >
              {/* Default Text */}
              <span className="text-lg font-medium z-10 transition-opacity duration-300 group-hover:opacity-0">
                Feature {i + 1}
              </span>

              {/* Hover Text */}
              <span className="absolute text-xl font-semibold text-white bg-blue-600 px-4 py-2 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Open
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
