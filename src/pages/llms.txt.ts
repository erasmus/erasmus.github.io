import type { APIContext } from 'astro';
import { SITE } from '../data/site';
import { CV } from '../data/cv';
import {
  isoDate,
  postUrl,
  projectUrl,
  publishedPosts,
  publishedProjects,
  siteUrl,
  textResponse,
} from '../lib/txt';

// Curated index following the llms.txt convention (https://llmstxt.org/):
// a short map of the site for agents. The complete content lives in
// /llms-full.txt, and a plain-text CV in /cv.txt.
export async function GET(context: APIContext) {
  const site = siteUrl(context.site);
  const posts = await publishedPosts();
  const projects = await publishedProjects();

  const currentOrg = CV.experience[0];
  const currentRole = `${currentOrg.positions[0].title} at ${currentOrg.org}${
    currentOrg.positions[0].note
      ? ` — ${currentOrg.positions[0].note.replace(/\.$/, '').replace(/^./, (c) => c.toLowerCase())}`
      : ''
  }`;

  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.lede} ${SITE.description}`,
    `> Currently ${currentRole}.`,
    `> Location: ${SITE.location}. Contact: ${SITE.email}.`,
    '',
    ...(SITE.summary ? [SITE.summary, ''] : []),
    `Last updated: ${isoDate(new Date())}. Canonical URL: ${site}/llms.txt`,
    '',
    '## Docs',
    '',
    `- [Full site content](${site}/llms-full.txt): profile, CV, projects, and complete essay texts in one document`,
    `- [CV](${site}/cv.txt): plain-text curriculum vitae`,
    `- [RSS feed](${site}/feed.xml): essay feed`,
    `- [Sitemap](${site}/sitemap-index.xml)`,
    '',
    '## Projects',
    '',
    ...projects.map(
      (p) => `- [${p.data.title}](${projectUrl(site, p)}): ${p.data.summary}`,
    ),
    '',
    '## Writing',
    '',
    ...posts.map(
      (p) =>
        `- [${p.data.title}](${postUrl(site, p)}): ${p.data.description} (${isoDate(p.data.date)})`,
    ),
    '',
    '## Profile',
    '',
    ...SITE.social.map((s) => `- [${s.label}](${s.url})`),
    '',
  ];

  return textResponse(lines);
}
