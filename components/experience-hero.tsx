// "use client";

// import React, { useRef, useEffect, useMemo } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { Float, MeshDistortMaterial } from '@react-three/drei';
// import * as THREE from 'three';
// import gsap from 'gsap';

// const LiquidBackground = () => {
//   const meshRef = useRef<THREE.Mesh>(null);
//   const { viewport } = useThree();
//   const uniforms = useMemo(() => ({
//     uTime: { value: 0 },
//     uMouse: { value: new THREE.Vector2(0, 0) },
//   }), []);

//   useFrame((state) => {
//     const { clock, mouse } = state;
//     if (meshRef.current) {
//       (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
//       (meshRef.current.material as THREE.ShaderMaterial).uniforms.uMouse.value.lerp(mouse, 0.05);
//     }
//   });

//   return (
//     <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
//       <planeGeometry args={[1, 1]} />
//       <shaderMaterial
//         transparent
//         uniforms={uniforms}
//         vertexShader={`
//           varying vec2 vUv;
//           void main() {
//             vUv = uv;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//           }
//         `}
//         fragmentShader={`
//           uniform float uTime;
//           uniform vec2 uMouse;
//           varying vec2 vUv;
//           void main() {
//             vec2 uv = vUv;
//             float t = uTime * 0.15;
//             vec2 m = uMouse * 0.1;
//             float color = smoothstep(0.0, 1.0, (sin(uv.x * 8.0 + t + m.x * 12.0) + sin(uv.y * 6.0 - t + m.y * 12.0)) * 0.5 + 0.5);
//             gl_FragColor = vec4(mix(vec3(0.98, 0.96, 0.95), vec3(0.95, 0.92, 0.9), color), 1.0);
//           }
//         `}
//       />
//     </mesh>
//   );
// };

// const Monolith = () => {
//   const meshRef = useRef<THREE.Mesh>(null);
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
//     }
//   });
//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//       <mesh ref={meshRef}>
//         <icosahedronGeometry args={[13, 1]} />
//         <MeshDistortMaterial color="#dc2626" speed={4} distort={0.4} roughness={0.2} metalness={0.8} />
//       </mesh>
//     </Float>
//   );
// };

// export const Component = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const revealRef = useRef<HTMLDivElement>(null);
//   const ctaRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(revealRef.current, 
//         { filter: "blur(30px)", opacity: 0, scale: 1.02 },
//         { filter: "blur(0px)", opacity: 1, scale: 1, duration: 2.2, ease: "expo.out" }
//       );
      
//       gsap.from(".command-cell", {
//         x: 60, opacity: 0, stagger: 0.1, duration: 1.5, ease: "power4.out", delay: 1, clearProps: "all"
//       });

//       const handleMouseMove = (e: MouseEvent) => {
//         if (!ctaRef.current) return;
//         const rect = ctaRef.current.getBoundingClientRect();
//         const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
//         if (dist < 150) {
//           gsap.to(ctaRef.current, { x: (e.clientX - (rect.left + rect.width/2)) * 0.4, y: (e.clientY - (rect.top + rect.height/2)) * 0.4, duration: 0.6 });
//         } else {
//           gsap.to(ctaRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
//         }
//       };
//       window.addEventListener("mousemove", handleMouseMove);
//       return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="relative min-h-screen w-full bg-white flex flex-col selection:bg-red-600 selection:text-white overflow-hidden">
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <Canvas camera={{ position: [0, 0, 60], fov: 35 }}>
//           <ambientLight intensity={0.5} />
//           <spotLight position={[50, 50, 50]} intensity={2.5} color="#dc2626" />
//           <pointLight position={[-30, -30, 30]} intensity={1.5} color="#ef4444" />
//           <LiquidBackground />
//           <Monolith />
//         </Canvas>
//       </div>

//       <div ref={revealRef} className="relative z-10 w-full flex flex-col md:flex-row p-8 md:p-14 lg:p-20 min-h-screen items-center md:items-stretch gap-10">
//         <div className="flex-1 min-w-0 flex flex-col justify-between pb-12 md:pb-8 w-full">
//           <div className="flex items-center gap-3">
//              <div className="relative w-2.5 h-2.5 bg-red-600 rounded-full">
//                 <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-30" />
//              </div>
//              <span className="font-mono text-[11px] font-bold text-gray-900 tracking-[0.2em] uppercase">DIGITAL KEDDY</span>
//           </div>

//           {/* <div className="max-w-4xl lg:-translate-y-8 pr-12">
//             <h1 className="text-[clamp(3.5rem,9.5vw,11.5rem)] font-black leading-[0.87] tracking-tighter text-gray-900 uppercase">
//               CREATIVE <br /> <span className="text-red-600">AGENCY</span>
//             </h1> */}
//             <div className="max-w-4xl lg:-translate-y-8 pr-12">
//   <h1 className="text-[clamp(3.5rem,9.5vw,11.5rem)] font-sarif font-black leading-[0.87] tracking-tighter uppercase">
//     <span className="text-transparent bg-clip-text text-stroke-2 text-stroke-gray-900" style={{ 
//       color: 'transparent', 
//       WebkitTextStroke: '2px #111827',
//       fontWeight: 900
//     }}>CREATIVE</span>
//     <br /> 
//     <span className="text-red-600">AGENCY</span>
//   </h1>
//             <p className="mt-8 font-mono text-[11px] text-gray-500 uppercase tracking-[0.35em] max-w-sm leading-relaxed">
//               We engineer immersive digital experiences through spatial logic and advanced WebGL.
//             </p>
//           </div>
          
