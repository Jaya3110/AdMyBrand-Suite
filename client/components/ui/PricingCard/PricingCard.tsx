import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { PricingCardProps } from './PricingCard.types';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Check } from 'lucide-react';

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(
  ({
    plan,
    onSelect,
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative p-6 bg-card rounded-xl border transition-all duration-200',
          plan.popular 
            ? 'border-primary shadow-lg scale-105 gradient-primary text-white' 
            : 'border-border hover:border-primary/50 hover:shadow-md',
          className
        )}
        {...props}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="gradient" className="px-4 py-1">
              Most Popular
            </Badge>
          </div>
        )}

        <div className="text-center mb-6">
          <h3 className={cn(
            'text-2xl font-bold mb-2',
            plan.popular ? 'text-white' : 'text-foreground'
          )}>
            {plan.name}
          </h3>
          
          {plan.description && (
            <p className={cn(
              'text-sm mb-4',
              plan.popular ? 'text-white/80' : 'text-muted-foreground'
            )}>
              {plan.description}
            </p>
          )}

          <div className={cn(
            'mb-4',
            plan.popular ? 'text-white' : 'text-foreground'
          )}>
            <span className="text-4xl font-bold">${plan.price}</span>
            <span className={cn(
              'text-lg',
              plan.popular ? 'text-white/80' : 'text-muted-foreground'
            )}>
              /{plan.interval}
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Check className={cn(
                'h-5 w-5 flex-shrink-0',
                plan.popular ? 'text-white' : 'text-primary'
              )} />
              <span className={cn(
                'text-sm',
                plan.popular ? 'text-white' : 'text-foreground'
              )}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button
          variant={plan.popular ? 'secondary' : 'primary'}
          fullWidth
          onClick={onSelect}
          className={plan.popular ? 'bg-white text-primary hover:bg-white/90' : ''}
        >
          {plan.buttonText || 'Get Started'}
        </Button>
      </div>
    );
  }
);

PricingCard.displayName = 'PricingCard';
