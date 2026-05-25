import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import { WorldMap } from "@/components/map";
import ImageReveal from "@/components/lightswind/image-reveal";
import SlidingLogoMarquee from "@/components/lightswind/sliding-logo-marquee";
import { Accordion } from "@/components/lightswind/accordion";
import ThreeDHoverGallery from "@/components/lightswind/3d-hover-gallery";
import ThreeDImageCarousel from "@/components/lightswind/3d-image-carousel";
import ImageSlider3D from "@/components/lightswind/3d-image-slider";
import DemoRadialScrollGalleryBento from "@/components/portfolio-and-image-gallery";
import PremiumBlogSection from "@/components/Blogs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MacbookScrollDemo/>
      <Services />
      {/* <LampDemo/> */}
      <Portfolio />
      {/* <DemoRadialScrollGalleryBento/> */}
      
      <Process />
      <PremiumBlogSection/>
      {/* <ThreeDImageCarousel/> */}
      {/* <Testimonials /> */}
      {/* <Stats /> */}

        <ImageSlider3D/>
      {/* <ImageReveal/> */}
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}