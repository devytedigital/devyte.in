"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919747659606";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:animate-ping -z-10" />

        <FaWhatsapp size={38} className="md:w-11 md:h-11" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 translate-x-2 group-hover:translate-x-0 transition-transform">
          Chat with us
        </span>
      </Link>
    </motion.div>
  );
}
