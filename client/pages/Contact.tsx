import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress/ScrollProgress';
import { AnimatedSection, Button, Card, Input } from '@/components/ui';
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get in <span className="text-gradient">touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slideLeft" delay={200}>
              <Card variant="glass" className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      label="First Name"
                      placeholder="Your first name"
                      required
                    />
                    <Input 
                      label="Last Name"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                  <Input 
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    required
                  />
                  <Input 
                    label="Company"
                    placeholder="Your company name"
                  />
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea 
                      className="w-full h-32 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background text-foreground"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <Button variant="gradient" size="lg" fullWidth>
                    Send Message
                  </Button>
                </form>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="slideRight" delay={400}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Choose the best way to reach us. We're here to help and answer any questions you might have.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card variant="outline" className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="gradient-primary rounded-lg p-3">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">hello@admybrand.com</p>
                        <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                      </div>
                    </div>
                  </Card>

                  <Card variant="outline" className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="gradient-primary rounded-lg p-3">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                      </div>
                    </div>
                  </Card>

                  <Card variant="outline" className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="gradient-primary rounded-lg p-3">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                        <p className="text-muted-foreground">Available in app</p>
                        <p className="text-sm text-muted-foreground">Real-time support for customers</p>
                      </div>
                    </div>
                  </Card>

                  <Card variant="outline" className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="gradient-primary rounded-lg p-3">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Office</h3>
                        <p className="text-muted-foreground">123 Business St</p>
                        <p className="text-muted-foreground">San Francisco, CA 94105</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="text-center pt-6">
                  <Button variant="outline" href="/" icon={<ArrowLeft className="h-4 w-4" />}>
                    Back to Home
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
