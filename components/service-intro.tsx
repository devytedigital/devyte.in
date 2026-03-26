"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ServiceIntro() {
  return (
    <section className="bg-[#191816] text-white py-16 md:py-32 overflow-hidden relative min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col gap-16 md:gap-24">
        {/* Top Section - Main Heading */}
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl lg:text-7xl font-normal tracking-tighter leading-[1.05]"
          >
            we craft digital excellence <br />
            <span className="text-white/20">through design & code.</span>
          </motion.h2>
        </div>

        {/* Bottom Section - Description & Action */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-24">
          <div className="flex flex-col gap-8 md:text-right md:items-end w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl lg:text-2xl text-white/50 font-light leading-snug max-w-3xl md:ml-auto"
            >
              from high performance web and app development to strategic seo and
              gmb optimization, we build digital ecosystems. our expertise
              extends to bespoke graphic design and iconic branding, ensuring
              your brand stands unparalleled in a crowded digital landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full md:w-fit"
            >
              <Link
                href="/services"
                className="group flex items-center justify-between gap-4 bg-white text-black px-6 py-4 rounded-xl md:rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 border border-white/10 w-full md:w-fit"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-white transition-colors" />
                  <span className="text-sm font-bold tracking-tight uppercase">
                    View all services
                  </span>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:translate-x-1 -rotate-45 transition-transform duration-300"
                >
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
