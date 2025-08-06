import { ReactNode } from 'react';

export interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}
