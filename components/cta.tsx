"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ctaImages = [
  "https://i.pinimg.com/1200x/05/fb/b3/05fbb34c9d10d17802c9bdb35460f4c4.jpg",
  "https://i.pinimg.com/736x/68/3e/a6/683ea6a7c01cdaf20d9570037b6c4c68.jpg",
  "https://i.pinimg.com/736x/a0/47/79/a04779de38f77093338cb4c9ca3d0952.jpg",
];

export function CTA() {
  const textRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.children;

      gsap.to(chars, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });
    }

    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);
  return (
    <section className="relative py-32 md:py-48 bg-[#EAE8E4] text-black overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Mixed Media Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
            <span>Constructing</span>

            {/* Inline Visual: Avatar Group Placeholder */}
            <span className="inline-flex -space-x-4 mx-4 align-middle">
              {ctaImages.map((image, i) => (
                <div
                  key={i}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/10 md:border-4 md:border-white/20 overflow-hidden bg-gray-900 shadow-2xl"
                >
                  <img
                    src={image}
                    alt={`Highlight ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </span>

            <span>Digital</span>
            <br />
            <span
              ref={textRef}
              className="font-serif italic font-light text-gray-500 inline-block overflow-hidden align-bottom"
            >
              {"Narratives".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block translate-y-full opacity-0"
                >
                  {char}
                </span>
              ))}
            </span>

            {/* Inline Visual: Icon/Graphic */}
            <span
              ref={arrowRef}
              className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 text-white mx-4 align-middle rotate-12"
            >
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
            </span>

            <span>That Scale.</span>
          </h2>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            We blend strategic insight with artistic direction to build brands
            that don't just exist, but resonate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
