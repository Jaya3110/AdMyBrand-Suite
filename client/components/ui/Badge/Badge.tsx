import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { BadgeProps } from './Badge.types';

const badgeVariants = {
  default: 'bg-primary/10 text-primary border-primary/20',
  success: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800',
  danger: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800',
  info: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
  neutral: 'bg-muted text-muted-foreground border-border',
  gradient: 'gradient-primary text-white border-0',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({
    variant = 'default',
    size = 'md',
    children,
    dot = false,
    pill = false,
    className,
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center border font-medium transition-colors';
    
    const classes = cn(
      baseClasses,
      badgeVariants[variant],
      badgeSizes[size],
      pill ? 'rounded-full' : 'rounded-md',
      className
    );

    return (
      <span ref={ref} className={classes} {...props}>
        {dot && (
          <span 
            className={cn(
              'w-2 h-2 rounded-full mr-1.5',
              variant === 'default' && 'bg-primary',
              variant === 'success' && 'bg-green-500',
              variant === 'warning' && 'bg-yellow-500',
              variant === 'danger' && 'bg-red-500',
              variant === 'info' && 'bg-blue-500',
              variant === 'neutral' && 'bg-muted-foreground',
              variant === 'gradient' && 'bg-white',
            )}
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
