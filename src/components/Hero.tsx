import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-texas-landscape.jpg';
import { Check, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={heroImage}
          alt="Central Texas Hill Country landscape at golden hour"
          className="w-full h-[120%] object-cover"
        />
      </div>

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 via-transparent to-forest-dark/20" />
      
      {/* Subtle Animated Glow */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, hsl(var(--gold-light) / 0.15) 0%, transparent 70%)',
            animationDuration: '8s'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="eyebrow text-cream/70 mb-6 opacity-0 animate-fade-up tracking-[0.25em]">
            Central Texas Family Holding Company
          </p>

          {/* Main Headline - Enhanced Typography */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-cream mb-8 opacity-0 animate-fade-up animation-delay-200 text-balance">
            Stewards for the Long Road.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-cream/85 mb-12 max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-400 leading-relaxed font-light">
            We acquire and operate Central Texas businesses for owners who care what happens next — 
            to their people, their customers, and their legacy.
          </p>

          {/* Supporting Points */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center mb-12 opacity-0 animate-fade-up animation-delay-500">
            {[
              'Long-term hold. Never flipped.',
              'Employee-first transitions.',
              'Founder-led & confidential.'
            ].map((point, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2.5 text-cream/80 group"
              >
                <div className="w-5 h-5 rounded-full bg-gold-light/20 flex items-center justify-center group-hover:bg-gold-light/30 transition-colors duration-300">
                  <Check className="w-3 h-3 text-gold-light" />
                </div>
                <span className="text-sm md:text-base font-light tracking-wide">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center opacity-0 animate-fade-up animation-delay-600">
            <div className="flex flex-col items-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Start a Confidential Conversation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cream to-cream/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <span className="text-cream/50 text-xs mt-4 font-light tracking-wide">
                No pressure. No brokers. Just a private intro call.
              </span>
            </div>
            <button
              onClick={() => scrollToSection('why-we-founded')}
              className="group flex items-center gap-2 text-cream/80 hover:text-cream transition-all duration-300 text-sm font-medium py-2"
            >
              <span className="relative">
                Meet the Founders
                <span className="absolute bottom-0 left-0 w-full h-px bg-gold-light/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Visual Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Gradient fade into next section */}
        <div className="h-32 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
        
        {/* Decorative line with glow */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 animate-fade-in animation-delay-600">
          <div className="w-px h-12 bg-gradient-to-b from-cream/0 via-cream/40 to-cream/60" />
          <div className="w-2 h-2 rounded-full bg-gold-light/60 animate-pulse" style={{ animationDuration: '3s' }} />
        </div>
      </div>
    </section>
  );
};
