import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AccordionProps } from './Accordion.types';
import { ChevronDown } from 'lucide-react';

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenItems = [],
  className,
}) => {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpenItems);

  const toggleItem = (itemId: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div 
            key={item.id}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              className={cn(
                'w-full px-4 py-3 text-left flex items-center justify-between',
                'bg-card hover:bg-muted/50 transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-primary/20',
                item.disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <span className="font-medium text-foreground">
                {item.title}
              </span>
              <ChevronDown 
                className={cn(
                  'h-4 w-4 text-muted-foreground transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            
            <div
              className={cn(
                'overflow-hidden transition-all duration-200 ease-in-out',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-4 py-3 border-t border-border bg-muted/20">
                <div className="text-muted-foreground">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
