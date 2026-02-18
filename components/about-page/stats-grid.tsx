"use client";

import { motion } from "framer-motion";
import { Users, Building2, Calendar, Target } from "lucide-react";

export function AboutStats() {
  return (
    <section className="py-24 bg-[#E8ECEB] text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* 1. Large Team Image (Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-black rounded-3xl overflow-hidden relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Devyte Team"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 text-white z-10 w-full pr-16">
              <h3 className="text-3xl font-light mb-6">Our Leadership</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-lg">Alex Chen</h4>
                  <p className="text-white/60 text-xs uppercase tracking-wider">
                    Creative Director
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sarah Jenkins</h4>
                  <p className="text-white/60 text-xs uppercase tracking-wider">
                    Head of Strategy
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Marcus Tho</h4>
                  <p className="text-white/60 text-xs uppercase tracking-wider">
                    Lead Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Vertical Stat (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-white rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-5xl font-light mb-2">2B</h3>
              <p className="text-gray-500 font-medium">Users Reached</p>
              <p className="text-xs text-gray-400 mt-2">
                Worldwide impact across all managed platforms.
              </p>
            </div>
          </motion.div>

          {/* 3. Horizontal Stat (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 bg-[#D4D9D7] rounded-3xl p-8 flex items-end relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-6xl font-light mb-0 group-hover:-translate-y-2 transition-transform">
                365
              </h3>
              <p className="text-black/60 font-medium ml-1">Days of support</p>
            </div>
            <Calendar className="absolute top-8 right-8 w-8 h-8 opacity-20" />
          </motion.div>

          {/* 4. Small Stat Box (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center"
          >
            <Building2 className="w-8 h-8 mb-4 text-black/40" />
            <h3 className="text-2xl font-bold">88</h3>
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Projects
            </p>
          </motion.div>

          {/* 5. Date Box (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-[#BCC4C2] rounded-3xl p-8 relative"
          >
            <span className="absolute top-8 left-8 text-xs font-bold border border-black/20 px-2 py-1 rounded">
              EST.
            </span>
            <div className="absolute bottom-8 right-8 text-right">
              <h3 className="text-4xl font-bold">2026</h3>
              <p className="text-sm opacity-60">Year Founded</p>
            </div>
          </motion.div>

          {/* 6. Objectives List (Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-12 bg-black text-white rounded-3xl p-12 mt-6 grid md:grid-cols-3 gap-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-8">
                <Target className="w-3 h-3" /> The Opportunity
              </div>
              <h3 className="text-4xl font-light">
                Future <br /> Objectives
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-6">Pain Points</h4>
              {[
                "Limited Digital Presence",
                "Low User Engagement",
                "Poor Conversion Rates",
                "Outdated Brand Identity",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-6">Facts</h4>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-white/80">
                  "We aim to triple our partner network by 2027, establishing
                  Devyte as the premier digital architecture firm in the
                  region."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
