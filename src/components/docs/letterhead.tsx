import { useFormatter, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { DocMeta } from '@/lib/docs/types';

type Props = {
  doc: DocMeta;
  children: React.ReactNode;
};

export default function Letterhead({ doc, children }: Props) {
  const t = useTranslations('docs');
  const format = useFormatter();
  const dateOpts = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const updated = format.dateTime(new Date(doc.updatedAt), dateOpts);
  const created = doc.createdAt
    ? format.dateTime(new Date(doc.createdAt), dateOpts)
    : null;

  return (
    <article className="py-8 sm:py-16">
      <header className="mb-16 sm:mb-28 flex items-start justify-between gap-8 px-4 sm:px-8 animate-fade-up">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight text-foreground">
          {doc.title}
        </h1>

        <dl className="text-right text-xs text-muted space-y-0.5 flex-shrink-0">
          {created && (
            <div>
              <dt className="inline">Created. </dt>
              <dd className="inline text-foreground">{created}</dd>
            </div>
          )}
          <div>
            <dt className="inline">Updated. </dt>
            <dd className="inline text-foreground">{updated}</dd>
          </div>
        </dl>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <aside
          className="md:col-span-3 animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          <div className="space-y-1 text-xs text-muted">
            <p className="text-foreground font-semibold">Reader</p>
            <p>{doc.description}</p>
          </div>
          {doc.tags.length > 0 && (
            <div className="mt-6 space-y-1 text-xs text-muted">
              <p className="text-foreground font-semibold">Tags</p>
              <p>{doc.tags.join(', ')}</p>
            </div>
          )}
        </aside>

        <div
          className="md:col-span-8 md:col-start-5 animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          <div className="space-y-6 text-sm leading-relaxed text-muted [&_h2]:mt-12 [&_h2]:mb-2 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_code]:text-foreground [&_strong]:text-foreground">
            {children}
          </div>

          <footer className="mt-16 text-sm text-muted">
            <p>Regards,</p>
            <p className="mt-1 text-foreground">Daniele</p>
          </footer>
        </div>
      </div>

      <p
        className="mt-16 sm:mt-24 px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl text-xs text-muted animate-fade-up"
        style={{ animationDelay: '320ms' }}
      >
        ←{' '}
        <Link
          href="/docs"
          className="text-foreground underline transition-colors hover:text-muted"
        >
          {t('backToList')}
        </Link>
      </p>
    </article>
  );
}
