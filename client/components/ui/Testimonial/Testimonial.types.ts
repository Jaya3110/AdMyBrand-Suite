import { ReactNode } from 'react';

export interface TestimonialAuthor {
  name: string;
  title: string;
  company: string;
  avatar: string;
}

export interface TestimonialProps {
  author: TestimonialAuthor;
  content: string;
  rating?: number;
  variant?: 'card' | 'quote' | 'minimal';
  showRating?: boolean;
  className?: string;
}
