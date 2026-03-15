import { SmoothScroll } from '@/components/smooth-scroll';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
