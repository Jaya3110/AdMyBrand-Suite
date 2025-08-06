import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress/ScrollProgress';
import { Hero } from '@/components/sections/Hero/Hero';
import { PricingCalculator } from '@/components/sections/PricingCalculator/PricingCalculator';
import { Features } from '@/components/sections/Features/Features';
import { StatsSection } from '@/components/sections/Stats/StatsSection';
import { TestimonialsSection } from '@/components/sections/Testimonials/TestimonialsSection';
import { PricingSection } from '@/components/sections/Pricing/PricingSection';
import { FAQ } from '@/components/sections/FAQ/FAQ';
import { CallToAction } from '@/components/sections/CTA/CallToAction';
import { ChatbotWidget } from '@/components/ui/ChatbotWidget/ChatbotWidget';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main>
        <Hero />
        <PricingCalculator />
        <Features />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQ />
        <CallToAction />
      </main>
      
      <Footer />

      {/* Floating Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}
