import type { APIContext } from 'astro';
import { SITE } from '../data/site';
import { CV } from '../data/cv';
import {
  isoDate,
  projectUrl,
  publishedCredits,
  publishedProjects,
  siteUrl,
  textResponse,
} from '../lib/txt';

// Plain-text curriculum vitae, generated from the same data as the /cv/ page.
export async function GET(context: APIContext) {
  const site = siteUrl(context.site);
  const projects = await publishedProjects();
  const credits = publishedCredits();

  const rule = (title: string) => ['', title.toUpperCase(), '-'.repeat(title.length), ''];

  const lines: string[] = [
    SITE.name,
    `${SITE.lede} ${SITE.description}`,
    `${SITE.location} · ${SITE.email}`,
    ...SITE.social.map((s) => `${s.label}: ${s.url}`),
    `Web: ${site}/`,
    '',
    `Last updated: ${isoDate(new Date())}. Canonical URL: ${site}/cv.txt`,
  ];

  if (SITE.summary) {
    lines.push(...rule('Summary'), SITE.summary);
  }

  lines.push(...rule('Experience'));
  for (const org of CV.experience) {
    for (const p of org.positions) {
      lines.push(`${p.title}, ${org.org} (${p.dates})`);
      if (p.note) lines.push(`  ${p.note}`);
      lines.push('');
    }
  }
  lines.pop();

  lines.push(...rule('Education'));
  for (const e of CV.education) {
    lines.push(`${e.qualification}, ${e.institution} (${e.years})`);
    if (e.note) lines.push(`  ${e.note}`);
    lines.push('');
  }
  lines.pop();

  lines.push(...rule('Languages'), CV.languages.join(' · '));

  if (projects.length > 0) {
    lines.push(...rule('Selected projects'));
    for (const p of projects) {
      lines.push(`${p.data.title} — ${p.data.role}, ${p.data.org}`);
      lines.push(`  ${p.data.summary}`);
      lines.push(`  ${projectUrl(site, p)}`);
      lines.push('');
    }
    lines.pop();
  }

  if (credits.length > 0) {
    lines.push(...rule('Beyond work'), ...credits.map((c) => `${c.title} — ${c.org}, ${c.year}`));
  }

  lines.push('');
  return textResponse(lines);
}
