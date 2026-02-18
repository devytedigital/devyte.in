"use client";

import { motion } from "framer-motion";

export function AboutVision() {
  return (
    <section className="py-32 bg-black text-white relative isolate overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Number */}
        <div className="mb-20 border-b border-white/20 pb-8 flex justify-between items-end">
          <span className="text-sm font-medium tracking-widest uppercase text-white/50 bg-white/5 px-3 py-1 rounded-full">
            Section 1
          </span>
          <h2 className="text-9xl font-bold leading-none tracking-tighter opacity-20 select-none">
            01
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Title */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-light tracking-tight leading-none mb-6"
            >
              Vision & <br /> Mission
            </motion.h3>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-medium mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Our Vision
              </h4>
              <p className="text-2xl text-white/70 font-light leading-relaxed">
                To redefine the digital landscape by merging artistic expression
                with technical precision, creating online experiences that feel
                less like websites and more like destinations.
              </p>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div>
              <h4 className="text-xl font-medium mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                Our Mission
              </h4>
              <p className="text-lg text-white/50 leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas est lectus, pulvinar sit amet nisl eu, blandit. We
                strive to empower brands with tools that scale.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-24 border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-4xl md:text-5xl font-light mb-2">40+</h4>
            <p className="text-white/50 text-sm tracking-widest uppercase">
              Global Clients
            </p>
          </div>
          <div>
            <h4 className="text-4xl md:text-5xl font-light mb-2">150+</h4>
            <p className="text-white/50 text-sm tracking-widest uppercase">
              Successful Projects
            </p>
          </div>
          <div>
            <h4 className="text-4xl md:text-5xl font-light mb-2">5+</h4>
            <p className="text-white/50 text-sm tracking-widest uppercase">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
