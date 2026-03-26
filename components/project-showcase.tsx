"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectShowcase() {
  // Showing 3 high-impact projects
  const showcaseProjects = projects.slice(0, 3);

  return (
    <section className="bg-[#191816] text-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-row justify-between items-end mb-8 md:mb-12 gap-4">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl tracking-tighter"
            >
              Selected <br /> <span className="text-white/20">Work</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover="hover"
            viewport={{ once: true }}
          >
            <Link
              href="/work"
              className="relative text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors whitespace-nowrap block"
            >
              <span>View all</span>
              <motion.div
                initial={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                transition={{ duration: 0.3 }}
                className="h-px w-full mt-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <Link href="/work" className="block group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 mb-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                </div>

                <div className="flex flex-col space-y-2 mt-4 px-1">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-[95%]">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
