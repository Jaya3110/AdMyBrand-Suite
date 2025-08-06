import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { CardProps } from './Card.types';

const cardVariants = {
  default: 'bg-card text-card-foreground border border-border shadow-sm',
  elevated: 'bg-card text-card-foreground border border-border shadow-lg',
  outlined: 'bg-card text-card-foreground border-2 border-primary/20',
  gradient: 'gradient-primary text-white border-0',
  glass: 'glass text-foreground border border-white/20 shadow-glass',
};

const cardPadding = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    variant = 'default',
    padding = 'md',
    children,
    hoverable = false,
    clickable = false,
    onClick,
    className,
    header,
    footer,
    ...props
  }, ref) => {
    const baseClasses = 'rounded-xl transition-all duration-200';
    
    const classes = cn(
      baseClasses,
      cardVariants[variant],
      cardPadding[padding],
      hoverable && 'hover:shadow-lg hover:-translate-y-1',
      clickable && 'cursor-pointer hover:shadow-lg hover:-translate-y-1',
      className
    );

    return (
      <div
        ref={ref}
        onClick={clickable ? onClick : undefined}
        className={classes}
        {...props}
      >
        {header && (
          <div className="border-b border-border pb-3 mb-3">
            {header}
          </div>
        )}
        
        <div className="flex-1">
          {children}
        </div>
        
        {footer && (
          <div className="border-t border-border pt-3 mt-3">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';
