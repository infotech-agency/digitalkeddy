// "use client";
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight } from "lucide-react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const PROJECTS = [
//   {
//     title: "Aura Skincare",
//     category: "E-Commerce / Branding",
//     image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop",
//   },
//   {
//     title: "FinTech Pro",
//     category: "Web App / UI Design",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     title: "Neon Nights",
//     category: "Event Platform / 3D",
//     image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop",
//   },
//   {
//     title: "EcoDrive",
//     category: "Automotive / Performance",
//     image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
//   },
// ];

// export const Portfolio = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollWrapperRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const panels = gsap.utils.toArray(".portfolio-panel");
    
//     gsap.to(panels, {
//       xPercent: -100 * (panels.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 1,
//         snap: 1 / (panels.length - 1),
//         end: () => "+=" + scrollWrapperRef.current?.offsetWidth,
//       },
//     });
//   }, { scope: containerRef });

//   return (
//     <section id="projects" ref={containerRef} className="h-screen bg-zinc-950 overflow-hidden flex flex-col justify-center">
//       <div className="container mx-auto px-6 py-12">
//         <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
//           Selected <span className="text-primary italic">Works</span>
//         </h2>
//         <p className="text-white/60 mb-12 max-w-xl text-lg">
//           A showcase of our finest digital experiences, where creativity meets cutting-edge technology.
//         </p>
//       </div>

//       <div ref={scrollWrapperRef} className="flex w-[400vw] h-[60vh] px-6 gap-8 pb-12">
//         {PROJECTS.map((project, idx) => (
//           <div key={idx} className="portfolio-panel w-screen flex-shrink-0 flex items-center justify-center pr-12">
//             <div className="relative w-full max-w-5xl h-full rounded-3xl overflow-hidden group cursor-pointer">
//               <img 
//                 src={project.image} 
//                 alt={project.title} 
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
//               <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                 <div>
//                   <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">{project.category}</p>
//                   <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">{project.title}</h3>
//                 </div>
                
//                 <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out">
//                   <ArrowUpRight size={28} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


"use client"

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
`;

const PROJECTS = [
  {
    title: "Aura Skincare",
    category: "E-Commerce / Branding",
    year: "2024",
    tags: ["Shopify", "Branding", "UI/UX"],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "FinTech Pro",
    category: "Web App / UI Design",
    year: "2024",
    tags: ["React", "Dashboard", "Design System"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Neon Nights",
    category: "Event Platform / 3D",
    year: "2023",
    tags: ["Three.js", "Next.js", "Motion"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "EcoDrive",
    category: "Automotive / Performance",
    year: "2023",
    tags: ["Web Dev", "SEO", "Ads"],
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
  },
];

const RED_GRADIENT = "linear-gradient(135deg, #ef4444 0%, #f97316 55%, #fbbf24 100%)";

export const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5% 0px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setActive((a) => (a + 1) % PROJECTS.length);
  const project = PROJECTS[active];

  return (
    <>
      <style>{fontStyle}</style>
      <section
        id="projects"
        ref={sectionRef}
        className="py-32 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #040406 0%, #0a0a0e 50%, #06060e 100%)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}>
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#ef4444", boxShadow: "0 0 8px #ef4444" }} />
                <span className="text-xs font-semibold uppercase"
                  style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em" }}>
                  Selected Works
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.08,
                fontWeight: 800, letterSpacing: "-0.03em", color: "#fff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                Projects That{" "}
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic", fontWeight: 800,
                  background: RED_GRADIENT,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Speak
                </span>
              </h2>
            </motion.div>

            {/* Nav arrows + counter */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm mr-2" style={{ color: "rgba(255,255,255,0.25)" }}>
                <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                  {String(active + 1).padStart(2, "0")}
                </span>
                /{String(PROJECTS.length).padStart(2, "0")}
              </span>
              {[{ icon: ArrowLeft, fn: prev }, { icon: ArrowRight, fn: next }].map(({ icon: Icon, fn }, i) => (
                <motion.button key={i} onClick={fn}
                  whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)",
                  }}>
                  <Icon size={17} strokeWidth={1.8} />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Main layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

            {/* Featured image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl cursor-pointer group"
              style={{ height: "520px" }}
            >
              {PROJECTS.map((p, i) => (
                <motion.div key={p.title} className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.04 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover"
                    style={{ filter: "saturate(0.85)" }} />
                </motion.div>
              ))}

              {/* Gradient overlays */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(4,4,6,0.92) 0%, rgba(4,4,6,0.3) 45%, transparent 100%)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(to top, rgba(4,4,6,0.96) 0%, rgba(4,4,6,0.4) 55%, transparent 100%)" }} />

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 p-9 w-full">
                <motion.div key={active}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-semibold uppercase mb-2"
                    style={{ background: RED_GRADIENT, WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "0.15em" }}>
                    {project.category}
                  </p>
                  <h3 style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
                    letterSpacing: "-0.03em", color: "#fff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.1,
                  }}>
                    {project.title}
                  </h3>
                </motion.div>
              </div>

              {/* Arrow icon top-right */}
              <div className="absolute top-7 right-7 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)", color: "#fff" }}>
                <ArrowUpRight size={20} strokeWidth={1.8} />
              </div>

              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }} />
            </motion.div>

            {/* Sidebar list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              {PROJECTS.map((p, i) => (
                <motion.button key={i} onClick={() => setActive(i)}
                  whileHover={{ x: 4 }} transition={{ duration: 0.2 }}
                  className="relative text-left p-5 rounded-2xl overflow-hidden"
                  style={{
                    background: i === active ? "rgba(239,68,68,0.07)" : "rgba(255,255,255,0.03)",
                    border: i === active ? "1px solid rgba(239,68,68,0.25)" : "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                    transition: "background 0.3s ease, border-color 0.3s ease",
                  }}>
                  {i === active && (
                    <motion.div layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                      style={{ background: RED_GRADIENT }} />
                  )}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold uppercase"
                      style={{ color: i === active ? "rgba(239,68,68,0.9)" : "rgba(255,255,255,0.25)",
                        letterSpacing: "0.14em", transition: "color 0.3s ease" }}>
                      {p.category}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem" }}>{p.year}</span>
                  </div>
                  <div style={{
                    fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em",
                    color: i === active ? "#fff" : "rgba(255,255,255,0.5)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "color 0.3s ease",
                  }}>
                    {p.title}
                  </div>
                </motion.button>
              ))}

              {/* View all CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="mt-2 w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2.5"
                style={{
                  background: RED_GRADIENT, color: "#fff", letterSpacing: "0.02em",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: "0 0 40px rgba(239,68,68,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}>
                View All Projects
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </motion.button>
            </motion.div>
          </div>

          {/* Progress dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center justify-between flex-wrap gap-4"
          >
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
              Scroll through our work — each project tells a story.
            </p>
            <div className="flex items-center gap-2">
              {PROJECTS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "24px" : "6px", height: "6px",
                    background: i === active ? "linear-gradient(90deg, #ef4444, #f97316)" : "rgba(255,255,255,0.15)",
                  }} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;