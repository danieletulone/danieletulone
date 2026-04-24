import type { DocMeta } from './types';

export function parseTagsParam(param: string | string[] | undefined): string[] {
  if (!param) return [];
  const raw = Array.isArray(param) ? param.join(',') : param;
  return raw
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);
}

export function filterDocsByTags(docs: DocMeta[], activeTags: string[]): DocMeta[] {
  if (activeTags.length === 0) return docs;
  return docs.filter((doc) => activeTags.every((t) => doc.tags.includes(t)));
}

export function toggleTag(activeTags: string[], tag: string): string[] {
  return activeTags.includes(tag)
    ? activeTags.filter((t) => t !== tag)
    : [...activeTags, tag];
}

export function buildTagsHref(pathname: string, tags: string[]): string {
  if (tags.length === 0) return pathname;
  const params = new URLSearchParams({ tags: tags.join(',') });
  return `${pathname}?${params.toString()}`;
}
