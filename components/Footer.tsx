// "use client";
// import React from "react";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import { FaTwitter, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";

// export const Footer = () => {
//   return (
//     <footer className="bg-black pt-24 pb-8 relative overflow-hidden border-t border-white/5">
//       {/* Glow Effects */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[150px] pointer-events-none rounded-full" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
//           {/* Brand Info */}
//           <div className="lg:col-span-5">
//             <Link href="#" className="flex items-center gap-2 mb-6 group inline-flex">
//               <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,43,43,0.4)]">
//                 <span className="font-heading font-bold text-white text-xl">D</span>
//               </div>
//               <span className="font-heading font-bold text-2xl tracking-tight text-white">
//                 Digital <span className="text-primary">Keddy</span>
//               </span>
//             </Link>
//             <p className="text-white/60 text-lg max-w-sm leading-relaxed mb-8">
//               We create award-winning digital experiences that elevate brands and drive exponential growth.
//             </p>
//             <div className="flex gap-4">
//               <SocialLink href="#" icon={<FaTwitter size={20} />} />
//               <SocialLink href="#" icon={<FaInstagram size={20} />} />
//               <SocialLink href="#" icon={<FaLinkedin size={20} />} />
//               <SocialLink href="#" icon={<FaDribbble size={20} />} />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2 lg:col-start-7">
//             <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
//             <ul className="space-y-4">
//               <FooterLink href="#about">About Us</FooterLink>
//               <FooterLink href="#services">Services</FooterLink>
//               <FooterLink href="#projects">Work</FooterLink>
//               <FooterLink href="#process">Process</FooterLink>
//               <FooterLink href="#">Careers</FooterLink>
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="lg:col-span-2">
//             <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
//             <ul className="space-y-4">
//               <FooterLink href="#">Web Development</FooterLink>
//               <FooterLink href="#">UI/UX Design</FooterLink>
//               <FooterLink href="#">SEO Optimization</FooterLink>
//               <FooterLink href="#">Meta Ads</FooterLink>
//               <FooterLink href="#">Performance Mktg</FooterLink>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="lg:col-span-2">
//             <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
//             <ul className="space-y-4 text-white/60">
//               <li>hello@digitalkeddy.com</li>
//               <li>+1 (555) 123-4567</li>
//               <li className="mt-4 pt-4 border-t border-white/10">
//                 123 Innovation Drive<br />
//                 Tech City, TC 90210
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Big Text */}
//         <div className="w-full border-t border-white/10 pt-12 pb-6 flex flex-col md:flex-row justify-between items-center gap-6">
//           <h1 className="font-heading text-6xl md:text-[10vw] font-bold text-white/5 tracking-tighter leading-none select-none pointer-events-none">
//             DIGITAL KEDDY
//           </h1>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
//           <p>&copy; {new Date().getFullYear()} Digital Keddy. All rights reserved.</p>
//           <div className="flex gap-6 mt-4 md:mt-0">
//             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
//   <a 
//     href={href}
//     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
//   >
//     {icon}
//   </a>
// );

// const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
//   <li>
//     <Link 
//       href={href} 
//       className="text-white/60 hover:text-white transition-colors flex items-center gap-1 group w-max"
//     >
//       {children}
//       <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
//     </Link>
//   </li>
// );

"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
`;

// Inline SVG social icons — no react-icons needed
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const DribbbleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
  </svg>
);

const SOCIAL = [
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: DribbbleIcon, href: "#", label: "Dribbble" },
];

const COMPANY_LINKS = ["About Us", "Services", "Work", "Process", "Careers"];
const SERVICE_LINKS = ["Web Development", "UI/UX Design", "SEO Optimization", "Meta Ads", "Performance Mktg"];

const fadeUp = (delay = 0) => ({
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay } },
});

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <>
      <style>{fontStyle}</style>
      <footer ref={ref} className="relative overflow-hidden pt-24 pb-8"
        style={{ background: "linear-gradient(160deg, #040406 0%, #080810 100%)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)",
            filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* Brand */}
            <motion.div className="lg:col-span-5"
              initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0)}>

              {/* Logo */}
              <a href="#" className="inline-flex items-center gap-3 mb-7 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 55%, #ec4899 100%)",
                    boxShadow: "0 0 24px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.25)" }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800,
                    color: "#fff", fontSize: "1.2rem", fontStyle: "italic" }}>D</span>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                  fontSize: "1.3rem", letterSpacing: "-0.03em", color: "#fff" }}>
                  Digital{" "}
                  <span style={{ background: "linear-gradient(135deg, #818cf8 0%, #c084fc 45%, #f472b6 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Keddy
                  </span>
                </span>
              </a>

              <p className="mb-8 max-w-sm"
                style={{ color: "rgba(255,255,255,0.38)", lineHeight: 1.8, fontSize: "0.95rem", fontWeight: 300 }}>
                We create award-winning digital experiences that elevate brands and drive exponential growth.
              </p>

              {/* Social icons */}
              <div className="flex gap-3">
                {SOCIAL.map(({ icon: Icon, href, label }) => (
                  <motion.a key={label} href={href} aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.45)", backdropFilter: "blur(8px)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(139,92,246,0.4)";
                      el.style.color = "#fff";
                      el.style.background = "rgba(139,92,246,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(255,255,255,0.08)";
                      el.style.color = "rgba(255,255,255,0.45)";
                      el.style.background = "rgba(255,255,255,0.04)";
                    }}>
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company links */}
            <motion.div className="lg:col-span-2 lg:col-start-7"
              initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.1)}>
              <h4 className="mb-6" style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.12em", textTransform: "uppercase" }}>Company</h4>
              <ul className="space-y-3.5">
                {COMPANY_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#" className="group inline-flex items-center gap-1 transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.9rem", fontWeight: 300 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>
                      {link}
                      <ArrowUpRight size={13}
                        className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services links */}
            <motion.div className="lg:col-span-2"
              initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.15)}>
              <h4 className="mb-6" style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.12em", textTransform: "uppercase" }}>Services</h4>
              <ul className="space-y-3.5">
                {SERVICE_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#" className="group inline-flex items-center gap-1 transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.9rem", fontWeight: 300 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>
                      {link}
                      <ArrowUpRight size={13}
                        className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div className="lg:col-span-2"
              initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.2)}>
              <h4 className="mb-6" style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.12em", textTransform: "uppercase" }}>Contact</h4>
              <ul className="space-y-4">
                {[
                  { icon: Mail, text: "hello@digitalkeddy.com" },
                  { icon: Phone, text: "+1 (555) 123-4567" },
                  { icon: MapPin, text: "123 Innovation Drive, Tech City" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5">
                    <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(139,92,246,0.7)" }} />
                    <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.5 }}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a href="#" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 55%, #ec4899 100%)",
                  color: "#fff", letterSpacing: "0.01em",
                  boxShadow: "0 0 30px rgba(139,92,246,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.14)" }}>
                Let's Talk
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </motion.a>
            </motion.div>
          </div>

          {/* Watermark */}
          <motion.div className="w-full border-t pt-12 pb-4 overflow-hidden"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}>
            <p className="font-bold leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)", letterSpacing: "-0.04em",
                fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: "nowrap",
                background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              DIGITAL KEDDY
            </p>
          </motion.div>

          {/* Bottom bar */}
          <motion.div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp(0.35)}>
            <p style={{ color: "rgba(255,255,255,0.22)", fontSize: "0.8rem" }}>
              &copy; {new Date().getFullYear()} Digital Keddy. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a key={item} href="#"
                  style={{ color: "rgba(255,255,255,0.22)", fontSize: "0.8rem", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;