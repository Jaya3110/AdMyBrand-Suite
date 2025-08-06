import { ReactNode } from 'react';

export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient' | 'glass';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
}
