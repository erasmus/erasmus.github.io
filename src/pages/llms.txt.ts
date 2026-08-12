import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';
import { CV } from '../data/cv';
import { CREDITS } from '../data/credits';

// Machine-readable site summary following the llms.txt convention
// (https://llmstxt.org/). Generated at build time from the same data
// that renders the pages, so it can never drift from the site.
export async function GET(context: APIContext) {
  const site = context.site!.toString().replace(/\/$/, '');

  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const projects = (await getCollection('projects')).sort(
    (a, b) => a.data.order - b.data.order,
  );

  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.lede} ${SITE.description}`,
    `> Location: ${SITE.location}. Contact: ${SITE.email}.`,
    '',
    'This file contains the complete content of the site in one document:',
    'profile, CV, projects, and full essay texts.',
    '',
    '## Profile',
    '',
    `- Name: ${SITE.name}`,
    `- Location: ${SITE.location}`,
    `- Email: ${SITE.email}`,
    ...SITE.social.map((s) => `- ${s.label}: ${s.url}`),
    '',
    '## CV',
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
    lines.push(`- ${e.qualification}, ${e.institution} (${e.years})`);
  }

  lines.push(
    '',
    '### Languages',
    '',
    CV.languages.join(' · '),
    '',
    '## Beyond work',
    '',
    ...CREDITS.map((c) => `- ${c.title} — ${c.org}, ${c.year}`),
    '',
    '## Projects',
    '',
  );

  for (const project of projects) {
    const d = project.data;
    lines.push(
      `### ${d.title}`,
      '',
      `- Role: ${d.role}, ${d.org} (${d.years})`,
      `- Domain: ${d.domain}`,
      `- URL: ${site}/projects/${project.id}/`,
      ...(d.links ?? []).map((l) => `- ${l.label}: ${l.url}`),
      '',
      d.summary,
      '',
      (project.body ?? '').trim(),
      '',
    );
  }

  lines.push('## Writing', '');

  for (const post of posts) {
    const year = post.data.date.getUTCFullYear();
    lines.push(
      `### ${post.data.title}`,
      '',
      `- Date: ${post.data.date.toISOString().slice(0, 10)}`,
      `- URL: ${site}/${year}/${post.id}/`,
      ...(post.data.substackUrl ? [`- Substack: ${post.data.substackUrl}`] : []),
      '',
      `${post.data.description}`,
      '',
      (post.body ?? '').trim(),
      '',
    );
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
