import type { DocMeta } from './types';

const entries: DocMeta[] = [
  {
    slug: 'hello-docs',
    title: 'Hello Docs',
    description: 'Why this Docs section exists, how it is authored, and what each article looks like under the hood.',
    tags: ['meta', 'workflow', 'nextjs'],
    updatedAt: '2026-04-23',
    createdAt: '2026-04-23',
  },
];

export const docs: DocMeta[] = [...entries].sort((a, b) =>
  b.updatedAt.localeCompare(a.updatedAt),
);

export function getDocBySlug(slug: string): DocMeta | undefined {
  return docs.find((d) => d.slug === slug);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const doc of docs) for (const tag of doc.tags) set.add(tag);
  return [...set].sort((a, b) => a.localeCompare(b));
}
