import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, DollarSign, MousePointer, Calendar, ArrowUpRight, ArrowDownRight, Eye, Zap } from 'lucide-react';

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

const timeRanges = [
  { id: 'daily', label: 'Daily', active: false },
  { id: 'weekly', label: 'Weekly', active: true },
  { id: 'monthly', label: 'Monthly', active: false },
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
    const numericValue = parseInt(value.replace(/,/g, ''));
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
      <Card className="glass p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${color}`}>
            {icon}
          </div>
          <Badge 
            variant={change >= 0 ? "secondary" : "destructive"}
            className="flex items-center gap-1"
          >
            {change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {Math.abs(change)}%
          </Badge>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
          <p className="text-2xl font-bold text-foreground">
            {animatedValue.toLocaleString()}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export const InteractiveDashboard: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState('weekly');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const kpiData = [
    {
      title: 'Total Reach',
      value: '2.4M',
      change: 12.5,
      icon: <Eye className="w-5 h-5 text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Users',
      value: '847K',
      change: 8.2,
      icon: <Users className="w-5 h-5 text-white" />,
      color: 'bg-green-500'
    },
    {
      title: 'Revenue',
      value: '$1.2M',
      change: -2.1,
      icon: <DollarSign className="w-5 h-5 text-white" />,
      color: 'bg-purple-500'
    },
    {
      title: 'CTR',
      value: '3.2%',
      change: 15.8,
      icon: <MousePointer className="w-5 h-5 text-white" />,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-primary rounded-full opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-secondary rounded-full opacity-15 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-accent rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Interactive <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time analytics and insights at your fingertips. Monitor your performance 
            with beautiful, interactive charts and live data visualization.
          </p>
        </motion.div>

        {/* Time Range Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="glass rounded-lg p-1 border border-white/20">
            {timeRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => setSelectedRange(range.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedRange === range.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {kpiData.map((kpi, index) => (
            <KPICard key={kpi.title} {...kpi} />
          ))}
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Marketing Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Marketing Performance</h3>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12.5%
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={marketingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.6)"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.6)"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="reach" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="clicks" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="conversions" 
                    stroke="#F59E0B" 
                    strokeWidth={3}
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#F59E0B', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Campaign Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Campaign Distribution</h3>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Live
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={campaignData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
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
                      color: 'white'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {campaignData.map((campaign) => (
                  <div key={campaign.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: campaign.color }}
                    />
                    <span className="text-sm text-muted-foreground">{campaign.name}</span>
                    <span className="text-sm font-medium text-foreground ml-auto">{campaign.value}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to explore your full dashboard?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get access to advanced analytics, custom reports, and real-time insights 
              that will transform your business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gradient" 
                size="lg"
                href="/demo"
                className="group"
              >
                <span>View Full Demo</span>
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/pricing"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 