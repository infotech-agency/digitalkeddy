// // // "use client";
// // // import React, { useRef, useEffect } from "react";
// // // import gsap from "gsap";
// // // import { useGSAP } from "@gsap/react";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // import { motion, useMotionValue, useSpring } from "framer-motion";

// // // if (typeof window !== "undefined") {
// // //   gsap.registerPlugin(ScrollTrigger);
// // // }

// // // export const Hero = () => {
// // //   const container = useRef<HTMLDivElement>(null);
// // //   const cursorRef = useRef<HTMLDivElement>(null);
// // //   const mouseX = useMotionValue(0);
// // //   const mouseY = useMotionValue(0);
// // //   const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 0.5 });
// // //   const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 0.5 });

// // //   useEffect(() => {
// // //     const handleMouseMove = (e: MouseEvent) => {
// // //       mouseX.set(e.clientX - 16);
// // //       mouseY.set(e.clientY - 16);
// // //     };
// // //     window.addEventListener("mousemove", handleMouseMove);
// // //     return () => window.removeEventListener("mousemove", handleMouseMove);
// // //   }, [mouseX, mouseY]);

// // //   useGSAP(() => {
// // //     const tl = gsap.timeline();

// // //     tl.fromTo(
// // //       ".hero-badge",
// // //       { y: 30, opacity: 0 },
// // //       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
// // //     )
// // //     .fromTo(
// // //       ".hero-text-line",
// // //       { y: 120, opacity: 0, rotateZ: 3 },
// // //       { y: 0, opacity: 1, rotateZ: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
// // //       "-=0.4"
// // //     )
// // //     .fromTo(
// // //       ".hero-subtext",
// // //       { y: 20, opacity: 0 },
// // //       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
// // //       "-=0.6"
// // //     )
// // //     .fromTo(
// // //       ".hero-buttons",
// // //       { y: 20, opacity: 0 },
// // //       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
// // //       "-=0.4"
// // //     );

// // //     gsap.to(".hero-parallax", {
// // //       yPercent: 30,
// // //       opacity: 0,
// // //       ease: "none",
// // //       scrollTrigger: {
// // //         trigger: container.current,
// // //         start: "top top",
// // //         end: "bottom top",
// // //         scrub: true,
// // //       },
// // //     });
// // //   }, { scope: container });

// // //   return (
// // //     <section ref={container} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
// // //       {/* Background Elements */}
// // //       <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse mix-blend-screen" />
// // //       <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      
// // //       {/* Custom Cursor Glow */}
// // //       <motion.div 
// // //         ref={cursorRef}
// // //         style={{ x: smoothX, y: smoothY }}
// // //         className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block shadow-[0_0_20px_10px_rgba(255,255,255,0.3)]"
// // //       />

// // //       <div className="container mx-auto px-6 relative z-10 hero-parallax flex flex-col items-center text-center">
// // //         <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
// // //           <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
// // //           <span className="text-sm font-medium tracking-wide uppercase text-white/80">Award Winning Digital Agency</span>
// // //         </div>

// // //         <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6 flex flex-col items-center">
// // //           <div className="overflow-hidden pb-2">
// // //             <span className="block hero-text-line">We Build Brands</span>
// // //           </div>
// // //           <div className="overflow-hidden pb-2">
// // //             <span className="block hero-text-line">That <span className="text-primary italic">Dominate</span></span>
// // //           </div>
// // //           <div className="overflow-hidden pb-2">
// // //             <span className="block hero-text-line text-glow">Digital.</span>
// // //           </div>
// // //         </h1>

// // //         <p className="hero-subtext text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
// // //           Transforming visions into immersive digital experiences. We specialize in Web Development, SEO, Performance Marketing, and striking UI/UX.
// // //         </p>

// // //         <div className="hero-buttons flex flex-col sm:flex-row items-center gap-4">
// // //           <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,43,43,0.5)]">
// // //             Start a Project
// // //           </button>
// // //           <button className="px-8 py-4 rounded-full font-medium text-lg text-white hover:bg-white/10 transition-all border border-white/10 glass">
// // //             View Our Work
// // //           </button>
// // //         </div>
// // //       </div>
      
// // //       {/* Bottom Gradient overlay for smooth transition */}
// // //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
// // //     </section>
// // //   );
// // // };


// // "use client";
// // import React, { useRef, useEffect } from "react";
// // import gsap from "gsap";
// // import { useGSAP } from "@gsap/react";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { motion, useMotionValue, useSpring } from "framer-motion";

