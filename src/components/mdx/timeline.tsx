'use client';

import { type ReactNode, Children, isValidElement, cloneElement } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period?: string;
  icon?: ReactNode;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function TimelineItem({ title, subtitle, period, icon, children, style }: TimelineItemProps) {
  return (
    <li className="relative pb-10 sm:pb-8 last:pb-0 group list-none animate-fade-up" style={style}>
      {/* Vertical line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border group-last:hidden" aria-hidden="true" />

      {/* Title row with dot */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 size-6 rounded-full border-2 border-border bg-background flex items-center justify-center text-muted text-xs group-hover:border-primary group-hover:text-primary transition-colors duration-200 motion-reduce:transition-none" aria-hidden="true">
          {icon ?? <div className="size-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-200 motion-reduce:transition-none" />}
        </div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 min-w-0">
          <p className="text-base font-semibold text-foreground m-0">{title}</p>
          {period && (
            <span className="text-xs font-medium text-muted bg-accent px-2 py-0.5 rounded-full">
              {period}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pl-9">
        {subtitle && (
          <p className="text-sm text-muted mt-0.5 mb-0">{subtitle}</p>
        )}
        <div className="mt-2 text-sm text-muted [&>p]:mt-1.5 [&>p]:mb-0 [&>ul]:mt-1.5 [&>ul]:mb-0 [&_a]:py-0.5 [&_a]:inline-block">
          {children}
        </div>
      </div>
    </li>
  );
}

export function Timeline({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);

  return (
    <ol className="mt-6 mb-4 pl-0" role="list">
      {items.map((child, i) => {
        if (isValidElement<TimelineItemProps>(child)) {
          return cloneElement(child, {
            key: i,
            style: { animationDelay: `${i * 120}ms` },
          });
        }
        return child;
      })}
    </ol>
  );
}
