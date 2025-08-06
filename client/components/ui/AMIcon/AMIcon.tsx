import { cn } from '@/lib/utils';

interface AMIconProps {
  className?: string;
  size?: number;
}

export const AMIcon: React.FC<AMIconProps> = ({ className, size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
    >
      {/* A Letter */}
      <path
        d="M3 20L8 4L10.5 4L13 12L15.5 4L18 4L20 12L22 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* A crossbar */}
      <path
        d="M5.5 14L11.5 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* M Letter - overlapping with A */}
      <path
        d="M12 20L12 8L15 14L18 8L18 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Connecting element to make it look like a fusion */}
      <circle
        cx="13"
        cy="12"
        r="1.5"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
};
