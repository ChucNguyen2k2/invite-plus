
import React from 'react';
import { cn } from '@/lib/utils';

interface WeddingSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const WeddingSection = ({ id, className, children, fullHeight = false }: WeddingSectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "w-full px-4 md:px-8 py-16 md:py-24",
        fullHeight ? "min-h-screen" : "",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default WeddingSection;
