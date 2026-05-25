// "use client";
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, useScroll, useTransform } from "framer-motion";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export const About = () => {
//   const container = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container.current,
//         start: "top 80%",
//         end: "bottom top",
//         toggleActions: "play none none reverse",
//       },
//     });

//     tl.fromTo(
//       ".about-heading",
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
//     )
//     .fromTo(
//       ".about-text",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
//       "-=0.4"
//     )
//     .fromTo(
//       ".about-stat",
//       { opacity: 0, scale: 0.9 },
//       { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
//       "-=0.4"
//     );

//     // Image reveal
//     gsap.fromTo(
//       imageRef.current,
//       { clipPath: "inset(100% 0 0 0)" },
//       { 
//         clipPath: "inset(0% 0 0 0)", 
//         duration: 1.5, 
//         ease: "power4.inOut",
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 85%",
//         }
//       }
//     );

//   }, { scope: container });

//   return (
//     <section id="about" ref={container} className="py-32 relative bg-black">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left Content */}
//           <div className="order-2 lg:order-1">
//             <h2 className="about-heading font-heading text-4xl md:text-5xl font-bold mb-8">
//               Redefining <span className="text-primary italic">Digital</span> Excellence
//             </h2>
            
//             <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
//               <p className="about-text">
//                 At Digital Keddy, we don't just build websites; we craft digital ecosystems designed to scale. Our team of visionaries merges cutting-edge technology with stunning aesthetics.
//               </p>
//               <p className="about-text">
//                 From pixel-perfect UI/UX to high-converting performance marketing, our data-driven approach ensures your brand doesn't just compete—it dominates.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
//               <div className="about-stat border-l-2 border-primary pl-4">
//                 <div className="text-3xl font-heading font-bold text-white mb-1">50+</div>
//                 <div className="text-sm text-white/50 uppercase tracking-wider">Projects</div>
//               </div>
//               <div className="about-stat border-l-2 border-primary pl-4">
//                 <div className="text-3xl font-heading font-bold text-white mb-1">98%</div>
//                 <div className="text-sm text-white/50 uppercase tracking-wider">Client Return</div>
//               </div>
//               <div className="about-stat border-l-2 border-primary pl-4">
//                 <div className="text-3xl font-heading font-bold text-white mb-1">10+</div>
//                 <div className="text-sm text-white/50 uppercase tracking-wider">Awards</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="order-1 lg:order-2 h-[500px] lg:h-[600px] relative overflow-hidden rounded-2xl">
//             <div ref={imageRef} className="absolute inset-0 w-full h-full bg-zinc-900 rounded-2xl overflow-hidden">
//               <motion.img 
//                 style={{ y }}
//                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
//                 alt="Agency Team"
//                 className="w-full h-[120%] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
//               />
//               <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

"use client"


import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
`;

const STATS = [
  { num: "50+", label: "Projects Delivered" },
  { num: "98%", label: "Client Return Rate" },
  { num: "10+", label: "Industry Awards" },
];

const fadeUp = (delay = 0) => ({
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-5% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      <style>{fontStyle}</style>
      <section
        id="about"
        ref={containerRef}
        className="py-32 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #040406 0%, #0a0a10 50%, #060610 100%)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Ambient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)", filter: "blur(50px)" }} />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left Content ── */}
            <div className="order-2 lg:order-1">

              {/* Eyebrow */}
              <motion.div
                initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0)}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}
              >
                <Sparkles size={12} style={{ color: "#a855f7" }} />
                <span className="text-xs font-semibold uppercase"
                  style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em" }}>
                  About Us
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.1)}
                className="mb-8"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.12,
                  fontWeight: 800, letterSpacing: "-0.03em", color: "#fff",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Redefining{" "}
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic", fontWeight: 800,
                  background: "linear-gradient(135deg, #818cf8 0%, #c084fc 45%, #f472b6 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Digital</span>{" "}
                Excellence
              </motion.h2>

              {/* Body text */}
              <div className="space-y-5 mb-12">
                {[
                  "At Digital Keddy, we don't just build websites — we craft digital ecosystems designed to scale. Our team of visionaries merges cutting-edge technology with stunning aesthetics.",
                  "From pixel-perfect UI/UX to high-converting performance marketing, our data-driven approach ensures your brand doesn't just compete — it dominates.",
                ].map((text, i) => (
                  <motion.p key={i}
                    initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.2 + i * 0.12)}
                    style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}>
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Stats */}
              <motion.div className="grid grid-cols-3 gap-4"
                initial="hidden" animate={isInView ? "visible" : "hidden"}>
                {STATS.map((stat, i) => (
                  <motion.div key={i} variants={fadeUp(0.42 + i * 0.1)}
                    className="relative p-5 rounded-2xl overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)" }} />
                    <div className="font-bold mb-1"
                      style={{
                        fontSize: "1.9rem", letterSpacing: "-0.04em",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      }}>
                      {stat.num}
                    </div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 500, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div className="mt-10"
                initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.72)}>
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 55%, #ec4899 100%)",
                    color: "#fff", letterSpacing: "0.01em",
                    boxShadow: "0 0 40px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Our Story
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </motion.button>
              </motion.div>
            </div>

            {/* ── Right Image ── */}
            <div ref={imageRef} className="order-1 lg:order-2 relative overflow-hidden rounded-3xl"
              style={{ height: "580px" }}>

              {/* Clip-path reveal on scroll */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={isImageInView ? { clipPath: "inset(0% 0 0 0)" } : { clipPath: "inset(100% 0 0 0)" }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="Agency Team"
                  className="w-full object-cover object-center"
                  style={{ height: "120%", y: imageY, filter: "saturate(0.85)" } as React.CSSProperties}
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top right, rgba(6,6,16,0.7) 0%, transparent 60%)" }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(6,6,16,0.5) 100%)" }} />
              </motion.div>

              {/* Glass info card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
                style={{
                  background: "rgba(10,10,16,0.65)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold mb-0.5"
                      style={{ color: "#fff", fontSize: "0.95rem", letterSpacing: "-0.01em" }}>
                      Digital Keddy
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
                      Award-winning digital agency
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold" style={{
                      fontSize: "1.3rem", letterSpacing: "-0.03em",
                      background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>5★</div>
                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Rated
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(236,72,153,0.3), transparent)" }} />
              </motion.div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "inset 0 0 60px rgba(139,92,246,0.04)" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;