import foundersLondon from '@/assets/founders-london.jpeg';
import foundersVienna from '@/assets/founders-vienna.jpeg';

export const FoundersGallery = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-4">Real People, Real Stewardship</p>
            <h2 className="heading-section text-forest mb-6">
              We Show Up
            </h2>
            <div className="space-y-6 body-regular text-muted-foreground">
              <p>
                Livadea isn't a fund or a faceless institution. It's us — a husband-and-wife team 
                who believe that relationships are built in person, over time, and with genuine care.
              </p>
              <p>
                We travel to meet the people we work with. We invest in long-term relationships — 
                with business owners, with teams, and with the communities where we operate. 
                That's how we've always worked, and it's how we'll continue.
              </p>
              <p className="text-forest font-medium">
                When you partner with Livadea, you're partnering with people who answer their own phone.
              </p>
            </div>
          </div>

          {/* Photos */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={foundersLondon}
                  alt="The founders building relationships abroad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elegant mt-8">
                <img
                  src={foundersVienna}
                  alt="The founders investing in long-term connections"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
