export interface ProgressBarProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gradient';
  showLabel?: boolean;
  animated?: boolean;
  striped?: boolean;
  className?: string;
}
