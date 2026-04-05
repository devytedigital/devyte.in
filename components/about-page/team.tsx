"use client";

import { motion } from "framer-motion";

const members = [
  {
    name: "Mohammed Shanif CC",
    role: "CEO & Web Developer",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1775384937/20260307_155651.jpg_belzur.jpg",
  },
  {
    name: "Jabeel Roshan P",
    role: "CMO & Flutter Developer",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1775385187/IMG_8376_tcohbj.jpg",
  },
  {
    name: "Fuhad Saneen",
    role: "COO & Digital Marketer",
    image:
      "https://i.pinimg.com/280x280_RS/e1/08/21/e10821c74b533d465ba888ea66daa30f.jpg",
  },
  {
    name: "Zidan Ali",
    role: "Graphic Designer",
    image:
      "https://i.pinimg.com/280x280_RS/e1/08/21/e10821c74b533d465ba888ea66daa30f.jpg",
  },
  {
    name: "Adinan VT",
    role: "Wordpress Developer",
    image:
      "https://i.pinimg.com/280x280_RS/e1/08/21/e10821c74b533d465ba888ea66daa30f.jpg",
  },
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
            A collective of creators, engineers, and strategists driven by
            precision.
          </motion.h3>
        </div>

        {/* Team Grid - High Density 5-Column Design - Centered Logic */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative flex flex-col items-center text-center w-full sm:w-[calc(45%-16px)] md:w-[calc(30%-24px)] lg:w-[calc(18%-32px)] min-w-[200px]"
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
