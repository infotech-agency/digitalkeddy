"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "M+", label: "Ad Spend Managed" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 24, suffix: "/7", label: "Dedicated Support" },
];

export const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const numbers = gsap.utils.toArray(".stat-number");
    
    numbers.forEach((num: any) => {
      const target = parseInt(num.getAttribute("data-value"));
      
      gsap.to(num, {
        innerHTML: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        snap: { innerHTML: 1 },
        onUpdate: function() {
          num.innerHTML = Math.round(this.targets()[0].innerHTML);
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="flex items-baseline mb-2 text-white">
                <span 
                  className="stat-number font-heading text-5xl md:text-7xl font-bold text-glow"
                  data-value={stat.value}
                >
                  0
                </span>
                <span className="text-3xl md:text-5xl font-bold text-primary ml-1">{stat.suffix}</span>
              </div>
              <p className="text-white/60 font-medium tracking-wide uppercase text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
