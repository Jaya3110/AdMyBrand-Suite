import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Calculator, Users, Zap, Rocket, Building } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  basePrice: number;
  perUserPrice: number;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    basePrice: 29,
    perUserPrice: 5,
    icon: <Zap className="w-6 h-6" />,
    features: ['Basic analytics', 'Up to 10 projects', 'Email support']
  },
  {
    id: 'pro',
    name: 'Pro',
    basePrice: 89,
    perUserPrice: 12,
    icon: <Rocket className="w-6 h-6" />,
    features: ['Advanced analytics', 'Unlimited projects', 'Priority support', 'API access'],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    basePrice: 199,
    perUserPrice: 25,
    icon: <Building className="w-6 h-6" />,
    features: ['Custom analytics', 'White-label solution', '24/7 phone support', 'Custom integrations']
  }
];

export function PricingCalculator() {
  const [selectedTier, setSelectedTier] = useState<string>('pro');
  const [teamSize, setTeamSize] = useState<number>(5);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [animatedTotal, setAnimatedTotal] = useState<number>(0);

  const currentTier = tiers.find(tier => tier.id === selectedTier)!;
  const monthlyTotal = currentTier.basePrice + (currentTier.perUserPrice * teamSize);
  const yearlyTotal = Math.round(monthlyTotal * 12 * 0.85); // 15% yearly discount
  const total = isYearly ? yearlyTotal : monthlyTotal;

  useEffect(() => {
    const duration = 500;
    const steps = 30;
    const stepValue = (total - animatedTotal) / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setAnimatedTotal(prev => prev + stepValue);
      } else {
        setAnimatedTotal(total);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [total]);

  const handleTeamSizeChange = (value: string) => {
    const num = parseInt(value) || 1;
    if (num >= 1 && num <= 100) {
      setTeamSize(num);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Calculator className="w-8 h-8 text-primary" />
            <Badge variant="secondary" className="text-sm font-medium">
              Pricing Calculator
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Calculate Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Customize your pricing based on team size and billing preferences. 
            See real-time cost updates with our interactive calculator.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
          >
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-lg font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Save 15%
                </Badge>
              )}
            </div>

            {/* Team Size Input */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Team Size</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="1"
                      max="100"
                      value={teamSize}
                      onChange={(e) => handleTeamSizeChange(e.target.value)}
                      className="w-24 text-lg font-semibold text-center"
                    />
                    <span className="text-muted-foreground">team members</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Slider
                      value={[teamSize]}
                      onValueChange={(value) => setTeamSize(value[0])}
                      max={100}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  key={teamSize}
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-center p-6 glass-dark rounded-2xl"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {teamSize}
                  </div>
                  <div className="text-muted-foreground">
                    {teamSize === 1 ? 'team member' : 'team members'}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Tier Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Choose Your Plan</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {tiers.map((tier) => (
                  <motion.div
                    key={tier.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <Card 
                      className={`p-6 cursor-pointer transition-all duration-300 ${
                        selectedTier === tier.id 
                          ? 'ring-2 ring-primary bg-primary/5 border-primary/20' 
                          : 'hover:border-primary/40'
                      }`}
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      {tier.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                          Most Popular
                        </Badge>
                      )}
                      
                      <div className="text-center mb-4">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                          selectedTier === tier.id ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          {tier.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{tier.name}</h4>
                        <div className="text-2xl font-bold text-primary">
                          ${isYearly ? Math.round(tier.basePrice * 12 * 0.85) : tier.basePrice}
                          <span className="text-sm text-muted-foreground font-normal">
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          + ${isYearly ? Math.round(tier.perUserPrice * 12 * 0.85) : tier.perUserPrice}
                          /{isYearly ? 'year' : 'month'} per user
                        </div>
                      </div>

                      <ul className="space-y-2 text-sm">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Total Cost Display */}
            <motion.div
              layout
              className="text-center p-8 glass rounded-2xl border border-primary/20"
            >
              <h3 className="text-2xl font-semibold mb-4">Total Cost</h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedTier}-${teamSize}-${isYearly}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <div className="text-5xl md:text-6xl font-bold text-gradient">
                    ${Math.round(animatedTotal).toLocaleString()}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    per {isYearly ? 'year' : 'month'}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="font-semibold">Base Price</div>
                      <div className="text-primary">
                        ${isYearly ? Math.round(currentTier.basePrice * 12 * 0.85) : currentTier.basePrice}
                      </div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="font-semibold">Per User</div>
                      <div className="text-primary">
                        ${isYearly ? Math.round(currentTier.perUserPrice * 12 * 0.85) : currentTier.perUserPrice}
                      </div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="font-semibold">Team Size</div>
                      <div className="text-primary">{teamSize}</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="font-semibold">Billing</div>
                      <div className="text-primary">{isYearly ? 'Yearly' : 'Monthly'}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <Button size="lg" className="mt-8 px-8 py-3 text-lg">
                Get Started with {currentTier.name}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
