import { ReactNode } from 'react';

export interface AccordionItem {
  id: number;
  title: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenItems?: number[];
  className?: string;
}
