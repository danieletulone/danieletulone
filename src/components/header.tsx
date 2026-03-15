import ButtonWithSlidingText from '@/components/button-with-sliding-text';
import MobileNav from '@/components/mobile-nav';
import { AvatarViewer } from '@/components/avatar-viewer';
import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="grid grid-cols-2 md:grid-cols-3 gap-4 relative sticky top-0 z-50 bg-background px-4 sm:px-8 py-4 sm:py-8">
      <div className="self-center animate-fade-up flex items-center gap-3" style={{ animationDelay: '0ms' }}>
        <AvatarViewer src="/daniele-tulone.jpeg" alt="Daniele Tulone" />
        <a href="/">
          <div className="text-sm text-foreground font-bold">Daniele Tulone</div>
          <div className="text-xs text-muted">CTO & AI Lead</div>
        </a>
      </div>

      <div className="hidden md:flex justify-center self-center animate-fade-up" style={{ animationDelay: '80ms' }}>
        <nav aria-label="Main navigation" className="bg-accent backdrop-blur-lg rounded-4xl flex items-center p-1">
          <ul className="flex gap-x-2">
            <li>
              <ButtonWithSlidingText href="/" size="sm">Home</ButtonWithSlidingText>
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
  );
}
