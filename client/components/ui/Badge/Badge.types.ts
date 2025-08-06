import { ReactNode } from 'react';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  dot?: boolean;
  pill?: boolean;
  className?: string;
}
