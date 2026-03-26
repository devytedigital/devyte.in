"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";

export function WorkGrid() {
  const [displayCount, setDisplayCount] = useState(6);

  const handleViewMore = () => {
    setDisplayCount((prev) => prev + 6);
  };

  const visibleProjects = projects.slice(0, displayCount);
  const hasMore = displayCount < projects.length;

  return (
    <section className="bg-[#191816] text-white pt-32 md:pt-48 pb-0 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Cinematic Header */}
        <div className="mb-48 md:mb-80 lg:mb-[50vh] max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-4 md:space-y-6"
          >
            <h1 className="text-7xl md:text-[8vw] lg:text-[10vw] font-normal tracking-tight leading-[0.85]  text-white pb-4">
              Our <br />
              <span className="text-white/20">Works</span>
            </h1>
            <p className="text-white/40 text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
              We create digital masterpieces. A gallery of high-performance
              solutions engineered for the visionaries of tomorrow.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Precise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-8 md:gap-y-12">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                {/* Image Container - Three's Company Model */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-[#1c1c1c] mb-6 shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Stacked Metadata - Adjusted for 3-Column density */}
                <div className="flex flex-col space-y-2 px-3">
                  <h3 className="text-lg md:text-xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed max-w-[95%]">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button - Minimal Editorial Model */}
        {hasMore && (
          <div className="mt-12 md:mt-20 flex justify-end">
            <button
              onClick={handleViewMore}
              className="group relative flex flex-col items-end gap-2 cursor-pointer"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 group-hover:text-white transition-colors">
                View More
              </span>
              <div className="w-12 md:w-16 h-px bg-white/10 group-hover:bg-white/40 group-hover:w-full transition-all duration-700 ease-out" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
