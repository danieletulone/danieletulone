import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { TechBadge, TechBadgeGroup } from '@/components/mdx/tech-badge';
import { Timeline, TimelineItem } from '@/components/mdx/timeline';
import Header from '@/components/header';
import Footer from '@/components/footer';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    alternates: { canonical: '/about' },
  };
}

const linkClasses = 'text-foreground underline hover:text-muted transition-colors';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <article className="py-8 sm:py-16">
          <header className="mb-16 sm:mb-28 flex items-start justify-between gap-8 px-4 sm:px-8 animate-fade-up">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight text-foreground">
              {t('introHeading')}
            </h1>

            <dl className="text-right text-xs text-muted space-y-0.5 flex-shrink-0">
              <div>
                <dt className="inline">Role. </dt>
                <dd className="inline text-foreground">CTO &amp; AI Lead</dd>
              </div>
              <div>
                <dt className="inline">Focus. </dt>
                <dd className="inline text-foreground">Agentic AI</dd>
              </div>
              <div>
                <dt className="inline">Tagline. </dt>
                <dd className="inline text-foreground">{t('introSubtitle')}</dd>
              </div>
            </dl>
          </header>

          <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-16 space-y-16 sm:space-y-24">
            {/* Intro */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <aside
                className="md:col-span-3 animate-fade-up"
                style={{ animationDelay: '80ms' }}
              >
                <div className="space-y-1 text-xs text-muted">
                  <p className="text-foreground font-semibold">{t('introHeading')}</p>
                  <p>{t('introSubtitle')}</p>
                </div>
              </aside>

              <div
                className="md:col-span-8 md:col-start-5 animate-fade-up"
                style={{ animationDelay: '160ms' }}
              >
                <div className="space-y-6 text-sm leading-relaxed text-muted [&_strong]:text-foreground">
                  <p>{t('introParagraph1')}</p>
                  <p>{t('introParagraph2')}</p>
                  <p>
                    {t.rich('introParagraph3', {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>

                  <TechBadgeGroup>
                    <TechBadge>Agentic AI</TechBadge>
                    <TechBadge>Claude Code</TechBadge>
                    <TechBadge>Security &amp; Compliance</TechBadge>
                    <TechBadge>TypeScript</TechBadge>
                    <TechBadge>Python</TechBadge>
                    <TechBadge>LLMs</TechBadge>
                    <TechBadge>MCP</TechBadge>
                    <TechBadge>Next.js</TechBadge>
                    <TechBadge>Node.js</TechBadge>
                    <TechBadge>Flutter</TechBadge>
                    <TechBadge>Docker</TechBadge>
                    <TechBadge>AWS</TechBadge>
                  </TechBadgeGroup>

                  <p>{t('introParagraph4')}</p>
                  <p>{t('introParagraph5')}</p>
                </div>
              </div>
            </section>

            {/* Work */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <aside
                className="md:col-span-3 animate-fade-up"
                style={{ animationDelay: '80ms' }}
              >
                <div className="space-y-1 text-xs text-muted">
                  <p className="text-foreground font-semibold">{t('workHeading')}</p>
                  <p>{t('workSubtitle')}</p>
                </div>
              </aside>

              <div
                className="md:col-span-8 md:col-start-5 animate-fade-up"
                style={{ animationDelay: '160ms' }}
              >
                <div className="text-sm leading-relaxed text-muted [&_strong]:text-foreground">
                  <Timeline>
                    <TimelineItem title={t('spods.title')} period={t('spods.period')}>
                      <p>
                        {t.rich('spods.description', {
                          spodsLink: (chunks) => <a href="https://spodshr.com" className={linkClasses}>{chunks}</a>,
                        })}
                      </p>
                      <TechBadgeGroup>
                        <TechBadge>AI</TechBadge>
                        <TechBadge>Talent Acquisition</TechBadge>
                        <TechBadge>NLP</TechBadge>
                        <TechBadge>LLMs</TechBadge>
                        <TechBadge>Security</TechBadge>
                        <TechBadge>Compliance</TechBadge>
                      </TechBadgeGroup>
                    </TimelineItem>

                    <TimelineItem title={t('consultant.title')} period={t('consultant.period')}>
                      <p>{t('consultant.description')}</p>
                      <p><strong>{t('consultant.agenticTitle')}</strong> — {t('consultant.agenticDescription')}</p>
                      <p><strong>{t('consultant.securityTitle')}</strong> — {t('consultant.securityDescription')}</p>
                      <TechBadgeGroup>
                        <TechBadge>Claude Code</TechBadge>
                        <TechBadge>Agentic AI</TechBadge>
                        <TechBadge>MCP</TechBadge>
                        <TechBadge>Security</TechBadge>
                        <TechBadge>LLMs</TechBadge>
                        <TechBadge>Embeddings</TechBadge>
                        <TechBadge>NLP</TechBadge>
                      </TechBadgeGroup>
                      <p>
                        <strong>{t('consultant.openSourceTitle')}</strong> —{' '}
                        {t.rich('consultant.openSourceDescription', {
                          marketplaceLink: (chunks) => <a href="https://github.com/danieletulone/tool1-marketplace" className={linkClasses}>{chunks}</a>,
                          templateLink: (chunks) => <a href="https://github.com/danieletulone/claude-code-marketplace-template" className={linkClasses}>{chunks}</a>,
                        })}
                      </p>
                    </TimelineItem>

                    <TimelineItem title={t('freelance.title')} period={t('freelance.period')}>
                      <p>{t('freelance.description')}</p>
                      <p><strong>{t('freelance.aiTitle')}</strong> — {t('freelance.aiDescription')}</p>
                      <TechBadgeGroup>
                        <TechBadge>TypeScript</TechBadge>
                        <TechBadge>Python</TechBadge>
                        <TechBadge>Next.js</TechBadge>
                        <TechBadge>Node.js</TechBadge>
                        <TechBadge>Redis</TechBadge>
                        <TechBadge>OpenAPI</TechBadge>
                        <TechBadge>OCR</TechBadge>
                      </TechBadgeGroup>
                    </TimelineItem>

                    <TimelineItem title={t('bubblepod.title')} period={t('bubblepod.period')}>
                      <p>{t('bubblepod.description')}</p>
                      <TechBadgeGroup>
                        <TechBadge>Flutter</TechBadge>
                        <TechBadge>Event Sourcing</TechBadge>
                        <TechBadge>WebSockets</TechBadge>
                        <TechBadge>HLS</TechBadge>
                        <TechBadge>Redis</TechBadge>
                        <TechBadge>In-App Purchases</TechBadge>
                      </TechBadgeGroup>
                    </TimelineItem>

                    <TimelineItem title={t('marlon.title')} subtitle={t('marlon.subtitle')} period={t('marlon.period')}>
                      <p>{t('marlon.description')}</p>
                    </TimelineItem>

                    <TimelineItem title={t('openSource.title')} subtitle={t('openSource.subtitle')} period={t('openSource.period')}>
                      <p>
                        {t.rich('openSource.description', {
                          velvetLink: (chunks) => <a href="https://github.com/stratumfoundry/velvet" className={linkClasses}>{chunks}</a>,
                          pfyLink: (chunks) => <a href="https://github.com/promptify-it/pfy" className={linkClasses}>{chunks}</a>,
                        })}
                      </p>
                      <TechBadgeGroup>
                        <TechBadge>Flutter</TechBadge>
                        <TechBadge>Dart</TechBadge>
                        <TechBadge>CLI</TechBadge>
                        <TechBadge>Open Source</TechBadge>
                      </TechBadgeGroup>
                    </TimelineItem>

                    <TimelineItem title={t('donkey.title')} subtitle={t('donkey.subtitle')} period={t('donkey.period')}>
                      <p>{t('donkey.description')}</p>
                    </TimelineItem>
                  </Timeline>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <aside
                className="md:col-span-3 animate-fade-up"
                style={{ animationDelay: '80ms' }}
              >
                <div className="space-y-1 text-xs text-muted">
                  <p className="text-foreground font-semibold">{t('educationHeading')}</p>
                  <p>{t('educationSubtitle')}</p>
                </div>
              </aside>

              <div
                className="md:col-span-8 md:col-start-5 animate-fade-up"
                style={{ animationDelay: '160ms' }}
              >
                <div className="text-sm leading-relaxed text-muted [&_strong]:text-foreground">
                  <Timeline>
                    <TimelineItem title={t('ied.title')} subtitle={t('ied.subtitle')} period={t('ied.period')}>
                      <p>{t('ied.description')}</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>{t('ied.cinema')}</strong> — {t('ied.cinemaDescription')}</li>
                        <li><strong>{t('ied.emotional')}</strong> — {t('ied.emotionalDescription')}</li>
                        <li><strong>{t('ied.design')}</strong> — {t('ied.designDescription')}</li>
                        <li><strong>{t('ied.interactive')}</strong> — {t('ied.interactiveDescription')}</li>
                      </ul>
                      <TechBadgeGroup>
                        <TechBadge>HTML/JS</TechBadge>
                        <TechBadge>Laravel</TechBadge>
                        <TechBadge>PyGame</TechBadge>
                        <TechBadge>Unity</TechBadge>
                        <TechBadge>Git</TechBadge>
                        <TechBadge>AWS</TechBadge>
                      </TechBadgeGroup>
                    </TimelineItem>

                    <TimelineItem title={t('unimi.title')} subtitle={t('unimi.subtitle')} period={t('unimi.period')}>
                      <p>{t('unimi.description')}</p>
                    </TimelineItem>

                    <TimelineItem title={t('classicalStudies.title')} subtitle={t('classicalStudies.subtitle')} period={t('classicalStudies.period')}>
                      <p>{t('classicalStudies.description1')}</p>
                      <p>{t('classicalStudies.description2')}</p>
                    </TimelineItem>

                    <TimelineItem title={t('selfTaught.title')} subtitle={t('selfTaught.subtitle')} period={t('selfTaught.period')}>
                      <p>{t('selfTaught.description')}</p>
                    </TimelineItem>
                  </Timeline>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
