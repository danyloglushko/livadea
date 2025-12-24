import { Phone, Search, Building, FileText, Handshake } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Confidential Intro Call',
    description: 'A brief, no-pressure conversation to understand your situation and goals.',
    timing: '15–30 minutes',
  },
  {
    icon: Search,
    number: '02',
    title: 'Quick Fit Check',
    description: 'We review basic business information to confirm mutual alignment.',
    timing: '1–2 weeks',
  },
  {
    icon: Building,
    number: '03',
    title: 'On-Site Visit',
    description: 'We visit your business, meet your team, and see operations firsthand.',
    timing: 'By arrangement',
  },
  {
    icon: FileText,
    number: '04',
    title: 'LOI & Diligence',
    description: 'A clear Letter of Intent followed by a thorough but respectful diligence process.',
    timing: '2–6 weeks',
  },
  {
    icon: Handshake,
    number: '05',
    title: 'Transition & Stewardship',
    description: 'We work together on a smooth handover and ongoing operational support.',
    timing: 'Tailored to your needs',
  },
];

export const OwnerJourney = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="eyebrow mb-4">The Process</p>
          <h2 className="heading-section text-forest mb-6">
            Your Path to a Thoughtful Transition
          </h2>
          <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
            We keep things simple and move at your pace. Here's what working with us looks like — 
            from first call to ongoing partnership.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-background border-2 border-gold/30 flex items-center justify-center shadow-sm">
                      <step.icon className="w-6 h-6 text-forest" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="card-elegant p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-gold font-medium text-sm">{step.number}</span>
                          <h3 className="font-serif text-xl font-medium text-forest">
                            {step.title}
                          </h3>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                          {step.timing}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Timelines are estimates and vary based on business complexity and your readiness. 
            We never rush — and we never pressure.
          </p>
        </div>
      </div>
    </section>
  );
};
