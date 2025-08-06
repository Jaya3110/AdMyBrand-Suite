import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress/ScrollProgress';
import { PricingSection } from '@/components/sections/Pricing/PricingSection';
import { FAQ } from '@/components/sections/FAQ/FAQ';
import { CallToAction } from '@/components/sections/CTA/CallToAction';
import { AnimatedSection } from '@/components/ui';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main className="pt-32">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-12 px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose your <span className="text-gradient">plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scale your business with confidence. All plans include everything you need 
              to get started, plus advanced features as you grow.
            </p>
          </div>
        </AnimatedSection>

        <PricingSection />
        <FAQ />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
}