// // if (typeof window !== "undefined") {
// //   gsap.registerPlugin(ScrollTrigger);
// // }

// // export const Hero = () => {
// //   const container = useRef<HTMLDivElement>(null);
// //   const cursorRef = useRef<HTMLDivElement>(null);
// //   const videoRef = useRef<HTMLVideoElement>(null);
// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);
// //   const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 0.5 });
// //   const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 0.5 });

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       mouseX.set(e.clientX - 16);
// //       mouseY.set(e.clientY - 16);
// //     };
// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, [mouseX, mouseY]);

// //   useGSAP(() => {
// //     const tl = gsap.timeline();

// //     tl.fromTo(
// //       ".hero-badge",
// //       { y: 30, opacity: 0 },
// //       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
// //     )
// //     .fromTo(
// //       ".hero-text-line",
// //       { y: 120, opacity: 0, rotateZ: 3 },
// //       { y: 0, opacity: 1, rotateZ: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
// //       "-=0.4"
// //     )
// //     .fromTo(
// //       ".hero-subtext",
// //       { y: 20, opacity: 0 },
// //       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
// //       "-=0.6"
// //     )
// //     .fromTo(
// //       ".hero-buttons",
// //       { y: 20, opacity: 0 },
// //       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
// //       "-=0.4"
// //     );

// //     gsap.to(".hero-parallax", {
// //       yPercent: 30,
// //       opacity: 0,
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: container.current,
// //         start: "top top",
// //         end: "bottom top",
// //         scrub: true,
// //       },
// //     });
// //   }, { scope: container });

// //   return (
// //     <section ref={container} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
// //       {/* Background Video */}
// //       <div className="absolute inset-0 w-full h-full -z-20">
// //         <video
// //           ref={videoRef}
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           className="w-full h-full object-cover"
// //           poster="/hero-poster.jpg" // Optional: Add a poster image
// //         >
// //           <source src="/bgvideo.mp4" type="video/mp4" />
// //           {/* Add additional formats for better browser support */}
// //           {/* <source src="/bgvideo.mp4" type="video/webm" /> */}
// //           Your browser does not support the video tag.
// //         </video>
// //         {/* Dark overlay for better text readability */}
// //         <div className="absolute inset-0 bg-black/50 -z-10" />
// //       </div>

// //       {/* Background Elements (can keep or remove these) */}
// //       <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse mix-blend-screen" />
// //       <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      
// //       {/* Custom Cursor Glow */}
// //       <motion.div 
// //         ref={cursorRef}
// //         style={{ x: smoothX, y: smoothY }}
// //         className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block shadow-[0_0_20px_10px_rgba(255,255,255,0.3)]"
// //       />

// //       <div className="container mx-auto px-6 relative z-10 hero-parallax flex flex-col items-center text-center">
// //         <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
// //           <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
// //           <span className="text-sm font-medium tracking-wide uppercase text-white/80">Award Winning Digital Agency</span>
// //         </div>

// //         <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6 flex flex-col items-center">
// //           <div className="overflow-hidden pb-2">
// //             <span className="block hero-text-line">We Build Brands</span>
// //           </div>
// //           <div className="overflow-hidden pb-2">
// //             <span className="block hero-text-line">That <span className="text-primary italic">Dominate</span></span>
// //           </div>
// //           <div className="overflow-hidden pb-2">
// //             <span className="block hero-text-line text-glow">Digital.</span>
// //           </div>
// //         </h1>

// //         <p className="hero-subtext text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
// //           Transforming visions into immersive digital experiences. We specialize in Web Development, SEO, Performance Marketing, and striking UI/UX.
// //         </p>

// //         <div className="hero-buttons flex flex-col sm:flex-row items-center gap-4">
// //           <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,43,43,0.5)]">
// //             Start a Project
// //           </button>
// //           <button className="px-8 py-4 rounded-full font-medium text-lg text-white hover:bg-white/10 transition-all border border-white/10 glass">
// //             View Our Work
// //           </button>
// //         </div>
// //       </div>
      
// //       {/* Bottom Gradient overlay for smooth transition */}
// //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
// //     </section>
// //   );
// // };


// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export const Hero = () => {
//   const container = useRef<HTMLDivElement>(null);
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [videoError, setVideoError] = useState(false);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 0.5 });
//   const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 0.5 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX - 16);
//       mouseY.set(e.clientY - 16);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   // Ensure video plays properly
//   useEffect(() => {
//     if (videoRef.current && !videoError) {
//       videoRef.current.play().catch(error => {
//         console.log("Video autoplay failed:", error);
//         setVideoError(true);
//       });
//     }
//   }, [videoError]);

