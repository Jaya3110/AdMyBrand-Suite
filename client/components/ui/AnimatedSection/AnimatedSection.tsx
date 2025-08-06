import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedSectionProps } from './AnimatedSection.types';

const animationClasses = {
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100 animate-fade-in',
  },
  slideUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0 animate-slide-up',
  },
  slideLeft: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0 animate-slide-in-left',
  },
  slideRight: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0 animate-slide-in-right',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100 animate-scale-in',
  },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  const classes = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        isVisible ? classes.animate : classes.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};
