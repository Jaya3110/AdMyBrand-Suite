import { AnimatedSection, Button } from '@/components/ui';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 gradient-primary rounded-full opacity-20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-80 h-80 gradient-secondary rounded-full opacity-15 blur-3xl animate-float" />
      </div>

      <div className="mx-auto max-w-4xl">
        <AnimatedSection animation="scale" className="text-center">
          <div className="glass rounded-3xl p-12 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 gradient-primary rounded-xl p-3 animate-bounce-slow">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 gradient-secondary rounded-xl p-3 animate-float">
              <Zap className="h-6 w-6 text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to{' '}
                <span className="text-gradient">transform</span>{' '}
                your business?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of companies already using our platform to scale faster, 
                work smarter, and deliver exceptional results. Start your free trial today.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-muted-foreground">14-day free trial</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-muted-foreground">No credit card required</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-muted-foreground">Cancel anytime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  variant="gradient" 
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Schedule Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img 
                      className="w-6 h-6 rounded-full border-2 border-background" 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=24&h=24&fit=crop&crop=face" 
                      alt="User" 
                    />
                    <img 
                      className="w-6 h-6 rounded-full border-2 border-background" 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" 
                      alt="User" 
                    />
                    <img 
                      className="w-6 h-6 rounded-full border-2 border-background" 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face" 
                      alt="User" 
                    />
                  </div>
                  <span>Trusted by 50k+ teams</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>4.9/5 on all platforms</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