//   useGSAP(() => {
//     const tl = gsap.timeline();

//     tl.fromTo(
//       ".hero-badge",
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
//     )
//     .fromTo(
//       ".hero-text-line",
//       { y: 120, opacity: 0, rotateZ: 3 },
//       { y: 0, opacity: 1, rotateZ: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
//       "-=0.4"
//     )
//     .fromTo(
//       ".hero-subtext",
//       { y: 20, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//       "-=0.6"
//     )
//     .fromTo(
//       ".hero-buttons",
//       { y: 20, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//       "-=0.4"
//     );

//     gsap.to(".hero-parallax", {
//       yPercent: 30,
//       opacity: 0,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });
//   }, { scope: container });

//   return (
//     <section ref={container} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         {!videoError ? (
//           <video
//             ref={videoRef}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//             poster="/hero-poster.jpg"
//             onError={() => setVideoError(true)}
//           >
//             <source src="/bgvideo.mp4" type="video/mp4" />
//             <source src="/bgvideo.webm" type="video/webm" />
//             <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
//           </video>
//         ) : (
//           /* Fallback gradient when video fails */
//           <div className="w-full h-full bg-gradient-to-br from-purple-900/50 via-black to-blue-900/50" />
//         )}
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Background Elements */}
//       <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse mix-blend-screen" />
//       <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      
//       {/* Custom Cursor Glow */}
//       <motion.div 
//         ref={cursorRef}
//         style={{ x: smoothX, y: smoothY }}
//         className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block shadow-[0_0_20px_10px_rgba(255,255,255,0.3)]"
//       />

//       <div className="container mx-auto px-6 relative z-10 hero-parallax flex flex-col items-center text-center">
//         <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
//           <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//           <span className="text-sm font-medium tracking-wide uppercase text-white/80">Award Winning Digital Agency</span>
//         </div>

//         <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6 flex flex-col items-center">
//           <div className="overflow-hidden pb-2">
//             <span className="block hero-text-line">We Build Brands</span>
//           </div>
//           <div className="overflow-hidden pb-2">
//             <span className="block hero-text-line">That <span className="text-primary italic">Dominate</span></span>
//           </div>
//           <div className="overflow-hidden pb-2">
//             <span className="block hero-text-line text-glow">Digital.</span>
//           </div>
//         </h1>

//         <p className="hero-subtext text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
//           Transforming visions into immersive digital experiences. We specialize in Web Development, SEO, Performance Marketing, and striking UI/UX.
//         </p>

//         <div className="hero-buttons flex flex-col sm:flex-row items-center gap-4">
//           <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,43,43,0.5)]">
//             Start a Project
//           </button>
//           <button className="px-8 py-4 rounded-full font-medium text-lg text-white hover:bg-white/10 transition-all border border-white/10 glass">
//             View Our Work
//           </button>
//         </div>
//       </div>
      
//       {/* Bottom Gradient overlay for smooth transition */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
//     </section>
//   );
// };

// "use client"
// import { useRef, useEffect } from "react";
// import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
// import { ArrowUpRight, Play } from "lucide-react";

// const fontStyle = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
// `;

// const lineVariants = {
//   hidden: { y: 110, opacity: 0, rotateZ: 2 },
//   visible: (i: number) => ({
//     y: 0,
//     opacity: 1,
//     rotateZ: 0,
//     transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.14 },
//   }),
// };

// const fadeUp = (delay = 0) => ({
//   hidden: { y: 24, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay } },
// });

// export const Hero = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(containerRef, { once: true });
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { damping: 22, stiffness: 120, mass: 0.4 });
//   const smoothY = useSpring(mouseY, { damping: 22, stiffness: 120, mass: 0.4 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX - 16);
//       mouseY.set(e.clientY - 16);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   return (
//     <>
//       <style>{fontStyle}</style>

//       {/* Custom cursor */}
//       <motion.div
//         style={{ x: smoothX, y: smoothY }}
//         className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
//       >
//         <div
//           className="w-8 h-8 rounded-full"
//           style={{
//             background: "rgba(255,255,255,0.9)",
//             mixBlendMode: "difference",
//             boxShadow: "0 0 20px 8px rgba(255,255,255,0.25)",
//           }}
//         />
//       </motion.div>

