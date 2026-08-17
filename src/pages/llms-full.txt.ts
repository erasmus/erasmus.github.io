import type { APIContext } from 'astro';
import { SITE } from '../data/site';
import { CV } from '../data/cv';
import {
  publishableBody,
  absolutize,
  isoDate,
  postUrl,
  projectUrl,
  publishedCredits,
  publishedPosts,
  publishedProjects,
  siteUrl,
  textResponse,
} from '../lib/txt';

// Complete site content in one document, per the llms.txt convention
// (https://llmstxt.org/). The curated index lives at /llms.txt.
export async function GET(context: APIContext) {
  const site = siteUrl(context.site);
  const posts = await publishedPosts();
  const projects = await publishedProjects();
  const credits = publishedCredits();

  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.lede} ${SITE.description}`,
    `> Location: ${SITE.location}. Contact: ${SITE.email}.`,
    '',
    'This file contains the complete content of the site in one document:',
    'profile, CV, projects, and full essay texts. A shorter index is at',
    `${site}/llms.txt and a plain-text CV at ${site}/cv.txt.`,
    '',
    `Last updated: ${isoDate(new Date())}. Canonical URL: ${site}/llms-full.txt`,
    '',
    '## Profile',
    '',
    `- Name: ${SITE.name}`,
    `- Location: ${SITE.location}`,
    `- Email: ${SITE.email}`,
    ...SITE.social.map((s) => `- ${s.label}: ${s.url}`),
    `- RSS feed: ${site}/feed.xml`,
    `- Sitemap: ${site}/sitemap-index.xml`,
    '',
    ...(SITE.summary ? ['### Summary', '', SITE.summary, ''] : []),
    '## CV',
    '',
    `A plain-text version of this CV is available at ${site}/cv.txt.`,
    '',
    '### Experience',
    '',
  ];

  for (const org of CV.experience) {
    for (const p of org.positions) {
      lines.push(`- ${p.title}, ${org.org} (${p.dates})${p.note ? ` — ${p.note}` : ''}`);
    }
  }

  lines.push('', '### Education', '');
  for (const e of CV.education) {
    lines.push(
      `- ${e.qualification}, ${e.institution} (${e.years})${e.note ? ` — ${e.note}` : ''}`,
    );
  }

  lines.push('', '### Languages', '', CV.languages.join(' · '), '');

  if (credits.length > 0) {
    lines.push('## Beyond work', '', ...credits.map((c) => `- ${c.title} — ${c.org}, ${c.year}`), '');
  }

  lines.push('## Projects', '');

  for (const project of projects) {
    const d = project.data;
    lines.push(
      `### ${d.title}`,
      '',
      `- Role: ${d.role}, ${d.org} (${d.years})`,
      `- Domain: ${d.domain}`,
      `- URL: ${projectUrl(site, project)}`,
      ...(d.links ?? []).map((l) => `- ${l.label}: ${l.url}`),
      '',
      d.summary,
      '',
      absolutize(publishableBody(project.body), site),
      '',
    );
  }

  lines.push('## Writing', '');

  for (const post of posts) {
    lines.push(
      `### ${post.data.title}`,
      '',
      `- Date: ${isoDate(post.data.date)}`,
      `- URL: ${postUrl(site, post)}`,
      ...(post.data.substackUrl ? [`- Substack: ${post.data.substackUrl}`] : []),
      '',
      `${post.data.description}`,
      '',
      absolutize(publishableBody(post.body), site),
      '',
    );
  }

  return textResponse(lines);
}
