"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Aura Skincare",
    text: "Digital Keddy transformed our online presence. Our conversion rates doubled within the first three months of launching the new site.",
  },
  {
    name: "Michael Chen",
    role: "Founder, FinTech Pro",
    text: "The level of design and technical expertise they brought to our app is unmatched. Truly a premium agency experience.",
  },
  {
    name: "Emma Watson",
    role: "Marketing Dir., EcoDrive",
    text: "Their performance marketing campaigns scaled our ROI by 300%. The team is responsive, strategic, and incredibly talented.",
  },
  {
    name: "David Smith",
    role: "Director, Neon Nights",
    text: "Visually stunning work. The GSAP animations and smooth scrolling they implemented made our event platform stand out globally.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Client <span className="text-primary italic">Success</span>
        </h2>
      </div>

      <div className="relative flex whitespace-nowrap group">
        {/* Gradient overlays to smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-8 px-4 w-max"
        >
          {/* Double the array for infinite scroll effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[400px] md:w-[500px] glass-dark p-8 rounded-3xl border border-white/10 flex-shrink-0 whitespace-normal"
            >
              <div className="flex gap-1 text-primary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-lg text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
