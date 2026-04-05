"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Smartphone,
  Search,
  MapPin,
  Palette,
  Layers,
  Monitor,
} from "lucide-react";

const serviceCategories = [
  {
    category: "What We Build",
    items: [
      {
        title: "Marketing Website Development",
        icon: Globe,
        bgImage:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        description:
          "We craft high-converting marketing websites that are fast, SEO-optimized, and designed to turn visitors into customers.",
      },
      {
        title: "Web Applications",
        icon: Code2,
        bgImage:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
        description:
          "We build scalable, high-performance web applications with clean architecture, seamless UX, and real-world business logic.",
      },
      {
        title: "Mobile Applications",
        icon: Smartphone,
        bgImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
        description:
          "We develop intuitive, high-performance mobile apps with a focus on user experience, speed, and cross-platform reliability.",
      },
    ],
  },
  {
    category: "Growth & Optimization",
    items: [
      {
        title: "SEO Service",
        icon: Search,
        bgImage:
          "https://i.pinimg.com/1200x/c6/5f/ac/c65facfb40e09748ba750102fe97a986.jpg",
        description:
          "Our technical SEO strategies ensure your website ranks higher and reaches the right audience through data-driven organic growth.",
      },
      {
        title: "Meta Ads",
        icon: MapPin,
        bgImage:
          "https://i.pinimg.com/736x/54/6c/66/546c6694a58259a264274435cd3494f9.jpg",
        description:
          "We help brands establish and optimize their Google My Business presence to dominate local search and build customer trust.",
      },
    ],
  },
  {
    category: "Design Services",
    items: [
      {
        title: "Branding & Logo Design",
        icon: Palette,
        bgImage:
          "https://i.pinimg.com/1200x/12/98/f3/1298f340a9ba87341a0ea327ccff959b.jpg",
        description:
          "Creating strong brand identities with logo, visuals, and strategy",
      },
      {
        title: "UI/UX Design",
        icon: Layers,
        bgImage:
          "https://i.pinimg.com/1200x/47/2e/82/472e82cc0e3cc087d28c88a4e8575f60.jpg",
        description:
          "We design intuitive, user-focused interfaces that enhance usability, improve engagement, and deliver seamless digital experiences.",
      },
      {
        title: "Graphic Design",
        icon: Monitor,
        bgImage:
          "https://i.pinimg.com/1200x/73/93/eb/7393eb7dfac49ec578cfb44a3a8c6a62.jpg",
        description:
          "We create high-impact visual assets for digital platforms, ensuring consistency and strong brand presence across all touchpoints.",
      },
    ],
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-[#191816] text-white pt-32 pb-48 md:pt-48 md:pb-64">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Page Heading - Premium Editorial Design */}
        <div className="mb-48 md:mb-80 lg:mb-[40vh] max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-4 md:space-y-6"
          >
            <h1 className="text-7xl md:text-[8vw] lg:text-[10vw] font-normal tracking-tight leading-[0.85] text-white pb-4">
              Our <br />
              <span className="text-white/20">Services</span>
            </h1>
            <p className="text-white/40 text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
              We architect high-performance digital ecosystems. Engineering
              solutions that define industries through precision and design.
            </p>
          </motion.div>
        </div>

        {/* Categories Loop */}
        <div className="space-y-32 md:space-y-48">
          {serviceCategories.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-12 md:space-y-20">
              {/* Category Header */}
              <div className="flex justify-between items-end  pb-8">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl lg:text-6xl tracking-tight"
                >
                  {group.category}
                </motion.h2>
              </div>

              {/* Items Grid for this Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {group.items.map((service, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-blue-500/50"
                  >
                    {/* Background Image Reveal */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition-all duration-1000 ease-[0.22,1,0.36,1] z-0 scale-105 group-hover:scale-100 will-change-transform"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[0.22,1,0.36,1] z-0" />

                    {/* Blue Decorative Blob */}
                    <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-600 rounded-full blur-[40px] opacity-0 group-hover:opacity-80 transition-opacity duration-700 z-0" />

                    {/* Content */}
                    <div className="relative z-10 p-10 md:p-12 space-y-8 h-full flex flex-col">
                      <div className="text-white/40 group-hover:text-white transition-colors duration-500">
                        <service.icon className="w-10 h-10 md:w-12 md:h-12" />
                      </div>

                      <div className="space-y-4 flex-grow">
                        <h3 className="text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-blue-400 transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-lg text-white/40 leading-relaxed font-sans font-light group-hover:text-white/80 transition-colors duration-500">
                          {service.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
