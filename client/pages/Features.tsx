import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress/ScrollProgress';
import { Features as FeaturesSection } from '@/components/sections/Features/Features';
import { CallToAction } from '@/components/sections/CTA/CallToAction';
import { AnimatedSection } from '@/components/ui';

export default function Features() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main className="pt-32">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-12 px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Powerful <span className="text-gradient">features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover all the tools and capabilities that make our platform the perfect 
              choice for modern businesses looking to scale and succeed.
            </p>
          </div>
        </AnimatedSection>

        <FeaturesSection />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
}
