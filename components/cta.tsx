"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section
      className="bg-[#191816] text-white py-12 md:py-24 lg:py-32 overflow-hidden relative"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-[100vw] lg:max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {/* Row 1: everyday [work pill] */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12 w-full">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] font-normal leading-none lowercase">
              everyday
            </h2>

            <div className="bg-[#fcd4d4] text-black px-6 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-6 md:py-10 lg:py-14 rounded-full inline-flex items-center justify-center   shadow-xl">
              <span className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-serif font-thin tracking-tight opacity-70 whitespace-nowrap">
                work — 2026
              </span>
            </div>
          </div>

          {/* Row 2: [design pill] ideas [arrow pill] */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12 w-full">
            <div className="bg-[#f27a54] text-black px-6 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-6 md:py-10 lg:py-14 rounded-full inline-flex items-center justify-center  shadow-xl">
              <span className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-serif font-thin tracking-tight whitespace-nowrap">
                digital growth
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] font-normal leading-none lowercase">
              ideas
            </h2>

            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-40 md:w-40 lg:w-40 lg:h-40 bg-[#34a853] rounded-full flex items-center justify-center   shadow-2xl">
              <ArrowDown
                className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
                strokeWidth={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