//       <section
//         ref={containerRef}
//         className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
//         style={{
//           background: "linear-gradient(160deg, #040406 0%, #08080f 60%, #060610 100%)",
//           fontFamily: "'Plus Jakarta Sans', sans-serif",
//         }}
//       >
//         {/* Ambient orbs */}
//         <div className="absolute top-[15%] left-[15%] w-[45vw] h-[45vw] rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
//         <div className="absolute bottom-[15%] right-[10%] w-[35vw] h-[35vw] rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
//         <div className="absolute top-[40%] right-[25%] w-[20vw] h-[20vw] rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 65%)", filter: "blur(40px)" }} />

//         {/* Subtle grid overlay */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
//                               linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
//             backgroundSize: "80px 80px",
//           }}
//         />

//         <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">

//           {/* Badge */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeUp(0.1)}
//             className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10"
//             style={{
//               background: "rgba(255,255,255,0.04)",
//               border: "1px solid rgba(255,255,255,0.09)",
//               backdropFilter: "blur(12px)",
//             }}
//           >
//             <span className="w-2 h-2 rounded-full animate-pulse"
//               style={{ background: "#a855f7", boxShadow: "0 0 10px #a855f7" }} />
//             <span className="text-xs font-semibold uppercase"
//               style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em" }}>
//               Award Winning Digital Agency
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <h1 className="mb-8"
//             style={{
//               fontSize: "clamp(3rem, 7vw, 6.5rem)",
//               lineHeight: 1.06,
//               fontFamily: "'Plus Jakarta Sans', sans-serif",
//               fontWeight: 800,
//               letterSpacing: "-0.04em",
//             }}
//           >
//             {[
//               { text: "We Build Brands" },
//               {
//                 text: (
//                   <>
//                     That{" "}
//                     <span style={{
//                       fontFamily: "'Playfair Display', Georgia, serif",
//                       fontStyle: "italic",
//                       fontWeight: 800,
//                       background: "linear-gradient(135deg, #818cf8 0%, #c084fc 45%, #f472b6 100%)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>
//                       Dominate
//                     </span>
//                   </>
//                 ),
//               },
//               {
//                 text: (
//                   <span style={{
//                     fontFamily: "'Playfair Display', Georgia, serif",
//                     fontStyle: "italic",
//                     fontWeight: 700,
//                     color: "rgba(255,255,255,0.92)",
//                   }}>
//                     Digital.
//                   </span>
//                 ),
//               },
//             ].map((line, i) => (
//               <div key={i} className="overflow-hidden pb-1">
//                 <motion.span
//                   custom={i}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={lineVariants}
//                   className="block"
//                   style={{ color: "#fff" }}
//                 >
//                   {line.text}
//                 </motion.span>
//               </div>
//             ))}
//           </h1>

//           {/* Subtext */}
//           <motion.p
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeUp(0.75)}
//             className="max-w-2xl mx-auto mb-12"
//             style={{
//               fontSize: "1.05rem",
//               color: "rgba(255,255,255,0.38)",
//               lineHeight: 1.8,
//               fontWeight: 300,
//             }}
//           >
//             Transforming visions into immersive digital experiences. We specialize in Web Development,
//             SEO, Performance Marketing, and striking UI/UX.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeUp(0.9)}
//             className="flex flex-col sm:flex-row items-center gap-4"
//           >
//             {/* Primary */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm overflow-hidden group"
//               style={{
//                 background: "linear-gradient(135deg, #6366f1 0%, #a855f7 55%, #ec4899 100%)",
//                 color: "#fff",
//                 fontSize: "0.9rem",
//                 letterSpacing: "0.02em",
//                 boxShadow: "0 0 50px rgba(139,92,246,0.4), 0 0 100px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.25)",
//                 border: "1px solid rgba(255,255,255,0.18)",
//               }}
//             >
//               <span>Start a Project</span>
//               <ArrowUpRight size={17} strokeWidth={2.5} />
//             </motion.button>

//             {/* Secondary */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm"
//               style={{
//                 background: "rgba(255,255,255,0.045)",
//                 border: "1px solid rgba(255,255,255,0.1)",
//                 color: "rgba(255,255,255,0.7)",
//                 backdropFilter: "blur(14px)",
//                 fontSize: "0.9rem",
//                 letterSpacing: "0.02em",
//                 boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
//               }}
//             >
//               <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
//                 style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
//                 <Play size={11} fill="rgba(255,255,255,0.8)" strokeWidth={0} />
//               </span>
//               View Our Work
//             </motion.button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeUp(1.05)}
//             className="mt-16 flex items-center gap-6 flex-wrap justify-center"
//           >
//             {[
//               { num: "150+", label: "Projects Delivered" },
//               { num: "98%", label: "Client Satisfaction" },
//               { num: "12x", label: "Average ROI" },
//             ].map((stat, i) => (
//               <div key={i} className="flex items-center gap-3">
//                 {i > 0 && <div className="w-px h-6 hidden sm:block" style={{ background: "rgba(255,255,255,0.1)" }} />}
//                 <div className="text-center">
//                   <div className="font-bold" style={{
//                     fontSize: "1.4rem",
//                     letterSpacing: "-0.03em",
//                     background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>
//                     {stat.num}
//                   </div>
//                   <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
//                     {stat.label}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom fade */}
//         <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
//           style={{ background: "linear-gradient(to top, #040406, transparent)" }} />
//       </section>
//     </>
//   );
// };

