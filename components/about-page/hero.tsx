"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="bg-[#191816] text-white pt-32 pb-16 md:pt-48 md:pb-32 min-h-[50vh] flex flex-col justify-end relative overflow-hidden">
      {/* Background Decorative Icon - Asterisk/Star */}
      <motion.div
        initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 360, scale: 1 }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 1.5, ease: "easeOut" }
        }}
        className="absolute right-4 bottom-2 md:right-[5%] md:bottom-[10%] opacity-40 md:opacity-20 z-0"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white w-12 h-12 md:w-48 md:h-48"
        >
          <path
            d="M50 0V100M14.6 14.6L85.4 85.4M0 50H100M14.6 85.4L85.4 14.6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[14vw] font-black leading-[0.8]  font-sans font-normal tracking-tighter"
          >
            Since 2026
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-base md:text-xl lg:text-2xl font-light text-white/50 leading-relaxed">
            We&#39;ve helped businesses achieve real growth by turning complex
            ideas into high-performing mobile apps and web applications —{" "}
            <br className="hidden md:block" />
            <span className="text-white">
              You bring the vision; we build the technology to scale it.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
