import { AnimatedSection, Accordion } from '@/components/ui';

const faqItems = [
  {
    id: 1,
    title: 'How do I get started with the platform?',
    content: (
      <div>
        <p className="mb-3">
          Getting started is simple! Sign up for a free 14-day trial, no credit card required. 
          You'll have access to all features during your trial period.
        </p>
        <p>
          Our onboarding team will guide you through the setup process and help you 
          configure the platform to match your specific needs.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: 'What integrations do you support?',
    content: (
      <div>
        <p className="mb-3">
          We support 100+ integrations including popular tools like:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>Slack, Microsoft Teams, Discord</li>
          <li>GitHub, GitLab, Bitbucket</li>
          <li>Salesforce, HubSpot, Pipedrive</li>
          <li>Jira, Asana, Monday.com</li>
          <li>Zapier for custom workflows</li>
        </ul>
        <p>
          Don't see your tool? We offer custom integrations for Enterprise customers.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: 'Is my data secure and compliant?',
    content: (
      <div>
        <p className="mb-3">
          Absolutely. Security is our top priority. We provide:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>SOC 2 Type II compliance</li>
          <li>GDPR and CCPA compliance</li>
          <li>End-to-end encryption</li>
          <li>Regular security audits</li>
          <li>99.9% uptime SLA</li>
        </ul>
        <p>
          Your data is stored in secure, geographically distributed data centers 
          with automatic backups and disaster recovery.
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: 'Can I customize the platform for my business?',
    content: (
      <div>
        <p className="mb-3">
          Yes! Our platform is highly customizable:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>Custom workflows and automation</li>
          <li>Branded interface with your colors and logo</li>
          <li>Custom fields and data structures</li>
          <li>API access for custom integrations</li>
          <li>White-label options for Enterprise</li>
        </ul>
        <p>
          Our Professional Services team can help with advanced customizations.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: 'What kind of support do you provide?',
    content: (
      <div>
        <p className="mb-3">
          We offer comprehensive support across all plans:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><strong>Starter:</strong> Email support (24-48h response)</li>
          <li><strong>Professional:</strong> Priority email + chat support</li>
          <li><strong>Enterprise:</strong> 24/7 phone support + dedicated account manager</li>
        </ul>
        <p>
          Plus, access to our extensive knowledge base, video tutorials, 
          and community forum for all customers.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: 'How does billing and pricing work?',
    content: (
      <div>
        <p className="mb-3">
          Our pricing is transparent and flexible:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>Monthly or annual billing (save 20% annually)</li>
          <li>No setup fees or hidden costs</li>
          <li>Add or remove users anytime</li>
          <li>Pro-rated billing for plan changes</li>
          <li>30-day money-back guarantee</li>
        </ul>
        <p>
          Enterprise customers can get custom pricing with volume discounts 
          and flexible payment terms.
        </p>
      </div>
    )
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently asked{' '}
            <span className="text-gradient">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our platform, billing, and support. 
            Can't find what you're looking for? Contact our team.
          </p>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection animation="slideUp" delay={200}>
          <Accordion 
            items={faqItems}
            allowMultiple={true}
            className="mb-12"
          />
        </AnimatedSection>

        {/* Contact CTA */}
        <AnimatedSection animation="fadeIn" delay={400} className="text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Get in touch and we'll get back to you 
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
