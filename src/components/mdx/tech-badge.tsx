'use client';

import { type ReactNode, Children, isValidElement, cloneElement } from 'react';

interface TechBadgeProps {
  children: ReactNode;
  variant?: 'default' | 'highlight';
  style?: React.CSSProperties;
}

export function TechBadge({ children, variant = 'default', style }: TechBadgeProps) {
  const variants = {
    default: 'bg-accent text-muted border-border',
    highlight: 'bg-primary/10 text-primary border-primary/20',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border animate-scale-in transition-all duration-200 hover:scale-105 motion-reduce:hover:scale-100 motion-reduce:transition-none ${variants[variant]}`}
      style={style}
    >
      {children}
    </span>
  );
}

export function TechBadgeGroup({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);

  return (
    <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
      {items.map((child, i) => {
        if (isValidElement<TechBadgeProps>(child)) {
          return cloneElement(child, {
            key: i,
            style: { animationDelay: `${i * 50}ms` },
          });
        }
        return child;
      })}
    </div>
  );
}
