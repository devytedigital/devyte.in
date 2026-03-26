"use client";

import { motion } from "framer-motion";

const members = [
  {
    name: "rahul chandran",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "sneha nair",
    role: "Technical Lead",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "arjun das",
    role: "Strategy & Operations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "priya sharma",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "vikram rathore",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

export function AboutTeam() {
  return (
    <section className="bg-[#191816] text-white py-24 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - 02 Our Team */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-40 pt-12 gap-8 md:gap-12">
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-3xl md:text-5xl font-normal leading-none tracking-tighter">
              02
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 whitespace-nowrap">
              Our team
            </span>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl lg:text-7xl font-normal leading-[1.1] tracking-tighter max-w-4xl md:text-right"
          >
            A collective of creators, engineers, and strategists driven by precision.
          </motion.h3>
        </div>

        {/* Team Grid - High Density 5-Column Design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-4">
           {members.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative flex flex-col items-center text-center"
              >
                 {/* Compact Square Image */}
                 <div className="relative w-full aspect-square overflow-hidden rounded-[2rem] bg-[#1c1c1c] mb-6 ring-1 ring-white/5 shadow-xl">
                    <img 
                       src={member.image} 
                       alt={member.name}
                       className="w-full h-full object-cover"
                    />
                 </div>
                 
                 {/* Minimalist Editorial Typography */}
                 <div className="flex flex-col space-y-2">
                    <h4 className="text-lg md:text-xl font-normal tracking-tight lowercase">
                       {member.name}
                    </h4>
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/30 font-light">
                       {member.role}
                    </p>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
