"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NOTES ON VISION",
    category: "12 IMAGES",
    image:
      "https://images.unsplash.com/photo-1542272201-98782a20b8f4?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "UNDESIGNATED",
    category: "08 IMAGES",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "FLORENCE",
    category: "23 IMAGES",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "COHERENCE",
    category: "15 IMAGES",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "WESTERN",
    category: "10 IMAGES",
    image:
      "https://images.unsplash.com/photo-1529139574466-a302d20525a9?q=80&w=2576&auto=format&fit=crop",
  },
];

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Ref for the scrolling container
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="work"
      className="py-20 bg-black text-white relative overflow-hidden min-h-screen flex flex-col justify-between"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex justify-between items-center relative z-10">
        <h2 className="text-sm font-medium tracking-widest uppercase text-white/50">
          Selected Works
        </h2>
        <div className="flex gap-4 md:hidden">
          {/* Mobile Nav Controls */}
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-12 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-[25vw] snap-center group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-900">
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold tracking-wider mb-2">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-white/50 tracking-widest uppercase font-medium">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
        {/* Spacer for right padding */}
        <div className="w-1 md:w-12 flex-shrink-0" />
      </div>

      {/* Footer / Navigation */}
      <div className="container mx-auto px-6 mt-12 md:mt-auto relative z-10 border-t border-white/10 pt-8 flex items-end justify-end">
        {/* Title & Controls */}
        <div className="text-right w-full md:w-auto flex flex-col items-end">
          <div className="hidden md:flex gap-4 mb-8">
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center group"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <h2 className="text-6xl md:text-9xl font-light tracking-tight uppercase leading-none md:-mb-4">
            WORKS
          </h2>
        </div>
      </div>
    </section>
  );
}
