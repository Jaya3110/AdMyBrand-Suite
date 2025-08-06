import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress/ScrollProgress';
import { AnimatedSection, Button } from '@/components/ui';
import { ArrowLeft, Users, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About <span className="text-gradient">ADmyBRAND AI Suite</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're building the future of business automation and team collaboration.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={200}>
            <div className="glass rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="gradient-primary rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Team</h3>
                  <p className="text-muted-foreground">50+ passionate experts working to make your business better</p>
                </div>
                <div>
                  <div className="gradient-primary rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">Empowering teams to build, scale, and succeed faster than ever</p>
                </div>
                <div>
                  <div className="gradient-primary rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">A world where technology amplifies human potential</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={400}>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                This page is under construction. We're working hard to bring you amazing content 
                about our company, team, and mission. Please check back soon!
              </p>
              <Button variant="outline" href="/" icon={<ArrowLeft className="h-4 w-4" />}>
                Back to Home
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
