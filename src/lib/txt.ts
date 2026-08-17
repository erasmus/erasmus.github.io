import { getCollection, type CollectionEntry } from 'astro:content';
import { CREDITS, type Credit } from '../data/credits';

// Shared plumbing for the plain-text endpoints (llms.txt, llms-full.txt,
// cv.txt). All of them are generated from the same data that renders the
// pages, so they can never drift from the site.

export function siteUrl(site: URL | undefined): string {
  return site!.toString().replace(/\/$/, '');
}

export async function publishedPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function publishedProjects(): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function publishedCredits(): Credit[] {
  return CREDITS.filter((c) => !c.title.startsWith('PLACEHOLDER'));
}

export function postUrl(site: string, post: CollectionEntry<'posts'>): string {
  return `${site}/${post.data.date.getUTCFullYear()}/${post.id}/`;
}

export function projectUrl(site: string, project: CollectionEntry<'projects'>): string {
  return `${site}/projects/${project.id}/`;
}

// Rewrite root-relative asset references in markdown/HTML bodies to absolute
// URLs, so excerpts of this content still resolve outside the site.
export function absolutize(body: string, site: string): string {
  return body
    .replace(/\]\(\//g, `](${site}/`)
    .replace(/(src|href)="\//g, `$1="${site}/`);
}

// Bodies still containing placeholder text are withheld from the exports
// (the entry's frontmatter summary is still published).
export function publishableBody(body: string | undefined): string {
  const trimmed = (body ?? '').trim();
  return /lorem ipsum|PLACEHOLDER/i.test(trimmed) ? '' : trimmed;
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function textResponse(lines: string[]): Response {
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
