import { useState } from 'react';
import { AnimatedSection, PricingCard, Badge } from '@/components/ui';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    interval: 'month' as const,
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Core integrations',
      'Mobile app access'
    ],
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: 79,
    interval: 'month' as const,
    description: 'Ideal for growing businesses',
    popular: true,
    features: [
      'Up to 25 team members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'All integrations',
      'Custom workflows',
      'API access',
      'Advanced security'
    ],
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 199,
    interval: 'month' as const,
    description: 'For large teams and organizations',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 phone support',
      'Custom integrations',
      'Advanced workflows',
      'Full API access',
      'Enterprise security',
      'Custom training',
      'Dedicated account manager'
    ],
    buttonText: 'Contact Sales',
  },
];

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (basePrice: number) => {
    return isYearly ? Math.round(basePrice * 0.8) : basePrice;
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent{' '}
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include a 14-day free trial 
            with no credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center glass rounded-lg p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isYearly 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <Badge variant="success" size="sm">Save 20%</Badge>
            </button>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="slideUp"
              delay={200 + index * 100}
            >
              <PricingCard
                plan={{
                  ...plan,
                  price: getPrice(plan.price),
                  interval: isYearly ? 'year' : 'month',
                }}
                onSelect={() => console.log(`Selected ${plan.name} plan`)}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ Section */}
        <AnimatedSection animation="fadeIn" delay={600} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h3>
            <p className="text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Can I change plans anytime?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. 
                  Changes take effect immediately.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-muted-foreground text-sm">
                  We accept all major credit cards, PayPal, and bank transfers 
                  for enterprise customers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Is there a free trial?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Yes, all plans come with a 14-day free trial. 
                  No credit card required to get started.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Can I cancel anytime?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Absolutely. You can cancel your subscription at any time. 
                  No long-term contracts or cancellation fees.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Do you offer discounts for nonprofits?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer special pricing for nonprofits and educational 
                  institutions. Contact us for details.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  What about enterprise features?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Enterprise plans include advanced security, custom integrations, 
                  and dedicated support. Contact sales for custom pricing.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
