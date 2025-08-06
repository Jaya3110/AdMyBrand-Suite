import { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { InputProps } from './Input.types';

const inputSizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-5 text-lg',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    error,
    helperText,
    disabled = false,
    required = false,
    size = 'md',
    icon,
    iconPosition = 'left',
    className,
    name,
    id,
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || name;
    
    const baseClasses = 'w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed';
    
    const stateClasses = cn(
      error 
        ? 'border-destructive focus:border-destructive focus:ring-destructive/20' 
        : 'border-border bg-background text-foreground',
      isFocused && !error && 'border-primary'
    );
    
    const inputClasses = cn(
      baseClasses,
      stateClasses,
      inputSizes[size],
      icon && iconPosition === 'left' && 'pl-10',
      icon && iconPosition === 'right' && 'pr-10',
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2 transition-colors',
              error ? 'text-destructive' : 'text-foreground',
              required && "after:content-['*'] after:ml-0.5 after:text-destructive"
            )}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div 
              className={cn(
                'absolute top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground',
                iconPosition === 'left' ? 'left-3' : 'right-3',
                size === 'sm' && 'text-sm',
                size === 'lg' && 'text-lg'
              )}
            >
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            type={type}
            id={inputId}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={disabled}
            required={required}
            className={inputClasses}
            {...props}
          />
        </div>
        
        {(error || helperText) && (
          <p 
            className={cn(
              'mt-1 text-sm',
              error ? 'text-destructive' : 'text-muted-foreground'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
