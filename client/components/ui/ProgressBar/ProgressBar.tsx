import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ProgressBarProps } from './ProgressBar.types';

const progressSizes = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const progressColors = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  gradient: 'gradient-primary',
};

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({
    value,
    max = 100,
    size = 'md',
    color = 'blue',
    showLabel = false,
    animated = false,
    striped = false,
    className,
    ...props
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {showLabel && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm text-muted-foreground">{Math.round(percentage)}%</span>
          </div>
        )}
        
        <div
          className={cn(
            'w-full bg-muted rounded-full overflow-hidden',
            progressSizes[size]
          )}
        >
          <div
            className={cn(
              'h-full transition-all duration-500 ease-out rounded-full',
              progressColors[color],
              animated && 'animate-pulse-slow',
              striped && 'bg-striped'
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
