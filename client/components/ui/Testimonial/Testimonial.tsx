import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { TestimonialProps } from './Testimonial.types';
import { Star, Quote } from 'lucide-react';

export const Testimonial = forwardRef<HTMLDivElement, TestimonialProps>(
  ({
    author,
    content,
    rating = 5,
    variant = 'card',
    showRating = true,
    className,
    ...props
  }, ref) => {
    const renderStars = () => (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            )}
          />
        ))}
      </div>
    );

    const renderAuthor = () => (
      <div className="flex items-center space-x-3">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-foreground">{author.name}</div>
          <div className="text-sm text-muted-foreground">
            {author.title} at {author.company}
          </div>
        </div>
      </div>
    );

    if (variant === 'quote') {
      return (
        <div
          ref={ref}
          className={cn(
            'relative p-6 bg-card rounded-xl border border-border',
            className
          )}
          {...props}
        >
          <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
          <div className="relative z-10">
            <blockquote className="text-lg italic text-foreground mb-4 pl-8">
              "{content}"
            </blockquote>
            {showRating && (
              <div className="mb-4">
                {renderStars()}
              </div>
            )}
            {renderAuthor()}
          </div>
        </div>
      );
    }

    if (variant === 'minimal') {
      return (
        <div
          ref={ref}
          className={cn('text-center', className)}
          {...props}
        >
          {showRating && (
            <div className="mb-4 flex justify-center">
              {renderStars()}
            </div>
          )}
          <blockquote className="text-lg text-foreground mb-4">
            "{content}"
          </blockquote>
          <div className="text-sm text-muted-foreground">
            — {author.name}, {author.title} at {author.company}
          </div>
        </div>
      );
    }

    // Default card variant
    return (
      <div
        ref={ref}
        className={cn(
          'p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow',
          className
        )}
        {...props}
      >
        {showRating && (
          <div className="mb-4">
            {renderStars()}
          </div>
        )}
        <blockquote className="text-foreground mb-4">
          "{content}"
        </blockquote>
        {renderAuthor()}
      </div>
    );
  }
);

Testimonial.displayName = 'Testimonial';
