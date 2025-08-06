import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button, AnimatedSection } from '@/components/ui';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AMIcon } from '@/components/ui/AMIcon';
import { ArrowRight, Play, Sparkles, TrendingUp, Users, DollarSign, MousePointer, ArrowUpRight, ArrowDownRight, Eye, Zap } from 'lucide-react';

// Mock data for charts
const marketingData = [
  { name: 'Jan', reach: 2400, clicks: 1800, conversions: 1200 },
  { name: 'Feb', reach: 3200, clicks: 2400, conversions: 1800 },
  { name: 'Mar', reach: 2800, clicks: 2200, conversions: 1600 },
  { name: 'Apr', reach: 4000, clicks: 3200, conversions: 2400 },
  { name: 'May', reach: 3600, clicks: 2800, conversions: 2000 },
  { name: 'Jun', reach: 4800, clicks: 3800, conversions: 3000 },
];

const campaignData = [
  { name: 'Social', value: 35, color: '#3B82F6' },
  { name: 'Email', value: 25, color: '#10B981' },
  { name: 'Search', value: 20, color: '#F59E0B' },
  { name: 'Direct', value: 20, color: '#EF4444' },
];

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, icon, color }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setAnimatedValue(prev => Math.min(prev + increment, numericValue));
      } else {
        setAnimatedValue(numericValue);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="glass p-4 border border-white/20 hover:border-white/30 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-lg ${color}`}>
            {icon}
          </div>
          <Badge 
            variant={change >= 0 ? "secondary" : "destructive"}
            className="flex items-center gap-1 text-xs"
          >
            {change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {Math.abs(change)}%
          </Badge>
        </div>
        <div>
          <h3 className="text-xs font-medium text-muted-foreground mb-1">{title}</h3>
          <p className="text-lg font-bold text-foreground">
            {value.includes('$') ? '$' : ''}{animatedValue.toLocaleString()}{value.includes('%') ? '%' : ''}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const kpiData = [
    {
      title: 'Total Reach',
      value: '2.4M',
      change: 12.5,
      icon: <Eye className="w-4 h-4 text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Users',
      value: '847K',
      change: 8.2,
      icon: <Users className="w-4 h-4 text-white" />,
      color: 'bg-green-500'
    },
    {
      title: 'Revenue',
      value: '$1.2M',
      change: -2.1,
      icon: <DollarSign className="w-4 h-4 text-white" />,
      color: 'bg-purple-500'
    },
    {
      title: 'CTR',
      value: '3.2%',
      change: 15.8,
      icon: <MousePointer className="w-4 h-4 text-white" />,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-primary rounded-full opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-secondary rounded-full opacity-15 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-accent rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <AnimatedSection animation="fadeIn" delay={100}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                New: AI-Powered Analytics Dashboard
              </span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection animation="slideUp" delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Build the</span>{' '}
              <span className="text-gradient">Future</span>{' '}
              <span className="text-foreground">of</span>
              <br />
              <span className="text-foreground">Your Business</span>
            </h1>
          </AnimatedSection>

          {/* Subtext */}
          <AnimatedSection animation="slideUp" delay={300}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Empower your team with cutting-edge SaaS tools that scale with your ambitions. 
              From startups to enterprises, we're the platform that grows with you.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="slideUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="gradient" 
                size="lg"
                icon={<AMIcon className="h-5 w-5" />}
                href="/signup"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Play className="h-5 w-5" />}
              >
                Watch Demo
              </Button>
            </div>
          </AnimatedSection>

          {/* Trust Indicators */}
          <AnimatedSection animation="fadeIn" delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm">50k+ Happy Users</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <AMIcon className="h-5 w-5 text-secondary" />
                <span className="text-sm">Enterprise Ready</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Enhanced Interactive Dashboard */}
        <AnimatedSection animation="scale" delay={600} className="mt-16">
          <div className="relative">
            <div className="glass rounded-2xl p-6 mx-auto max-w-6xl border border-white/20">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <AMIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Interactive Dashboard
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time analytics and insights at your fingertips
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Live
                </Badge>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {kpiData.map((kpi) => (
                  <KPICard key={kpi.title} {...kpi} />
                ))}
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Marketing Performance Chart */}
                <Card className="glass p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-foreground">Marketing Performance</h4>
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                      <TrendingUp className="w-3 h-3" />
                      +12.5%
                    </Badge>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={marketingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis 
                        dataKey="name" 
                        stroke="rgba(255,255,255,0.6)"
                        fontSize={10}
                      />
                      <YAxis 
                        stroke="rgba(255,255,255,0.6)"
                        fontSize={10}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '12px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="reach" 
                        stroke="#3B82F6" 
                        strokeWidth={2}
                        dot={{ fill: '#3B82F6', strokeWidth: 1, r: 3 }}
                        activeDot={{ r: 4, stroke: '#3B82F6', strokeWidth: 1 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="clicks" 
                        stroke="#10B981" 
                        strokeWidth={2}
                        dot={{ fill: '#10B981', strokeWidth: 1, r: 3 }}
                        activeDot={{ r: 4, stroke: '#10B981', strokeWidth: 1 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                {/* Campaign Distribution */}
                <Card className="glass p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-foreground">Campaign Distribution</h4>
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                      <Zap className="w-3 h-3" />
                      Live
                    </Badge>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={campaignData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {campaignData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '12px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {campaignData.map((campaign) => (
                      <div key={campaign.name} className="flex items-center gap-2">
                        <div 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: campaign.color }}
                        />
                        <span className="text-xs text-muted-foreground">{campaign.name}</span>
                        <span className="text-xs font-medium text-foreground ml-auto">{campaign.value}%</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glass rounded-lg p-3 animate-float">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-lg p-3 animate-bounce-slow">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
