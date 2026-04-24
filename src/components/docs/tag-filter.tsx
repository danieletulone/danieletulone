'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { buildTagsHref, toggleTag } from '@/lib/docs/filter';

type Props = {
  allTags: string[];
  activeTags: string[];
};

export default function TagFilter({ allTags, activeTags }: Props) {
  const t = useTranslations('docs');
  const router = useRouter();
  const pathname = usePathname();

  if (allTags.length === 0) return null;

  function navigate(next: string[]) {
    router.push(buildTagsHref(pathname, next), { scroll: false });
  }

  const hasActive = activeTags.length > 0;

  return (
    <div
      role="group"
      aria-label={t('tagsLabel')}
      className="flex flex-wrap items-center gap-2"
    >
      {allTags.map((tag) => {
        const active = activeTags.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={active}
            onClick={() => navigate(toggleTag(activeTags, tag))}
            className={`focus-ring rounded-full border px-3 py-1 text-xs transition-colors duration-200 motion-reduce:transition-none ${
              active
                ? 'border-ring bg-primary text-background'
                : 'border-border bg-accent text-muted hover:border-ring'
            }`}
          >
            {tag}
          </button>
        );
      })}
      {hasActive && (
        <button
          type="button"
          onClick={() => navigate([])}
          className="focus-ring rounded-full border border-border px-3 py-1 text-xs text-muted hover:border-ring transition-colors duration-200 motion-reduce:transition-none"
        >
          {t('clearTags')}
        </button>
      )}
    </div>
  );
}
