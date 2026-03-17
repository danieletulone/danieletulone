'use client';

import React, { ReactNode, Ref } from 'react';
import { Link } from '@/i18n/navigation';

interface ButtonWithSlidingTextProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'borderless' | 'bordered';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

function ButtonWithSlidingText({
    children,
    href,
    onClick,
    variant = 'borderless',
    size = 'md',
    className = '',
}: ButtonWithSlidingTextProps, ref: Ref<HTMLAnchorElement | HTMLButtonElement> | undefined) {
    const sizeClasses = {
        sm: 'py-1 px-2 text-sm',
        md: 'py-1.5 px-3 text-sm',
        lg: 'py-2 px-4 text-3xl',
    };

    const variantClasses = {
        borderless: 'text-foreground',
        bordered: 'border border-border text-foreground hover:border-ring transition-[border-color] duration-200 motion-reduce:transition-none',
    };

    const baseClasses = `relative ${sizeClasses[size]} ${variantClasses[variant]} focus-ring rounded-4xl overflow-clip group ${className}`;

    const content = (
        <>
            <span className="text-transparent" aria-hidden="true">{children}</span>
            <span
                aria-hidden="true"
                className={`absolute top-0 left-0 ${sizeClasses[size]} translate-y-0 group-hover:-translate-y-5 transition-all group-hover:opacity-0 duration-500 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:opacity-100`}
            >
                {children}
            </span>
            <span
                className={`absolute top-0 left-0 ${sizeClasses[size]} transform opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 motion-reduce:transition-none motion-reduce:hidden`}
            >
                {children}
            </span>
        </>
    );

    if (href) {
        const isExternal = href.startsWith('http');
        if (isExternal) {
            return (
                <a
                    ref={ref as Ref<HTMLAnchorElement> | undefined}
                    href={href}
                    className={baseClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {content}
                </a>
            );
        }
        return (
            <Link
                ref={ref as Ref<HTMLAnchorElement> | undefined}
                href={href}
                className={baseClasses}
                onClick={onClick}
            >
                {content}
            </Link>
        );
    }

    return (
        <button ref={ref as Ref<HTMLButtonElement> | undefined} onClick={onClick} className={baseClasses}>
            {content}
        </button>
    );
}

export default React.forwardRef(ButtonWithSlidingText);
