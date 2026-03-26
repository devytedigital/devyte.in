"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset form
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full"
    >
      {submitted ? (
        <div className="text-left py-20 pb-40">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl mb-4"
          >
            ✓
          </motion.div>
          <h3 className="text-3xl md:text-5xl font-normal tracking-tighter lowercase mb-4">message sent successfully</h3>
          <p className="text-xl md:text-2xl font-light text-white/50 lowercase">
            we will be in touch with you shortly.
          </p>
          <button
            className="mt-12 text-lg text-white/40 hover:text-white transition-colors underline underline-offset-8 lowercase"
            onClick={() => setSubmitted(false)}
          >
            send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.4em] text-white/30">your name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/10 py-3 text-lg md:text-xl font-light text-white focus:outline-none focus:border-white transition-colors"
                placeholder="What's your name?"
              />
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.4em] text-white/30">your email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/10 py-3 text-lg md:text-xl font-light text-white focus:outline-none focus:border-white transition-colors"
                placeholder="Your email address?"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.4em] text-white/30">inquiry type</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formState.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 py-3 text-lg md:text-xl font-light text-white focus:outline-none focus:border-white transition-colors"
              placeholder="What can we help you with?"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] uppercase tracking-[0.4em] text-white/30">your message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 py-3 text-lg md:text-xl font-light text-white focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Tell us about your project or vision..."
            />
          </div>

          <button
            type="submit"
            className="group relative flex items-center gap-6 pt-4 pb-2 md:pt-6 md:pb-4 w-fit cursor-pointer"
            disabled={isSubmitting}
          >
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <span className="text-base md:text-xl">→</span>
             </div>
             <span className="text-2xl md:text-3xl font-normal tracking-tighter lowercase group-hover:translate-x-4 transition-transform duration-500">
                {isSubmitting ? "Sending..." : "Send Message"}
             </span>
          </button>
        </form>
      )}
    </motion.div>
  );
}
