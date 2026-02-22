"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects as allProjects } from "@/lib/projects";

// Only show first 3 projects on home page
const projects = allProjects.slice(0, 3);

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling logic for mobile
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth - 10
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 3000);
    };

    // Only auto-scroll on small screens (mobile/tablet)
    const handleResize = () => {
      clearInterval(intervalId);
      if (window.innerWidth < 768) {
        startAutoScroll();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      className="py-20 bg-black text-white relative overflow-hidden min-h-screen flex flex-col justify-between"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex justify-between items-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-sm font-medium tracking-widest uppercase text-white/50"
        >
          Selected Works
        </motion.h2>
      </div>

      {/* Cinematic Grid for Home Page (3 Projects) */}
      <div className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col space-y-6"
            >
              <Link href="/work" className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col space-y-1 mt-6">
                  <h3 className="text-lg md:text-xl font-medium tracking-widest uppercase transition-colors duration-300 group-hover:text-zinc-400">
                    {project.title}
                  </h3>
                  {project.category && (
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-light">
                      {project.category}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / Navigation */}
      <div className="container mx-auto px-6 mt-12 md:mt-auto relative z-10 border-t border-white/10 pt-8 flex items-end justify-end">
        {/* Title & Controls */}
        <div className="text-right w-full md:w-auto flex flex-col items-end">
          <Link href="/work" className="group/works">
            <h2 className="text-7xl md:text-9xl font-light tracking-tight uppercase leading-none md:-mb-4 transition-colors duration-500 group-hover/works:text-blue-500">
              WORKS
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