//           <button ref={ctaRef} className="w-fit flex items-center gap-6 group lg:-translate-y-20">
//              <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500 overflow-hidden">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white stroke-red-600 transition-colors duration-500">
//                   <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//              </div>
//              <span className="font-mono text-[11px] font-bold text-gray-900 uppercase tracking-[0.2em] group-hover:text-red-600 transition-colors duration-500">Start a Project</span>
//           </button>
//         </div>

//         {/* Right Side Deck */}
//         <div className="w-full md:w-80 lg:w-96 flex-shrink-0 flex flex-col gap-4 justify-center z-20">
//           {[
//             { id: "001", title: "AVAILABILITY", val: "Open", type: "progress" },
//             { id: "002", title: "STUDIO STATS", val: "20+ Wins", type: "data" },
//             { id: "003", title: "EXPERTISE", val: "Creative Dev", type: "text" }
//           ].map((item) => (
//             <div key={item.id} className="command-cell bg-gray-50 border border-gray-200 p-6 sm:p-7 block opacity-1 rounded-2xl">
//               <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block mb-3">{item.id} // {item.title}</span>
//               {item.type === "progress" ? (
//                 <div className="flex justify-between items-end mt-2">
//                   <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tighter">{item.val}</h4>
//                   <div className="h-[2px] w-20 bg-gray-200 rounded-full overflow-hidden">
//                      <div className="h-full bg-red-600 w-[60%] animate-loading" />
//                   </div>
//                 </div>
//               ) : item.type === "data" ? (
//                 <div className="mt-4 flex flex-col gap-3">
//                   <div className="flex justify-between text-[10px] font-mono text-gray-500">
//                     <span>Awwwards Tier</span>
//                     <span className="text-red-600 font-bold">2024-25</span>
//                   </div>
//                   <div className="h-[1px] w-full bg-gray-200" />
//                   <div className="flex justify-between text-[10px] font-mono text-gray-500">
//                     <span>Retention Rate</span>
//                     <span className="text-red-600 font-bold">98.2%</span>
//                   </div>
//                 </div>
//               ) : (
//                 <h3 className="text-sm font-medium text-gray-600 mt-3 leading-snug">
//                   Transforming static interfaces into <span className="italic text-red-600 font-semibold">narrative apertures</span>.
//                 </h3>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes loading {
//           0% { width: 0%; }
//           100% { width: 60%; }
//         }
//         .animate-loading {
//           animation: loading 1.5s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

