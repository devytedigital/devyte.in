"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Branding",
    description: "From logo creation to visual identity, we establish brand guidelines to help you grow and connect with your customers.",
  },
  {
    title: "UX and UI design",
    description: "We build beautiful and functional interfaces, to help craft the best user experiences for your target audience on both web and mobile.",
  },
  {
    title: "Design audit",
    description: "Find design improvement opportunities across your website, ecommerce, or app and get instantaneous solutions for better results.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-white text-black overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tighter"
          >
            Design services
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 md:mb-4"
          >
            <Link 
              href="/services" 
              className="text-sm md:text-base font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              View all design services
            </Link>
          </motion.div>
        </div>

        {/* Separator Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="w-full h-px bg-black/10 mb-20"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col group pt-8 border-t border-black/10 relative"
            >
              {/* Animated top border on hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500 ease-in-out" />
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              
              <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-[280px] md:max-w-full lg:max-w-[320px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