// export default Hero;
"use client"
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
`;

const lineVariants = {
  hidden: { y: 110, opacity: 0, rotateZ: 2 },
  visible: (i: number) => ({
    y: 0, opacity: 1, rotateZ: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.14 },
  }),
};

const fadeUp = (delay = 0) => ({
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay } },
});

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [videoError, setVideoError] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 22, stiffness: 120, mass: 0.4 });
  const smoothY = useSpring(mouseY, { damping: 22, stiffness: 120, mass: 0.4 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.play().catch(() => setVideoError(true));
    }
  }, [videoError]);

  return (
    <>
      <style>{fontStyle}</style>

      {/* Custom cursor */}
      <motion.div style={{ x: smoothX, y: smoothY }}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block">
        <div className="w-8 h-8 rounded-full"
          style={{ background: "rgba(255,255,255,0.9)", mixBlendMode: "difference",
            boxShadow: "0 0 20px 8px rgba(255,255,255,0.25)" }} />
      </motion.div>

      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #040406 0%, #08080f 60%, #060610 100%)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* ── Background Video ── */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay loop muted playsInline
              className="w-full h-full object-cover"
              poster="/hero-poster.jpg"
              onError={() => setVideoError(true)}
            >
              <source src="/bgvideo.mp4" type="video/mp4" />
              <source src="/bgvideo.webm" type="video/webm" />
            </video>
          ) : (
            /* Fallback when video file is missing */
            <div className="w-full h-full"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, transparent 50%, rgba(168,85,247,0.1) 100%)" }} />
          )}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.62)" }} />
        </div>

        {/* Ambient orbs */}
        <div className="absolute top-[15%] left-[15%] w-[45vw] h-[45vw] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[15%] right-[10%] w-[35vw] h-[35vw] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">

          {/* Badge */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.1)}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(12px)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#a855f7", boxShadow: "0 0 10px #a855f7" }} />
            <span className="text-xs font-semibold uppercase"
              style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em" }}>
              Award Winning Digital Agency
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", lineHeight: 1.06,
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.04em" }}>
            {[
              { text: "We Build Brands" },
              {
                text: <>That{" "}
                  <span style={{
                    fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 800,
                    background: "linear-gradient(135deg, #818cf8 0%, #c084fc 45%, #f472b6 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>Dominate</span>
                </>,
              },
              {
                text: <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic",
                  fontWeight: 700, color: "rgba(255,255,255,0.92)",
                }}>Digital.</span>,
              },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden pb-1">
                <motion.span custom={i} initial="hidden" animate={isInView ? "visible" : "hidden"}
                  variants={lineVariants} className="block" style={{ color: "#fff" }}>
                  {line.text}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.75)}
            className="max-w-2xl mx-auto mb-12"
            style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.8, fontWeight: 300 }}>
            Transforming visions into immersive digital experiences. We specialize in Web Development,
            SEO, Performance Marketing, and striking UI/UX.
          </motion.p>

          {/* Buttons */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.9)}
            className="flex flex-col sm:flex-row items-center gap-4">

            {/* Primary */}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 55%, #ec4899 100%)",
                color: "#fff", fontSize: "0.9rem", letterSpacing: "0.02em",
                boxShadow: "0 0 50px rgba(139,92,246,0.4), 0 0 100px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.25)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}>
              <span>Start a Project</span>
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </motion.button>

            {/* Secondary */}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm"
              style={{
                background: "rgba(255,255,255,0.045)", border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)", backdropFilter: "blur(14px)",
                fontSize: "0.9rem", letterSpacing: "0.02em",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
              }}>
              <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <Play size={11} fill="rgba(255,255,255,0.8)" strokeWidth={0} />
              </span>
              View Our Work
            </motion.button>
          </motion.div>

          {/* Stats */}
        
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to top, #040406, transparent)" }} />
      </section>
    </>
  );
};

export default Hero;