// Animated Grid Background Component (SVG)
const AnimatedGridBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    
    const paths = svg.querySelectorAll('path');
    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.05,
      ease: "power2.out",
      delay: 0.5
    });
  }, []);
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <svg 
        ref={svgRef}
        className="absolute right-0 top-0 h-full w-auto opacity-30"
        viewBox="0 0 800 1200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#111827" stopOpacity="0.15" />
          </linearGradient>
          <pattern id="gridPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#gridGrad)" strokeWidth="1" />
          </pattern>
        </defs>
        
        {/* Main grid lines */}
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
        
        {/* Animated accent lines */}
        <g stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round">
          <path d="M 0 200 L 800 200" strokeDasharray="800" strokeDashoffset="800" opacity="0.6" />
          <path d="M 0 400 L 800 400" strokeDasharray="800" strokeDashoffset="800" opacity="0.4" />
          <path d="M 0 600 L 800 600" strokeDasharray="800" strokeDashoffset="800" opacity="0.5" />
          <path d="M 0 800 L 800 800" strokeDasharray="800" strokeDashoffset="800" opacity="0.3" />
          <path d="M 0 1000 L 800 1000" strokeDasharray="800" strokeDashoffset="800" opacity="0.45" />
        </g>
        
        {/* Vertical accent lines */}
        <g stroke="#dc2626" strokeWidth="1" strokeLinecap="round">
          <path d="M 200 0 L 200 1200" strokeDasharray="1200" strokeDashoffset="1200" opacity="0.5" />
          <path d="M 400 0 L 400 1200" strokeDasharray="1200" strokeDashoffset="1200" opacity="0.35" />
          <path d="M 600 0 L 600 1200" strokeDasharray="1200" strokeDashoffset="1200" opacity="0.45" />
        </g>
        
        {/* Diagonal motion lines */}
        <g stroke="#dc2626" strokeWidth="0.8" strokeDasharray="300 100" strokeLinecap="round">
          <path d="M 100 0 L 300 200" opacity="0.5">
            <animate attributeName="strokeDashoffset" from="400" to="-400" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M 500 800 L 700 1000" opacity="0.4">
            <animate attributeName="strokeDashoffset" from="400" to="-400" dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M -100 500 L 100 700" opacity="0.6">
            <animate attributeName="strokeDashoffset" from="400" to="-400" dur="3.5s" repeatCount="indefinite" />
          </path>
          <path d="M 600 200 L 800 400" opacity="0.35">
            <animate attributeName="strokeDashoffset" from="400" to="-400" dur="4.5s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Floating dots animation */}
        <g fill="#dc2626">
          <circle cx="150" cy="300" r="2" opacity="0.6">
            <animate attributeName="cy" values="300;280;300" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="500" r="2.5" opacity="0.5">
            <animate attributeName="cy" values="500;470;500" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="350" r="1.5" opacity="0.7">
            <animate attributeName="cy" values="350;330;350" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="850" r="2" opacity="0.4">
            <animate attributeName="cy" values="850;820;850" dur="4.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="700" r="2" opacity="0.5">
            <animate attributeName="cy" values="700;680;700" dur="3.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export const Component = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(revealRef.current, 
        { filter: "blur(30px)", opacity: 0, scale: 1.02 },
        { filter: "blur(0px)", opacity: 1, scale: 1, duration: 2.2, ease: "expo.out" }
      );
      
      gsap.from(".command-cell", {
        x: 60, opacity: 0, stagger: 0.1, duration: 1.5, ease: "power4.out", delay: 1, clearProps: "all"
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!ctaRef.current) return;
        const rect = ctaRef.current.getBoundingClientRect();
        const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
        if (dist < 150) {
          gsap.to(ctaRef.current, { x: (e.clientX - (rect.left + rect.width/2)) * 0.4, y: (e.clientY - (rect.top + rect.height/2)) * 0.4, duration: 0.6 });
        } else {
          gsap.to(ctaRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-white flex flex-col selection:bg-red-600 selection:text-white overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGridBackground />

      <div ref={revealRef} className="relative z-10 w-full flex flex-col md:flex-row p-8 md:p-14 lg:p-20 min-h-screen items-center md:items-stretch gap-10">
        <div className="flex-1 min-w-0 flex flex-col justify-between pb-12 md:pb-8 w-full">
          <div className="flex items-center gap-3">
             <div className="relative w-2.5 h-2.5 bg-red-600 rounded-full">
                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-30" />
             </div>
             <span className="font-mono text-[11px] font-bold text-gray-900 tracking-[0.2em] uppercase">DIGITAL KEDDY</span>
          </div>

          <div className="max-w-4xl lg:-translate-y-8 pr-12">
            <h1 className="text-[clamp(3.5rem,9.5vw,11.5rem)] font-black leading-[0.87] tracking-tighter text-gray-900 uppercase">
              CREATIVE <br /> <span className="text-red-600">AGENCY</span>
            </h1>
            <p className="mt-8 font-mono text-[11px] text-gray-500 uppercase tracking-[0.35em] max-w-sm leading-relaxed">
              We engineer immersive digital experiences through spatial logic and advanced WebGL.
            </p>
          </div>
          
          <button ref={ctaRef} className="w-fit flex items-center gap-6 group lg:-translate-y-20">
             <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500 overflow-hidden">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white stroke-red-600 transition-colors duration-500">
                  <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
             <span className="font-mono text-[11px] font-bold text-gray-900 uppercase tracking-[0.2em] group-hover:text-red-600 transition-colors duration-500">Start a Project</span>
          </button>
        </div>

        {/* Right Side Deck */}
        <div className="w-full md:w-80 lg:w-96 flex-shrink-0 flex flex-col gap-4 justify-center z-20">
          {[
            { id: "001", title: "AVAILABILITY", val: "Open", type: "progress" },
            { id: "002", title: "STUDIO STATS", val: "20+ Wins", type: "data" },
            { id: "003", title: "EXPERTISE", val: "Creative Dev", type: "text" }
          ].map((item) => (
            <div key={item.id} className="command-cell bg-white/80 backdrop-blur-sm border border-gray-200 p-6 sm:p-7 block rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block mb-3">{item.id} // {item.title}</span>
              {item.type === "progress" ? (
                <div className="flex justify-between items-end mt-2">
                  <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tighter">{item.val}</h4>
                  <div className="h-[2px] w-20 bg-gray-200 rounded-full overflow-hidden">
                     <div className="h-full bg-red-600 w-[60%] animate-loading" />
                  </div>
                </div>
              ) : item.type === "data" ? (
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex justify-between text-[10px] font-mono text-gray-500">
                    <span>Awwwards Tier</span>
                    <span className="text-red-600 font-bold">2024-25</span>
                  </div>
                  <div className="h-[1px] w-full bg-gray-200" />
                  <div className="flex justify-between text-[10px] font-mono text-gray-500">
                    <span>Retention Rate</span>
                    <span className="text-red-600 font-bold">98.2%</span>
                  </div>
                </div>
              ) : (
                <h3 className="text-sm font-medium text-gray-600 mt-3 leading-snug">
                  Transforming static interfaces into <span className="italic text-red-600 font-semibold">narrative apertures</span>.
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 60%; }
        }
        .animate-loading {
          animation: loading 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};