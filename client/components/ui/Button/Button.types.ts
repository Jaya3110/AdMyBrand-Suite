import { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
