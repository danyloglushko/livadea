import { Users } from 'lucide-react';

export const Founders = () => {
  return (
    <section id="founders" className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">The Team Behind Livadea</p>
          <h2 className="heading-section text-forest mb-6">
            A Family Team, A Shared Vision
          </h2>
          <div className="divider-elegant mb-10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Icon/Visual Element */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              {/* Main circle with icon */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-card border-2 border-border/50 shadow-elegant flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 md:w-20 md:h-20 text-forest mx-auto mb-4" strokeWidth={1.5} />
                  <p className="font-serif text-xl md:text-2xl text-forest">Husband & Wife</p>
                  <p className="text-sm text-muted-foreground mt-1">Founders</p>
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-4 rounded-full border border-accent/20" />
              <div className="absolute inset-0 -m-8 rounded-full border border-accent/10" />
              {/* Accent elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-secondary/60 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-gold/30 rounded-full" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 body-regular text-muted-foreground">
              <p>
                Livadea Holdings is led by a husband-and-wife team united by a shared purpose: 
                to build something meaningful that endures. Both are proud graduates of the 
                University of Texas at Austin, bringing backgrounds in engineering, the sciences, 
                and education to their work.
              </p>
              <p>
                Their approach reflects their training — analytical thinking, disciplined execution, 
                and a deep respect for the details that make businesses work. But at the heart of 
                everything is a people-first mindset. They believe that great companies are built 
                on trust, care, and genuine relationships.
              </p>
              <p>
                Together, they founded Livadea as a family-owned firm with a clear mission: to 
                acquire and operate businesses with integrity, preserve the legacies of the 
                owners who built them, and grow those businesses thoughtfully for the long term. 
                This isn't just a business venture — it's a family commitment.
              </p>
            </div>

            {/* Founder attributes */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: 'UT Austin Alumni', icon: '🤘' },
                { label: 'Engineering & Science', icon: '⚙️' },
                { label: 'Education Background', icon: '📚' },
                { label: 'Long-Term Focus', icon: '🌱' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
