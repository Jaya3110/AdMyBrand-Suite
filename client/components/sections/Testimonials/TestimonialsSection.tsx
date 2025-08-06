import { AnimatedSection, Testimonial } from '@/components/ui';

const testimonials = [
  {
    author: {
      name: 'Sarah Chen',
      title: 'CTO',
      company: 'TechFlow',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=100&h=100&fit=crop&crop=face'
    },
    content: 'This platform transformed how our team collaborates. The analytics insights helped us increase productivity by 40% in just three months.',
    rating: 5
  },
  {
    author: {
      name: 'Marcus Rodriguez',
      title: 'Product Manager',
      company: 'InnovateCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    content: 'The best investment we\'ve made for our business. Customer support is outstanding, and the features keep getting better every month.',
    rating: 5
  },
  {
    author: {
      name: 'Emily Watson',
      title: 'Founder',
      company: 'StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    content: 'As a startup, we needed something powerful yet affordable. This platform gave us enterprise-level features at a fraction of the cost.',
    rating: 5
  },
  {
    author: {
      name: 'David Kim',
      title: 'VP Engineering',
      company: 'ScaleCore',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    content: 'Security and compliance were our top concerns. This platform exceeded our expectations with SOC 2 compliance and excellent data protection.',
    rating: 5
  },
  {
    author: {
      name: 'Lisa Thompson',
      title: 'Operations Director',
      company: 'GlobalTech',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    content: 'The automation features saved us countless hours. Our team can now focus on strategic work instead of repetitive tasks.',
    rating: 5
  },
  {
    author: {
      name: 'Alex Johnson',
      title: 'CEO',
      company: 'FutureBuilders',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    content: 'Incredible platform that scales with your business. We went from 10 to 100 employees and the platform handled it seamlessly.',
    rating: 5
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by teams{' '}
            <span className="text-gradient">worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of companies that trust our platform to power their growth. 
            See what real customers have to say about their experience.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fadeIn" delay={200} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50k+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">4.9★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">150+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={`${testimonial.author.name}-${index}`}
              animation="slideUp"
              delay={300 + index * 100}
            >
              <Testimonial
                author={testimonial.author}
                content={testimonial.content}
                rating={testimonial.rating}
                variant="card"
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="slideUp" delay={800} className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join the success stories
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your journey today and become our next success story. 
              See why teams choose us over the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Start Free Trial
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Read Case Studies
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
