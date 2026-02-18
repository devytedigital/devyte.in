"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 md:py-48 bg-gray-200 text-black overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Mixed Media Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
            <span>Constructing</span>

            {/* Inline Visual: Avatar Group Placeholder */}
            <span className="inline-flex -space-x-4 mx-4 align-middle">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-200 overflow-hidden bg-gray-300"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`}
                    alt="Avatar"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </span>

            <span>Digital</span>
            <br />
            <span className="font-serif italic font-light text-gray-500">
              Narratives
            </span>

            {/* Inline Visual: Icon/Graphic */}
            <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 text-white mx-4 align-middle rotate-12">
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
            </span>

            <span>That Scale.</span>
          </h2>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            We blend strategic insight with artistic direction to build brands
            that don't just exist, but resonate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
