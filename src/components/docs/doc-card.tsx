import { useFormatter, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { DocMeta } from '@/lib/docs/types';

type Props = {
  doc: DocMeta;
  index?: number;
};

export default function DocCard({ doc, index = 0 }: Props) {
  const t = useTranslations('docs');
  const format = useFormatter();
  const updated = format.dateTime(new Date(doc.updatedAt), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <li
      className="list-none animate-fade-up"
      style={{ animationDelay: `${120 + index * 60}ms` }}
    >
      <Link
        href={`/docs/${doc.slug}`}
        className="group block py-6 first:pt-0 focus-ring"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-muted motion-reduce:transition-none">
            {doc.title}
          </h3>
          <span className="shrink-0 text-xs text-muted">
            {t('updated')} {updated}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {doc.description}
        </p>
        {doc.tags.length > 0 && (
          <p className="mt-3 text-xs text-muted">
            {doc.tags.join(' · ')}
          </p>
        )}
      </Link>
    </li>
  );
}
