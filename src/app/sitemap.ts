import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { docs } from '@/lib/docs/registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danieletulone.vercel.app';
  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/docs', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contacts', priority: 0.6, changeFrequency: 'monthly' },
  ];

  const now = new Date();

  const staticEntries = staticPages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  );

  const docEntries = docs.flatMap((doc) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}/docs/${doc.slug}`,
      lastModified: new Date(doc.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  );

  return [...staticEntries, ...docEntries];
}
