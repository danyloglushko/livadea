import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do you handle confidentiality?',
    answer: 'Every conversation is confidential from day one. We never share your information with third parties, and we sign NDAs before receiving any sensitive materials. Your employees, customers, and competitors will never know we spoke unless you decide to move forward.',
  },
  {
    question: 'What happens to my employees after a sale?',
    answer: 'Employee continuity is a priority for us. We acquire businesses specifically because of the teams that run them. We work to retain key people, honor existing commitments, and provide stability — not layoffs or restructuring.',
  },
  {
    question: "Will you change my company's name or brand?",
    answer: "Rarely. We typically keep the name, brand, and identity intact. Your reputation was earned over years — we want to build on it, not erase it. If changes ever make sense, we would discuss them with you first.",
  },
  {
    question: 'What kind of businesses do you look for?',
    answer: 'We focus on profitable, established businesses with $1M–$10M in revenue, typically in Central Texas. We look for strong teams, loyal customers, and owners who care about what happens after they leave. Industry matters less than fundamentals.',
  },
  {
    question: 'Are you flexible on deal structure?',
    answer: 'Yes. We understand every situation is different. We can work with earnouts, seller financing, transition consulting arrangements, or other structures that help you feel confident in the outcome.',
  },
  {
    question: 'How long does the process take?',
    answer: 'Most acquisitions take 2–4 months from first meeting to close. This depends on business complexity, your readiness, and how quickly we can complete diligence. We move at your pace and never pressure.',
  },
  {
    question: 'Why sell to a family holding company instead of private equity?',
    answer: 'Private equity firms are typically on a 3–5 year timeline and focused on maximizing returns for investors. We have no outside investors and no exit deadline. When we buy, we are committing for the long haul — which means we are incentivized to take care of your business, not squeeze it.',
  },
  {
    question: 'What information do I need for the first call?',
    answer: 'Just a general sense of your business: what you do, rough revenue and profitability, how long you have owned it, and why you are considering a transition. We do not need financials upfront — that comes later if we both want to move forward.',
  },
];

export const SellerFAQ = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Questions & Answers</p>
            <h2 className="heading-section text-forest mb-6">
              Common Questions from Business Owners
            </h2>
            <p className="body-regular text-muted-foreground">
              We know selling a business is a significant decision. Here are answers to 
              the questions we hear most often.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium text-forest hover:text-forest/80 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
