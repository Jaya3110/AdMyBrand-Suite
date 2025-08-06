import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const botResponses = {
  pricing: [
    "Our pricing starts at $29/month for the Starter plan, $89/month for Pro, and $199/month for Enterprise. Each plan includes per-user pricing that scales with your team.",
    "We offer flexible pricing with monthly and yearly options. Yearly plans include a 15% discount!",
    "You can calculate your exact cost using our pricing calculator above. It takes into account your team size and billing preference."
  ],
  features: [
    "Our platform includes advanced analytics, unlimited projects, API access, custom integrations, and 24/7 support depending on your plan.",
    "Key features include real-time dashboards, team collaboration tools, automated workflows, and enterprise-grade security.",
    "We offer white-label solutions, custom analytics, and dedicated support for Enterprise customers."
  ],
  support: [
    "We provide email support for Starter plans, priority support for Pro plans, and 24/7 phone support for Enterprise customers.",
    "Our support team is available to help with onboarding, technical questions, and feature guidance.",
    "You can also access our knowledge base, video tutorials, and community forums for self-service support."
  ],
  general: [
    "I'm here to help answer questions about our pricing, features, and support options. What would you like to know?",
    "Feel free to ask me about our plans, features, or how we can help your business grow!",
    "I can provide information about pricing, features, integrations, and support. How can I assist you today?"
  ]
};

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens for the first time
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "Hi! I'm your AI assistant. I can help you with pricing questions, feature information, and general support. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('plan')) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
    } else if (lowerMessage.includes('feature') || lowerMessage.includes('functionality') || lowerMessage.includes('capability')) {
      return botResponses.features[Math.floor(Math.random() * botResponses.features.length)];
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('contact')) {
      return botResponses.support[Math.floor(Math.random() * botResponses.support.length)];
    } else {
      return botResponses.general[Math.floor(Math.random() * botResponses.general.length)];
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg gradient-primary border-0 hover:shadow-xl hover:scale-105 transition-all duration-300 text-white"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        
        {/* Notification dot for new features */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed bottom-6 left-6 z-50 w-96 max-w-[calc(100vw-3rem)] lg:max-w-96"
            >
              <Card className="glass border border-white/20 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">AI Assistant</h3>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-muted-foreground">Online</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0 hover:bg-white/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Chat Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-3 ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.sender === 'bot' && (
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="w-3 h-3 text-primary-foreground" />
                        </div>
                      )}
                      
                      <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : ''}`}>
                        <div
                          className={`p-3 rounded-2xl text-sm ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground ml-auto'
                              : 'bg-muted/50 text-foreground'
                          }`}
                        >
                          {message.text}
                        </div>
                        <div className={`text-xs text-muted-foreground mt-1 ${
                          message.sender === 'user' ? 'text-right' : 'text-left'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>

                      {message.sender === 'user' && (
                        <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 order-3">
                          <User className="w-3 h-3 text-secondary-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 justify-start"
                    >
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Bot className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <div className="bg-muted/50 p-3 rounded-2xl">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-white/5 border-white/20 focus:border-primary/50"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      disabled={!inputValue.trim() || isTyping}
                      className="px-3"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue('Tell me about pricing')}
                      className="text-xs bg-white/5 border-white/20 hover:bg-white/10"
                    >
                      Pricing
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue('What features do you offer?')}
                      className="text-xs bg-white/5 border-white/20 hover:bg-white/10"
                    >
                      Features
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue('How can I get support?')}
                      className="text-xs bg-white/5 border-white/20 hover:bg-white/10"
                    >
                      Support
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
