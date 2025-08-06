import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ButtonProps } from './Button.types';
import { Loader2 } from 'lucide-react';

const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  ghost: 'text-primary hover:bg-primary/10',
  danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md',
  gradient: 'gradient-primary text-white hover:opacity-90 shadow-lg hover:shadow-xl',
};

const buttonSizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 py-2',
  lg: 'h-12 px-6 text-lg',
  xl: 'h-14 px-8 text-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    children,
    onClick,
    disabled = false,
    loading = false,
    fullWidth = false,
    icon,
    iconPosition = 'left',
    href,
    target,
    className,
    type = 'button',
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const classes = cn(
      baseClasses,
      buttonVariants[variant],
      buttonSizes[size],
      fullWidth && 'w-full',
      className
    );

    const content = (
      <>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!loading && icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {!loading && icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </>
    );

    if (href) {
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return (
          <a
            href={href}
            target={target}
            className={classes}
            {...props}
          >
            {content}
          </a>
        );
      } else {
        return (
          <Link to={href} className={classes} {...props}>
            {content}
          </Link>
        );
      }
    }

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
