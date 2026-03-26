"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1+", label: "Years of Building" },
  { value: "10+", label: "Quality Websites Delivered" },
  { value: "5+", label: "Mobile Apps Delivered" },
  { value: "100%", label: "Clients satisfied & retention" },
];

export function AboutSuccess() {
  return (
    <section className="bg-[#191816] text-white py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - 01 Success */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 pt-12 gap-8 md:gap-12">
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-3xl md:text-5xl font-normal leading-none tracking-tighter">
              01
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 whitespace-nowrap">
              Our success
            </span>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl lg:text-7xl font-normal leading-[1.1] tracking-tighter max-w-4xl md:text-right"
          >
            Our success is driven by innovation, operational excellence, and a
            strong commitment to our clients.
          </motion.h3>
        </div>

        {/* Stats Grid - High Density */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-12 mb-12 md:mb-20 pb-8 md:pb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col space-y-3 md:space-y-4"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter tabular-nums leading-none">
                {stat.value}
              </span>
              <p className="text-[9px] md:text-[10px] text-white/30 tracking-[0.3em] font-light leading-relaxed max-w-[220px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
