import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles, Zap, Globe, Shield } from "lucide-react";

const WORDS = ["products", "experiences", "interfaces", "brands", "platforms"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&family=JetBrains+Mono:wght@300;400;500&display=swap');
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />
      </div>

      {/* Navigation */}
   

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 mb-8"
            >
              <Sparkles size={14} className="text-red-500" />
              <span className="text-xs font-mono text-gray-600 tracking-wide">
                DIGITAL AGENCY — NEW DELHI
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                We build
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                digital{" "}
              </span>
              <div className="relative inline-block h-[1.2em] overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    className="absolute left-0 inline-block text-red-500 whitespace-nowrap"
                  >
                    {WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible">{WORDS[0]}</span>
              </div>
              <br />
              <span className="text-red-500">that convert.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed max-w-md mb-8"
            >
              Strategy-led design and engineering for ambitious brands. 
              We don't just make things look good — we make them perform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#"
                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                View Our Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="px-8 py-4 border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-all inline-flex items-center gap-2"
              >
                Start a project
                <ChevronRight size={18} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-4 gap-6 pt-8 border-t border-gray-100"
            >
              {[
                { value: "120+", label: "Projects" },
                { value: "8 yrs", label: "Experience" },
                { value: "40+", label: "Clients" },
                { value: "12", label: "Awards" }
              ].map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs font-mono text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Modern Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-xl">
              {/* Abstract Shape */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/5 rounded-full blur-2xl" />
              
              {/* Main Card */}
              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="w-full h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center">
                      <Zap className="text-white/20" size={40} />
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="text-sm font-semibold text-gray-900">Brand Strategy</div>
                      <div className="text-xs text-gray-500 mt-1">01 — Service</div>
                    </div>
                  </div>
                  <div className="space-y-3 pt-8">
                    <div className="p-4 bg-gray-900 rounded-xl">
                      <div className="text-sm font-semibold text-white">UI/UX Design</div>
                      <div className="text-xs text-gray-400 mt-1">02 — Service</div>
                    </div>
                    <div className="w-full h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Globe className="text-white/20" size={40} />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-100 rounded-xl">
                    <div className="text-xs font-mono text-gray-400">WEB DEVELOPMENT</div>
                  </div>
                  <div className="p-4 border border-gray-100 rounded-xl">
                    <div className="text-xs font-mono text-gray-400">AI SOLUTIONS</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-lg px-6 py-3 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-red-500" />
                  <span className="text-xs font-mono font-medium">Award Winning Agency</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 bg-gray-900">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {["BRANDING", "UI/UX DESIGN", "WEB DEVELOPMENT", "MOTION & ANIMATION", "AI INTEGRATION", "DIGITAL STRATEGY"].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm font-mono text-white/40 tracking-wider">{item}</span>
              <span className="w-1 h-1 bg-red-500 rounded-full" />
            </div>
          ))}
          {["BRANDING", "UI/UX DESIGN", "WEB DEVELOPMENT", "MOTION & ANIMATION", "AI INTEGRATION", "DIGITAL STRATEGY"].map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4">
              <span className="text-sm font-mono text-white/40 tracking-wider">{item}</span>
              <span className="w-1 h-1 bg-red-500 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}