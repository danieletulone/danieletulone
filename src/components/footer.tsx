import ButtonWithSlidingText from '@/components/button-with-sliding-text';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 pb-4 sm:pb-8">
      <nav aria-label="Social links" className="flex flex-wrap gap-x-1 sm:gap-x-2">
        <span className="animate-fade-up" style={{ animationDelay: '400ms' }}><ButtonWithSlidingText href="https://github.com/danieletulone">github</ButtonWithSlidingText></span>
        <span className="animate-fade-up" style={{ animationDelay: '460ms' }}><ButtonWithSlidingText href="#">medium</ButtonWithSlidingText></span>
        <span className="animate-fade-up" style={{ animationDelay: '520ms' }}><ButtonWithSlidingText href="#">x.com</ButtonWithSlidingText></span>
        <span className="animate-fade-up" style={{ animationDelay: '580ms' }}><ButtonWithSlidingText href="https://linkedin.com/in/daniele-tulone-994b38173">linkedin</ButtonWithSlidingText></span>
      </nav>
    </footer>
  );
}
