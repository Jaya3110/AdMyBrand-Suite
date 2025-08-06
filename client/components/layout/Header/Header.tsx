import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { Menu, X } from 'lucide-react';
import { AMIcon } from '@/components/ui/AMIcon';

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/20 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <div className="gradient-primary rounded-lg p-2">
              <AMIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">ADmyBRAND AI Suite</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" href="/login">
            Log in
          </Button>
          <Button variant="gradient" href="/signup">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border transition-transform duration-300',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <div className="gradient-primary rounded-lg p-2">
              <AMIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">ADmyBRAND AI Suite</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-border">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 space-y-4">
              <Button variant="ghost" fullWidth href="/login">
                Log in
              </Button>
              <Button variant="gradient" fullWidth href="/signup">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};
