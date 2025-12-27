import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-texas-landscape.jpg';
import { Check } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Central Texas Hill Country landscape at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="eyebrow text-cream/80 mb-6 opacity-0 animate-fade-up">
            Central Texas Family Holding Company
          </p>

          {/* Main Headline */}
          <h1 className="heading-display text-cream mb-6 opacity-0 animate-fade-up animation-delay-200 text-balance">
            Built for the Long Road
          </h1>

          {/* Sharper Subheadline */}
          <p className="body-large text-cream/90 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-400">
            We acquire and operate small-to-mid sized businesses in Central Texas — 
            for owners ready to transition with confidence, not compromise.
          </p>

          {/* Proof Bullets */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-10 opacity-0 animate-fade-up animation-delay-500">
            <div className="flex items-center gap-2 text-cream/85">
              <Check className="w-4 h-4 text-gold-light" />
              <span className="text-sm">Long-term hold, no flip</span>
            </div>
            <div className="flex items-center gap-2 text-cream/85">
              <Check className="w-4 h-4 text-gold-light" />
              <span className="text-sm">Operator mindset</span>
            </div>
            <div className="flex items-center gap-2 text-cream/85">
              <Check className="w-4 h-4 text-gold-light" />
              <span className="text-sm">Confidential process</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-600">
            <div className="flex flex-col items-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Private Intro Call
              </Button>
              <span className="text-cream/60 text-xs mt-2">Confidential. No brokers. 15 minutes.</span>
            </div>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <div className="w-px h-16 bg-gradient-to-b from-cream/0 via-cream/50 to-cream/0" />
      </div>
    </section>
  );
};
