"use client";

import { motion } from "framer-motion";

const clientsRow1 = [
  { name: "ZEGO", style: "font-bold tracking-tighter" },
  { name: "sendinblue", style: "font-medium lowercase tracking-tight" },
  { name: "Loop", style: "font-serif italic" },
  { name: "exakt health", style: "font-semibold tracking-tight" },
  { name: "velobici", style: "font-serif font-light italic" },
];

const clientsRow2 = [
  { name: "HEAVYBIT", style: "font-black tracking-widest uppercase" },
  { name: "blotout", style: "font-normal lowercase" },
  { name: "LAK Gallery", style: "font-serif tracking-tighter" },
  { name: "Vantage", style: "font-bold tracking-tight" },
  { name: "Nova", style: "font-medium lowercase" },
];

export function Clients() {
  const duplicatedRow1 = [...clientsRow1, ...clientsRow1];
  const duplicatedRow2 = [...clientsRow2, ...clientsRow2];

  return (
    <section className="bg-[#191816] text-white pt-20 pb-32 lg:pb-48 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 px-1">
        {/* Cinematic Header Block */}
        <div className="scale-in-sm">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-normal tracking-tighter leading-none"
          >
            Clients
          </motion.h2>
        </div>
      </div>

      {/* Bi-Directional Multi-Row Marquee Container */}
      <div className="relative w-full flex flex-col gap-4 md:gap-8 group">
        {/* Global Edge-Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#191816] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#191816] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Moves Left */}
        <motion.div 
          className="flex gap-4 md:gap-8 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedRow1.map((client, index) => (
            <div
              key={index}
              className="w-48 md:w-64 lg:w-80 h-24 md:h-32 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0"
            >
              <span className={`text-sm md:text-base lg:text-lg text-white ${client.style}`}>
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Moves Right */}
        <motion.div 
          className="flex gap-4 md:gap-8 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedRow2.map((client, index) => (
            <div
              key={index}
              className="w-48 md:w-64 lg:w-80 h-24 md:h-32 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0"
            >
              <span className={`text-sm md:text-base lg:text-lg text-white ${client.style}`}>
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
