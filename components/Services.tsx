// "use client";
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import { Code2, Search, Megaphone, PenTool, BarChart3, Globe } from "lucide-react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const SERVICES = [
//   {
//     title: "Web Development",
//     description: "High-performance, scalable, and visually stunning web applications.",
//     icon: <Code2 size={32} />,
//     color: "from-blue-500/20 to-transparent",
//     span: "md:col-span-2 lg:col-span-2",
//   },
//   {
//     title: "SEO",
//     description: "Dominate search rankings with data-driven optimization strategies.",
//     icon: <Search size={32} />,
//     color: "from-green-500/20 to-transparent",
//     span: "col-span-1",
//   },
//   {
//     title: "Meta Ads",
//     description: "Laser-targeted campaigns designed for maximum ROI and scale.",
//     icon: <Megaphone size={32} />,
//     color: "from-pink-500/20 to-transparent",
//     span: "col-span-1",
//   },
//   {
//     title: "UI/UX Design",
//     description: "Intuitive, award-winning interfaces that captivate users.",
//     icon: <PenTool size={32} />,
//     color: "from-purple-500/20 to-transparent",
//     span: "md:col-span-2 lg:col-span-2",
//   },
//   {
//     title: "Performance Marketing",
//     description: "Omnichannel strategies that turn clicks into loyal customers.",
//     icon: <BarChart3 size={32} />,
//     color: "from-orange-500/20 to-transparent",
//     span: "md:col-span-2 lg:col-span-2",
//   },
//   {
//     title: "Branding",
//     description: "Crafting memorable identities that resonate with your audience.",
//     icon: <Globe size={32} />,
//     color: "from-primary/20 to-transparent",
//     span: "col-span-1",
//   },
// ];

// export const Services = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.fromTo(
//       ".service-card",
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
    
//     gsap.fromTo(
//       ".services-title",
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//         },
//       }
//     );
//   }, { scope: containerRef });

//   return (
//     <section id="services" ref={containerRef} className="py-32 relative bg-black">
//       {/* Background glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-20 services-title">
//           <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
//             Our <span className="text-primary italic">Services</span>
//           </h2>
//           <p className="text-white/60 text-lg max-w-2xl mx-auto">
//             Comprehensive digital solutions tailored to elevate your brand and drive exponential growth.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[250px]">
//           {SERVICES.map((service, idx) => (
//             <motion.div
//               key={idx}
//               whileHover="hover"
//               className={`service-card relative overflow-hidden rounded-3xl glass-dark p-8 flex flex-col justify-between group cursor-pointer ${service.span}`}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
//               <div className="relative z-10">
//                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 text-white group-hover:text-primary">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-glow transition-all duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-white/60 text-sm md:text-base leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Decorative border gradient */}
//               <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Search, Megaphone, PenTool, BarChart3, Globe } from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    description: "High-performance, scalable, and visually stunning web applications built with modern technologies.",
    icon: Code2,
    accent: "#3b82f6",
    gradient: "from-blue-600/30 via-blue-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    span: "md:col-span-2",
  },
  {
    title: "SEO",
    description: "Dominate search rankings with data-driven optimization strategies.",
    icon: Search,
    accent: "#22c55e",
    gradient: "from-green-600/30 via-green-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    span: "md:col-span-1",
  },
  {
    title: "Meta Ads",
    description: "Laser-targeted campaigns designed for maximum ROI and scale.",
    icon: Megaphone,
    accent: "#ec4899",
    gradient: "from-pink-600/30 via-pink-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    span: "md:col-span-1",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, award-winning interfaces that captivate users and drive conversions.",
    icon: PenTool,
    accent: "#a855f7",
    gradient: "from-purple-600/30 via-purple-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    span: "md:col-span-2",
  },
  {
    title: "Performance Marketing",
    description: "Omnichannel strategies that turn clicks into loyal customers and revenue.",
    icon: BarChart3,
    accent: "#f97316",
    gradient: "from-orange-600/30 via-orange-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    span: "md:col-span-2",
  },
  {
    title: "Branding",
    description: "Crafting memorable identities that resonate with your audience.",
    icon: Globe,
    accent: "#6366f1",
    gradient: "from-indigo-600/30 via-indigo-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&q=80",
    span: "md:col-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const titleVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #050505 0%, #0a0a0f 50%, #080810 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)", filter: "blur(60px)" }} />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* Heading */}
        <motion.div className="text-center mb-20"
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={titleVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase mb-6"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em" }}>
            <span className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#6366f1", boxShadow: "0 0 8px #6366f1" }} />
            What we offer
          </div>
          <h2 className="font-bold mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, color: "#fff" }}>
            Our{" "}
            <span style={{
              background: "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", fontStyle: "italic",
            }}>Services</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
            Comprehensive digital solutions tailored to elevate your brand and drive exponential growth.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${service.span}`}
                style={{ height: "280px", background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
                whileHover={{ scale: 1.015, transition: { duration: 0.3, ease: "easeOut" } }}>

                {/* Background image */}
                <div className="absolute inset-0 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover",
                    backgroundPosition: "center", opacity: 0.18, filter: "saturate(0.8)" }} />

                {/* Glass overlay */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)" }} />

                {/* Accent gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top sheen line */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.accent}80, transparent)` }} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-7">
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.7)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}>
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold mb-2" style={{ fontSize: "1.25rem", color: "#fff", letterSpacing: "-0.01em" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "32ch", lineHeight: 1.65 }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Learn more arrow */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: service.accent }}>
                      Learn more
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: service.accent }}>
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Corner glow */}
                <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${service.accent}30 0%, transparent 70%)`, transform: "translate(30%, 30%)" }} />

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ border: `1px solid ${service.accent}30`,
                    boxShadow: `inset 0 0 30px ${service.accent}08, 0 0 30px ${service.accent}15` }} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;