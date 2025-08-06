import { AnimatedSection, Card } from '@/components/ui';
import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Users, 
  Smartphone,
  Cloud,
  Lock,
  Lightbulb
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with optimized performance that scales to millions of users without breaking a sweat.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy worldwide with our edge network. 50+ data centers across 6 continents for ultra-low latency.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights with AI-powered analytics. Make data-driven decisions with beautiful dashboards.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built for teams with real-time collaboration, role-based permissions, and seamless workflow integration.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Native mobile experience with offline support. Your business never stops, even when you\'re on the go.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Serverless architecture with auto-scaling, zero downtime deployments, and 99.99% SLA guarantee.',
  },
  {
    icon: Lock,
    title: 'Privacy Focused',
    description: 'GDPR compliant with zero data retention. Your data stays yours, always encrypted, never shared.',
  },
  {
    icon: Lightbulb,
    title: 'AI-Powered',
    description: 'Intelligent automation and insights powered by machine learning to help you work smarter, not harder.',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to{' '}
            <span className="text-gradient">succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed for modern businesses. Scale faster, work smarter, 
            and deliver exceptional experiences to your customers.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection
                key={feature.title}
                animation="slideUp"
                delay={100 + index * 100}
              >
                <Card 
                  variant="glass"
                  hoverable
                  className="h-full p-6 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary rounded-lg p-3 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fadeIn" delay={800} className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of teams already building the future with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Start Free Trial
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
