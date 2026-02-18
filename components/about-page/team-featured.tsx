"use client";

import { motion } from "framer-motion";
import { Maximize2, Sparkles, LayoutGrid } from "lucide-react";

export function TeamFeatured() {
  return (
    <section className="py-24 bg-gray-200 text-black">
      <div className="container mx-auto px-6">
        {/* Header Row */}
        <div className="flex justify-between items-end border-b border-black/10 pb-6 mb-12">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold">002</span>
            <span className="text-xl font-medium">Team Philosophy</span>
          </div>
          <div className="hidden md:block text-sm uppercase tracking-widest text-black/50">
            Info
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Image - 8 Cols */}
          <div className="lg:col-span-8 relative group cursor-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden bg-gray-100"
            >
              <img
                src="https://i.pinimg.com/1200x/0d/b9/4b/0db94bc168356b631560be4afbfecafb.jpg"
                alt="Team Philosophy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </motion.div>
          </div>

          {/* Right Text - 4 Cols */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-light mb-8 leading-tight">
                Cultivating Excellence Through{" "}
                <span className="font-serif italic font-normal">
                  Restraint.
                </span>
              </h3>

              <p className="text-black/60 leading-relaxed mb-12">
                Our team is defined not by how much we produce, but by the
                relentless quality of every detail. We believe that true digital
                elegance emerges from silence and sculptural contrast—where
                every pixel serves a deliberate purpose.
              </p>
            </motion.div>

            {/* Services/Details List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-4 text-sm font-medium uppercase tracking-widest text-black/40">
                Core Disciplines
              </div>
              <ul className="space-y-2 text-sm font-medium border-l border-black/10 pl-6 mb-12">
                <li>Strategic Design Systems</li>
                <li>Technical Architecture</li>
                <li>User-Centric Innovation</li>
                <li>Performance Optimization</li>
                <li>Global Scalability</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
