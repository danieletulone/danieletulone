import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Letterhead from '@/components/docs/letterhead';
import { TechBadge, TechBadgeGroup } from '@/components/mdx/tech-badge';
import { Timeline, TimelineItem } from '@/components/mdx/timeline';
import { getDocBySlug } from '@/lib/docs/registry';

const SLUG = 'hello-docs';

export async function generateMetadata(): Promise<Metadata> {
  const doc = getDocBySlug(SLUG);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/docs/${doc.slug}` },
  };
}

export default function HelloDocsPage() {
  const doc = getDocBySlug(SLUG);
  if (!doc) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Letterhead doc={doc}>
          <p>
            This section is called <strong>Docs</strong>, not a blog. Each article
            here is a <strong>living document</strong> — I update it whenever I learn
            something new, change my mind, or find a sharper way to explain a
            concept. The date at the top of this page is the one that actually
            matters.
          </p>
          <p>
            Every article is authored as a full React page wrapped in the same
            letterhead shell. Layouts inside the body are ad-hoc on purpose: some
            articles are dense with code, others lean on timelines or diagrams, a
            few are almost entirely visual. A small set of reusable elements keeps
            things consistent where it matters.
          </p>

          <h2>Reusable building blocks</h2>
          <p>Drop these into any article when they fit.</p>
          <TechBadgeGroup>
            <TechBadge>Letterhead</TechBadge>
            <TechBadge>TechBadge</TechBadge>
            <TechBadge>Timeline</TechBadge>
            <TechBadge>VcardQr</TechBadge>
            <TechBadge variant="highlight">…more over time</TechBadge>
          </TechBadgeGroup>

          <h2>How an article gets published</h2>
          <Timeline>
            <TimelineItem title="1. Draft the page" period="10–30 min">
              <p>
                Create a directory under{' '}
                <code>src/app/[locale]/docs/</code> and drop a{' '}
                <code>page.tsx</code> inside. Wrap the body in{' '}
                <code>&lt;Letterhead doc={'{doc}'}&gt;</code> — everything else is
                free-form.
              </p>
            </TimelineItem>
            <TimelineItem title="2. Register metadata" period="30 sec">
              <p>
                Add a <code>DocMeta</code> entry to{' '}
                <code>src/lib/docs/registry.ts</code> — title, description, tags,{' '}
                <code>updatedAt</code>. The list page, tag filter, and sitemap all
                read from here.
              </p>
            </TimelineItem>
            <TimelineItem title="3. Keep updating it" period="ongoing">
              <p>
                Bump <code>updatedAt</code> every time the article changes in a
                meaningful way. The list sorts by that field — freshest first.
              </p>
            </TimelineItem>
          </Timeline>

          <h2>Why this structure</h2>
          <p>
            A React page per article gives an LLM maximum room to design the layout
            for the content — a diagram-heavy explainer doesn&apos;t need to share the
            skeleton of a long-form essay. The shared letterhead and registry keep
            the framing, SEO, and sitemap honest without forcing every article into
            the same mold.
          </p>
        </Letterhead>
      </main>

      <Footer />
    </div>
  );
}
