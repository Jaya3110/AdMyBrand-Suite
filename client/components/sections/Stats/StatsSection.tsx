import { AnimatedSection } from '@/components/ui';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Active Users',
    value: '50,000+',
    description: 'Teams building with our platform',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    id: 2,
    name: 'Countries',
    value: '150+',
    description: 'Global reach across continents',
    icon: Globe,
    color: 'text-green-500'
  },
  {
    id: 3,
    name: 'Uptime',
    value: '99.99%',
    description: 'Guaranteed service reliability',
    icon: TrendingUp,
    color: 'text-purple-500'
  },
  {
    id: 4,
    name: 'API Requests',
    value: '1B+',
    description: 'Monthly API calls processed',
    icon: Zap,
    color: 'text-orange-500'
  }
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by{' '}
            <span className="text-gradient">industry leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform powers businesses of all sizes, from startups to Fortune 500 companies. 
            See how we're making an impact worldwide.
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimatedSection
                key={stat.id}
                animation="slideUp"
                delay={100 + index * 100}
              >
                <div className="text-center group">
                  <div className="glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 gradient-primary`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-1">
                      {stat.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Company Logos */}
        <AnimatedSection animation="fadeIn" delay={600} className="mt-20">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {/* Company logos would go here - using placeholder divs */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-lg p-4 flex items-center justify-center h-16">
                <div className="w-20 h-8 bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 rounded"></div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom Message */}
        <AnimatedSection animation="slideUp" delay={800} className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join the growing community
            </h3>
            <p className="text-muted-foreground mb-6">
              From small startups to large enterprises, teams choose our platform 
              to accelerate their growth and achieve their goals faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Start Building Today
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
