"use client";

import { motion } from "framer-motion";

export function AboutVision() {
  const sections = [
    {
      title: "Our Vision",
      content: "To be the partner behind growth — where every product we build helps the business grow, helps teams perform better, and creates opportunity for the people around it."
    },
    {
      title: "Our Mission",
      content: "To build reliable mobile apps and web applications with discipline — so businesses can launch, learn, improve, and scale without breaking."
    },
    {
      title: "Our Values",
      content: "We do the right work, the right way. Clear communication, high standards, and accountability — because we only win when our clients win."
    }
  ];

  return (
    <section className="bg-[#191816] text-white py-16 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left: Large Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tighter">
              Empowering Businesses <br /> 
              <span className="text-white/20">Growth for Everyone Involved</span>
            </h2>
          </motion.div>

          {/* Right: Vision/Mission/Values Stack */}
          <div className="space-y-12 md:space-y-16">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="space-y-4 md:space-y-6"
              >
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  {section.title}
                </h3>
                <p className="text-white/40 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
