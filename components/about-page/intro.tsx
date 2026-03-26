"use client";

import { motion } from "framer-motion";

export function AboutIntro() {
  return (
    <section className="bg-[#191816] text-white pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* 01 Block - Top Narrative Grid */}
        <div className="flex justify-between items-start mb-24 md:mb-40 border-t border-white/5 pt-8">
           <div className="flex items-start gap-4">
              <span className="text-6xl md:text-[8vw] font-normal leading-none tracking-tighter">01</span>
              <div className="pt-2 md:pt-4">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 block">About us</span>
              </div>
           </div>
           <div className="max-w-[150px] md:max-w-[220px]">
             <p className="text-[10px] md:text-xs text-white/30 text-right leading-relaxed uppercase tracking-[0.2em] font-light">
               Let&#39;s create a space that&#39;s not just beautiful — but beautifully yours.
             </p>
           </div>
        </div>

        {/* Large Statement */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-[7vw] font-normal tracking-tight leading-[0.95] mb-20 md:mb-32 max-w-5xl"
        >
           Design with purpose. <br /> style with heart.
        </motion.h2>

        {/* Dual-Column Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 mb-24 md:mb-48 font-light text-white/40 text-sm md:text-base leading-relaxed max-w-6xl">
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.1 }}
           >
             At Devyte, we believe that great design goes beyond aesthetics — it should tell your story, support your lifestyle, and inspire daily living with precision and intent.
           </motion.p>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
             Our team blends creativity with technical mastery to craft digital spaces that feel as good as they function. From initial concepts to the final styling, we&#39;re with you every step of the journey.
           </motion.p>
        </div>

        {/* Asymmetric Image Composition */}
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start px-1">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="col-span-12 md:col-span-7"
           >
               <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-[#1c1c1c]">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                    alt="Workspace Concept 01"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
               </div>
               <span className="block mt-6 text-[9px] md:text-[11px] text-white/20 uppercase tracking-[0.3em]">Devyte.In — 001</span>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="col-span-12 md:col-span-5 md:pt-48"
           >
               <div className="relative aspect-square overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-[#1c1c1c]">
                  <img 
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                    alt="Workspace Detail 02"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
               </div>
               <span className="block mt-6 text-[9px] md:text-[11px] text-white/20 uppercase tracking-[0.3em]">Devyte.In — 002</span>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
