import ButtonWithSlidingText from '@/components/button-with-sliding-text';

export default function Footer() {
  return (
    <footer className="mt-auto pt-12 pb-4 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-3 animate-fade-up" style={{ animationDelay: '200ms' }}>
        <div className="text-sm text-foreground font-bold">Daniele Tulone</div>
        <div className="text-xs text-muted">&copy; {new Date().getFullYear()} All rights reserved.</div>
      </div>

      <nav aria-label="Social links" className="md:col-span-9 flex flex-wrap gap-x-1 sm:gap-x-2 md:justify-end items-center animate-fade-up" style={{ animationDelay: '300ms' }}>
        <ButtonWithSlidingText href="https://github.com/danieletulone" size="sm">github</ButtonWithSlidingText>
        <ButtonWithSlidingText href="#" size="sm">medium</ButtonWithSlidingText>
        <ButtonWithSlidingText href="#" size="sm">x.com</ButtonWithSlidingText>
        <ButtonWithSlidingText href="https://linkedin.com/in/daniele-tulone-994b38173" size="sm">linkedin</ButtonWithSlidingText>
      </nav>
    </footer>
  );
}
