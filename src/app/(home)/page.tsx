import ButtonWithSlidingText from '@/components/button-with-sliding-text';
import Header from '@/components/header';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniele Tulone',
  jobTitle: 'CTO & AI Lead',
  url: 'https://danieletulone.vercel.app',
  image: 'https://danieletulone.vercel.app/daniele-tulone.jpeg',
  sameAs: [
    'https://github.com/danieletulone',
    'https://x.com/_toolone_',
    'https://linkedin.com/in/daniele-tulone-994b38173',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Spods',
    url: 'https://spodshr.com',
  },
  knowsAbout: ['Agentic AI', 'Claude Code', 'Security & Compliance', 'TypeScript', 'Python', 'Next.js'],
  description: 'AI-native engineer turning business problems into software with agentic code.',
};

export default function HomePage() {
  return (
    <div id="main" className="h-[100svh] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#content" className="skip-to-content">Skip to content</a>

      <Header />

      <main id="content" className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-end px-4 sm:px-8 pb-4 sm:pb-8">
        <div className="md:col-span-2 flex flex-col gap-2 order-2 md:order-1 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <p className="text-muted text-xs">
            I ship products where 95% of the code is AI-generated — orchestrating agents, designing secure systems, and pushing what&apos;s possible with agentic workflows.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-6 flex flex-col justify-end items-end order-1 md:order-2 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground">AI-native engineer turning business problems into software with agentic code</h1>
        </div>
      </main>

      <footer className="px-4 sm:px-8 pb-4 sm:pb-8">
        <nav aria-label="Social links" className="flex flex-wrap gap-x-1 sm:gap-x-2">
          <span className="animate-fade-up" style={{ animationDelay: '400ms' }}><ButtonWithSlidingText href="https://github.com/danieletulone">github</ButtonWithSlidingText></span>
          <span className="animate-fade-up" style={{ animationDelay: '460ms' }}><ButtonWithSlidingText href="https://x.com/_toolone_">x.com</ButtonWithSlidingText></span>
          <span className="animate-fade-up" style={{ animationDelay: '520ms' }}><ButtonWithSlidingText href="https://linkedin.com/in/daniele-tulone-994b38173">linkedin</ButtonWithSlidingText></span>
        </nav>
      </footer>
    </div>
  );
}
