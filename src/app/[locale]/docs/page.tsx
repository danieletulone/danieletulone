import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useFormatter, useTranslations } from 'next-intl';
import Header from '@/components/header';
import Footer from '@/components/footer';
import DocCard from '@/components/docs/doc-card';
import TagFilter from '@/components/docs/tag-filter';
import { docs, getAllTags } from '@/lib/docs/registry';
import { filterDocsByTags, parseTagsParam } from '@/lib/docs/filter';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tags?: string | string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('docsTitle'),
    description: t('docsDescription'),
    alternates: { canonical: '/docs' },
  };
}

export default async function DocsListPage({ searchParams }: Props) {
  const { tags } = await searchParams;
  const activeTags = parseTagsParam(tags);
  const allTags = getAllTags();
  const visible = filterDocsByTags(docs, activeTags);

  return (
    <DocsListView allTags={allTags} activeTags={activeTags} visible={visible} />
  );
}

function DocsListView({
  allTags,
  activeTags,
  visible,
}: {
  allTags: string[];
  activeTags: string[];
  visible: typeof docs;
}) {
  const t = useTranslations('docs');
  const format = useFormatter();
  const latestUpdated =
    docs.length > 0
      ? format.dateTime(new Date(docs[0].updatedAt), {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <article className="py-8 sm:py-16">
          <header className="mb-16 sm:mb-28 flex items-start justify-between gap-8 px-4 sm:px-8 animate-fade-up">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight text-foreground">
              {t('title')}
            </h1>

            <dl className="text-right text-xs text-muted space-y-0.5 flex-shrink-0">
              <div>
                <dt className="inline">Entries. </dt>
                <dd className="inline text-foreground">
                  {visible.length}
                  {visible.length !== docs.length && `/${docs.length}`}
                </dd>
              </div>
              {latestUpdated && (
                <div>
                  <dt className="inline">Updated. </dt>
                  <dd className="inline text-foreground">{latestUpdated}</dd>
                </div>
              )}
            </dl>
          </header>

          <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <aside
              className="md:col-span-3 animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              <div className="space-y-1 text-xs text-muted">
                <p className="text-foreground font-semibold">About</p>
                <p>{t('description')}</p>
              </div>

              {allTags.length > 0 && (
                <div className="mt-6 space-y-2 text-xs text-muted">
                  <p className="text-foreground font-semibold">
                    {t('tagsLabel')}
                  </p>
                  <TagFilter allTags={allTags} activeTags={activeTags} />
                </div>
              )}
            </aside>

            <div
              className="md:col-span-8 md:col-start-5 animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              {visible.length === 0 ? (
                <p className="text-sm text-muted">{t('empty')}</p>
              ) : (
                <ul className="divide-y divide-border">
                  {visible.map((doc, i) => (
                    <DocCard key={doc.slug} doc={doc} index={i} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
