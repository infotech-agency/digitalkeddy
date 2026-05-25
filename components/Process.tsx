// "use client";
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const STEPS = [
//   { id: "01", title: "Discovery", description: "Deep dive into your brand, audience, and goals to uncover unique opportunities." },
//   { id: "02", title: "Strategy", description: "Crafting a data-driven roadmap to ensure maximum impact and sustainable growth." },
//   { id: "03", title: "Design", description: "Creating stunning, user-centric interfaces that captivate and convert." },
//   { id: "04", title: "Growth", description: "Executing targeted campaigns and continuous optimization to scale your business." },
// ];

// export const Process = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const steps = gsap.utils.toArray(".process-step");
    
//     steps.forEach((step: any, i) => {
//       gsap.fromTo(
//         step,
//         { opacity: 0, x: -50 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: step,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     // Timeline line fill animation
//     gsap.fromTo(
//       ".process-line-fill",
//       { height: "0%" },
//       {
//         height: "100%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".process-line-container",
//           start: "top 50%",
//           end: "bottom 50%",
//           scrub: true,
//         },
//       }
//     );
//   }, { scope: containerRef });

//   return (
//     <section id="process" ref={containerRef} className="py-32 bg-black relative">
//       <div className="container mx-auto px-6 max-w-4xl">
//         <div className="text-center mb-24">
//           <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
//             Our Proven <span className="text-primary italic">Process</span>
//           </h2>
//           <p className="text-white/60 text-lg">
//             A systematic approach to turning visions into digital realities.
//           </p>
//         </div>

//         <div className="relative process-line-container">
//           {/* Vertical Line */}
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
//             <div className="process-line-fill w-full bg-gradient-to-b from-primary to-blue-600 rounded-full" />
//           </div>

//           <div className="space-y-24">
//             {STEPS.map((step, idx) => {
//               const isEven = idx % 2 === 0;
//               return (
//                 <div key={idx} className={`process-step relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
//                   {/* Content */}
//                   <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
//                     <div className="bg-zinc-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors">
//                       <div className="text-primary font-heading font-bold text-6xl opacity-20 absolute -top-6 -left-4 md:static md:opacity-100 md:text-4xl md:mb-4">
//                         {step.id}
//                       </div>
//                       <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
//                       <p className="text-white/60 leading-relaxed">{step.description}</p>
//                     </div>
//                   </div>

//                   {/* Dot */}
//                   <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-black border-4 border-primary rounded-full -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(255,43,43,0.5)] z-10">
//                     <div className="w-2 h-2 bg-white rounded-full" />
//                   </div>

//                   {/* Empty space for alignment */}
//                   <div className="hidden md:block w-1/2" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client"

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
`;

const STEPS = [
  {
    id: "01", title: "Discovery", tag: "Phase 1", icon: "🔍",
    accent: "#818cf8", glow: "rgba(129,140,248,0.15)",
    description: "Deep dive into your brand, audience, and goals to uncover unique opportunities that set you apart.",
  },
  {
    id: "02", title: "Strategy", tag: "Phase 2", icon: "⚡",
    accent: "#c084fc", glow: "rgba(192,132,252,0.15)",
    description: "Crafting a data-driven roadmap to ensure maximum impact and sustainable growth over the long term.",
  },
  {
    id: "03", title: "Design", tag: "Phase 3", icon: "✦",
    accent: "#f472b6", glow: "rgba(244,114,182,0.15)",
    description: "Creating stunning, user-centric interfaces that captivate users and convert visitors into loyal customers.",
  },
  {
    id: "04", title: "Growth", tag: "Phase 4", icon: "↑",
    accent: "#818cf8", glow: "rgba(129,140,248,0.15)",
    description: "Executing targeted campaigns and continuous optimization to scale your business exponentially.",
  },
];

function StepCard({ step, idx }: { step: typeof STEPS[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const isEven = idx % 2 === 0;

  return (
    <div ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>

      {/* Card */}
      <motion.div
        className={`w-full md:w-[calc(50%-3rem)] ${isEven ? "md:pr-10 md:text-right" : "md:pl-10"}`}
        initial={{ opacity: 0, x: isEven ? -48 : 48 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="relative p-7 rounded-2xl overflow-hidden group"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}>

          {/* Top sheen */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${step.accent}60, transparent)` }} />

          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, ${step.glow} 0%, transparent 70%)` }} />

          {/* Tag + number */}
          <div className={`flex items-center gap-3 mb-5 ${isEven ? "md:flex-row-reverse md:justify-start" : ""}`}>
            <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full"
              style={{ background: `${step.accent}18`, border: `1px solid ${step.accent}35`,
                color: step.accent, letterSpacing: "0.15em" }}>
              {step.tag}
            </span>
            <span className="font-bold"
              style={{ fontSize: "2.8rem", lineHeight: 1, letterSpacing: "-0.05em",
                background: `linear-gradient(135deg, ${step.accent}40 0%, ${step.accent}10 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {step.id}
            </span>
          </div>

          <h3 className="mb-3"
            style={{ fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.03em",
              color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {step.title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.42)", lineHeight: 1.75, fontSize: "0.9rem", fontWeight: 300 }}>
            {step.description}
          </p>

          <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ border: `1px solid ${step.accent}28` }} />
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="relative z-10 flex-shrink-0 mx-4 hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="w-14 h-14 rounded-full flex items-center justify-center relative"
          style={{ background: "rgba(10,10,16,0.9)", border: `2px solid ${step.accent}60`,
            boxShadow: `0 0 24px ${step.glow}, 0 0 0 6px rgba(10,10,16,0.6)` }}>
          <span style={{ fontSize: "1.4rem" }}>{step.icon}</span>
          <motion.div className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${step.accent}40` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </div>

      <div className="hidden md:block w-[calc(50%-3rem)]" />
    </div>
  );
}

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
      style={{ background: "rgba(255,255,255,0.06)" }}>
      <motion.div className="absolute top-0 left-0 right-0 origin-top" style={{ scaleY, height: "100%",
        background: "linear-gradient(to bottom, #818cf8, #c084fc 50%, #f472b6)" }} />
    </div>
  );
}

export const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5% 0px" });

  return (
    <>
      <style>{fontStyle}</style>
      <section id="process" ref={sectionRef} className="py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #040406 0%, #0a0a10 50%, #060610 100%)",
          fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

        {/* Ambient orbs */}
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">

          {/* Header */}
          <motion.div className="text-center mb-24"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}>
              <span className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#818cf8", boxShadow: "0 0 8px #818cf8" }} />
              <span className="text-xs font-semibold uppercase"
                style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em" }}>
                How We Work
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.08,
              fontWeight: 800, letterSpacing: "-0.03em", color: "#fff",
              fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Our Proven{" "}
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic", fontWeight: 800,
                background: "linear-gradient(135deg, #818cf8 0%, #c084fc 45%, #f472b6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Process
              </span>
            </h2>

            <p className="mt-5 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.38)", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}>
              A systematic approach to turning visions into digital realities — step by step.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <TimelineLine />
            <div className="flex flex-col gap-16">
              {STEPS.map((step, idx) => <StepCard key={idx} step={step} idx={idx} />)}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div className="text-center mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(14px)" }}>
              <div>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.01em" }}>
                  Ready to start your journey?
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", marginTop: "2px" }}>
                  Let's build something that dominates.
                </p>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl font-semibold text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 55%, #ec4899 100%)",
                  color: "#fff", letterSpacing: "0.01em",
                  boxShadow: "0 0 30px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.15)" }}>
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Process;