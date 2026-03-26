"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="bg-[#191816] text-white py-32 md:py-64 relative overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Subtle Vertical Grid Background - Matching the bar chart aesthetic from the model */}
      <div className="absolute inset-0 flex justify-center items-end px-4 md:px-12 pointer-events-none opacity-[0.04]">
        {[40, 70, 50, 90, 60, 80, 45, 75, 55, 85, 35, 65].map((height, i) => (
          <div
            key={i}
            className="w-full border-x border-white/20 h-full flex flex-col justify-end"
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 2.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full bg-gradient-to-t from-white/20 to-transparent"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Narrative Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-lg md:text-2xl lg:text-3xl text-white/40 max-w-3xl mx-auto leading-relaxed font-sans font-light"
          >
            Devyte is a premier creative collective. We engineer high
            performance digital solutions that bridge the gap between bold
            vision and technical precision.
          </motion.p>

          {/* Small Navigation Push */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="pt-8 flex justify-center"
          >
            <Link
              href="/about"
              className="group flex flex-col items-center gap-2"
            >
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors duration-500">
                More about us
              </span>
              <div className="h-px bg-white/30 w-8 group-hover:w-16 group-hover:bg-white transition-all duration-700 ease-out" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom vignette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#191816] to-transparent pointer-events-none" />
    </section>
  );
}
