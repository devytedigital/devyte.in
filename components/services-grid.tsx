"use client";

import { motion } from "framer-motion";

const serviceCategories = [
  {
    category: "What We Build",
    items: [
      {
        title: "Marketing Website Development",
        description:
          "We craft high-converting marketing websites that are fast, SEO-optimized, and designed to turn visitors into customers.",
      },
      {
        title: "Web Applications",
        description:
          "We build scalable, high-performance web applications with clean architecture, seamless UX, and real-world business logic.",
      },
      {
        title: "Mobile Applications",
        description:
          "We develop intuitive, high-performance mobile apps with a focus on user experience, speed, and cross-platform reliability.",
      },
    ],
  },
  {
    category: "Growth & Optimization",
    items: [
      {
        title: "Search Engine Optimization",
        description:
          "Our technical SEO strategies ensure your website ranks higher and reaches the right audience through data-driven organic growth.",
      },
      {
        title: "GMB Profile Creation",
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
        description:
          "Creating strong brand identities with logo, visuals, and strategy",
      },
      {
        title: "UI/UX Design",
        description:
          "We design intuitive, user-focused interfaces that enhance usability, improve engagement, and deliver seamless digital experiences.",
      },
      {
        title: "Graphic Design",
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
                    className="group"
                  >
                    {/* Top Border Line - Matching the model */}
                    <div className="h-px bg-white/10 w-full mb-8 " />

                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-lg text-white/40 leading-relaxed font-sans font-light">
                        {service.description}
                      </p>
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
