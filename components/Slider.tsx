"use client"
import React, { useState, useEffect, useCallback } from 'react';


interface Slide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'web-dev' | 'seo' | 'digital-marketing' | 'ui-ux';
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Crafting responsive, high-performance web applications with modern frameworks.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop',
    category: 'web-dev'
  },
  {
    id: 2,
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher with data-driven SEO strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop',
    category: 'seo'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Engage audiences and drive conversions through multi-channel campaigns.',
    imageUrl: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2070&auto=format&fit=crop',
    category: 'digital-marketing'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that users love to interact with.',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop',
    category: 'ui-ux'
  }
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const currentSlide = slides[currentIndex];

  // Helper to get gradient based on category
  const getOverlayGradient = (category: Slide['category']) => {
    const gradients = {
      'web-dev': 'from-blue-900/70 via-blue-900/40 to-transparent',
      'seo': 'from-emerald-900/70 via-emerald-900/40 to-transparent',
      'digital-marketing': 'from-purple-900/70 via-purple-900/40 to-transparent',
      'ui-ux': 'from-rose-900/70 via-rose-900/40 to-transparent'
    };
    return gradients[category];
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
      {/* Main Image Container */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={currentSlide.imageUrl}
          alt={currentSlide.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100"
        />
        
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${getOverlayGradient(currentSlide.category)}`} />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className={`transform transition-all duration-700 delay-100 ${
            isAnimating ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            {/* Category Badge */}
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30">
              {currentSlide.category.split('-').join(' ')}
            </span>
            
            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {currentSlide.title}
            </h2>
            
            {/* Description */}
            <p className="text-white/90 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              {currentSlide.description}
            </p>
            
            {/* CTA Button */}
            <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm md:text-base hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore {currentSlide.title}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 md:gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentIndex
                ? 'w-8 md:w-10 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-mono">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default ImageSlider;