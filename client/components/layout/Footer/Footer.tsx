import { Link } from 'react-router-dom';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const navigation = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Security', href: '/security' },
    { name: 'Integrations', href: '/integrations' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'Status', href: '/status' },
    { name: 'API Reference', href: '/api' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Email', href: 'mailto:hello@admybrand.com', icon: Mail },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary rounded-lg p-2">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">ADmyBRAND AI Suite</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              The modern SaaS platform that empowers teams to build, ship, and scale faster than ever before.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links grid */}
          <div className="mt-10 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Support</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2024 ADmyBRAND AI Suite. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-muted-foreground mt-4 sm:mt-0">
            Built with ❤️ for modern teams
          </p>
        </div>
      </div>
    </footer>
  );
};
