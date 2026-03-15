import ButtonWithSlidingText from '@/components/button-with-sliding-text';
import MobileNav from '@/components/mobile-nav';
import { AvatarViewer } from '@/components/avatar-viewer';
import ThemeToggle from '@/components/theme-toggle';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniele Tulone',
  jobTitle: 'CTO & AI Lead',
  url: 'https://danieletulone.com',
  image: 'https://danieletulone.com/daniele-tulone.jpeg',
  sameAs: [
    'https://github.com/danieletulone',
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
    <div id="main" className="h-[100svh] flex flex-col p-4 sm:p-8 gap-y-8 sm:gap-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#content" className="skip-to-content">Skip to content</a>

      <header className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
        <div className="self-center animate-fade-up flex items-center gap-3" style={{ animationDelay: '0ms' }}>
          <AvatarViewer src="/daniele-tulone.jpeg" alt="Daniele Tulone" />
          <div>
            <div className="text-sm text-foreground font-bold">Daniele Tulone</div>
            <div className="text-xs text-muted">CTO & AI Lead</div>
          </div>
        </div>

        <div className="hidden md:flex justify-center self-center animate-fade-up" style={{ animationDelay: '80ms' }}>
          <nav aria-label="Main navigation" className="bg-accent backdrop-blur-lg rounded-4xl flex items-center p-1">
            <ul className="flex gap-x-2">
              <li>
                <ButtonWithSlidingText href="/" size="sm" className="bg-card text-foreground">Home</ButtonWithSlidingText>
              </li>
              <li>
                <ButtonWithSlidingText href="/about" size="sm">About</ButtonWithSlidingText>
              </li>
              <li>
                <ButtonWithSlidingText href="/contacts" size="sm">Contacts</ButtonWithSlidingText>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex justify-end items-center gap-2 animate-fade-up" style={{ animationDelay: '80ms' }}>
          <ThemeToggle />
          <ButtonWithSlidingText variant="bordered" href="/contacts" className="self-center">
            Get in Touch
          </ButtonWithSlidingText>
        </div>

        <MobileNav />
      </header>

      <main id="content" className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        <div className="md:col-span-2 flex flex-col gap-2 order-2 md:order-1 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <p className="text-muted text-xs">
            I ship products where 95% of the code is AI-generated — orchestrating agents, designing secure systems, and pushing what&apos;s possible with agentic workflows.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-6 flex flex-col justify-end items-end order-1 md:order-2 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground">AI-native engineer turning business problems into software with agentic code</h1>
        </div>
      </main>

      <footer>
        <nav aria-label="Social links" className="flex flex-wrap gap-x-1 sm:gap-x-2">
          <span className="animate-fade-up" style={{ animationDelay: '400ms' }}><ButtonWithSlidingText href="https://github.com/danieletulone">github</ButtonWithSlidingText></span>
          <span className="animate-fade-up" style={{ animationDelay: '460ms' }}><ButtonWithSlidingText href="#">medium</ButtonWithSlidingText></span>
          <span className="animate-fade-up" style={{ animationDelay: '520ms' }}><ButtonWithSlidingText href="#">x.com</ButtonWithSlidingText></span>
          <span className="animate-fade-up" style={{ animationDelay: '580ms' }}><ButtonWithSlidingText href="https://linkedin.com/in/daniele-tulone-994b38173">linkedin</ButtonWithSlidingText></span>
        </nav>
      </footer>
    </div>
  );
}
